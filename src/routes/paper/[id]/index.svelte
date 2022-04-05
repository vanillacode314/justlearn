<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import Question from '$lib/layouts/Question.svelte';
	import Questions from '$lib/layouts/Questions.svelte';
	import Accordion, { type AccordionItem } from '$lib/components/Accordion.svelte';

	/// UTILS
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	/// STATE
	import { page } from '$app/stores';
	import { results, subjects } from '$lib/stores/user';
	import { allPapers } from '$lib/stores/app';
	import { writable } from 'svelte/store';

	const id = $page.params.id;

	let result: TestResult,
		paper: Paper,
		answers: Option['id'][] = [],
		marks: boolean[] = [];
	let currentQuestion: number = 0;
	let start_time: number = Date.now();
	let accordionItems: AccordionItem[] = [];

	$: {
		for (const item of accordionItems) {
			const offset = item.props.offset;
			const questions = item.props.questions;
			item.props.answers = answers.slice(offset, questions.length + offset);
			item.props.marks = marks.slice(offset, questions.length + offset);
		}
		accordionItems = accordionItems;
	}

	/// LIFECYCLE HOOKS
	onMount(() => {
		result = $results.find((r) => r.id === Number(id));
		if (result.done) {
			goto('/result/' + result.id);
		}

		paper = $allPapers.find((p) => p.id === result.paper);
		paper.questions.sort((a, b) => {
			if (a.subject > b.subject) {
				return 1;
			} else if (a.subject < b.subject) {
				return -1;
			}
			return 0;
		});
		answers = new Array(paper?.questions?.length ?? 0).fill(null);
		marks = new Array(paper?.questions?.length ?? 0).fill(false);
		const filteredSubjects = $subjects.filter((s) =>
			paper?.questions.some((p) => p.subject === s.name)
		);
		filteredSubjects.sort((a, b) => {
			if (a.name > b.name) {
				return 1;
			} else if (a.name < b.name) {
				return -1;
			}
			return 0;
		});
		let offset: number = 0;
		filteredSubjects.forEach((s) => {
			const questions = paper.questions.filter((p) => p.subject === s.name);
			const item = {
				heading: s.name,
				component: Questions,
				props: {
					questions,
					offset,
					answers: answers.slice(offset, offset + questions.length),
					marks: marks.slice(offset, offset + questions.length)
				}
			};
			accordionItems.push(item);
			offset += questions.length;
		});
		accordionItems = accordionItems;
	});

	/// METHODS
	function next() {
		if (currentQuestion < paper.questions.length - 1) {
			currentQuestion++;
		}
	}
	function prev() {
		if (currentQuestion > 0) {
			currentQuestion--;
		}
	}

	function submit() {
		const c = confirm("Are you sure you'd like to submit the paper before the time is up?");
		if (c) {
			let end_time: number = Date.now();
			result.done = true;
			result.seconds_taken = (end_time - start_time) / 1000;
			result.answers = answers;
			$results = $results;
			goto('/result/' + result.id);
		}
	}

	function toggleMark() {
		marks[currentQuestion] = !marks[currentQuestion];
	}
</script>

<div class="container">
	<main>
		{#if paper}
			<h1>{paper.name}</h1>
			{#if paper.questions.length}
				<Question
					index={currentQuestion}
					question={paper.questions[currentQuestion]}
					bind:answer={answers[currentQuestion]}
				/>
			{:else}
				<p>No questions found</p>
			{/if}
		{:else}
			<p>No paper with id {id} found :(</p>
		{/if}
	</main>
	<aside>
		<Accordion items={accordionItems} on:select={(e) => (currentQuestion = e.detail)} />
	</aside>
	<footer>
		<div class="buttons">
			<Button type="button" on:click={prev}>Prev</Button>
			<Button type="button" on:click={next} inverted>Next</Button>
			<Button
				type="button"
				on:click={toggleMark}
				danger={marks[currentQuestion]}
				success={!marks[currentQuestion]}>{marks[currentQuestion] ? 'Unmark' : 'Mark'}</Button
			>
			<span class="spacer" />
			<Button type="button" on:click={submit} inverted>Submit</Button>
		</div>
	</footer>
</div>

<style lang="scss">
	.container {
		height: 100%;
		overflow-y: hidden;
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 1fr auto;
		grid-template-areas: 'main sidebar' 'footer sidebar';
		padding: 1rem;
		gap: 1rem;
		@media (max-width: 768px) {
			grid-template-areas: 'main main' 'footer footer' 'sidebar sidebar';
		}
	}
	main {
		grid-area: main;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		h1 {
			font-size: large;
			margin: 0;
		}
	}
	aside {
		grid-area: sidebar;
		overflow-y: auto;
	}
	footer {
		grid-area: footer;
	}
	.buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		.spacer {
			flex-grow: 1;
			height: 0;
			@media (max-width: 768px) {
				flex-grow: initial;
				flex-basis: 100%;
			}
		}
	}
</style>
