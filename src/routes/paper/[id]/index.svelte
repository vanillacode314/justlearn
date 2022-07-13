<script lang="ts">
	/// COMPONENTS ///
	import Button from '$lib/components/Button.svelte';
	import Question from '$lib/layouts/Question.svelte';
	import Questions from '$lib/layouts/Questions.svelte';
	import IconUp from '~icons/mdi/chevron-up';
	import Accordion, { type AccordionItem } from '$lib/components/Accordion.svelte';

	/// UTILS
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import DurationUnitFormat from 'intl-unofficial-duration-unit-format';
	const duration = new DurationUnitFormat(undefined, {
		style: DurationUnitFormat.styles.TIMER,
		format: '{hour}:{minutes}:{seconds}'
	});

	/// STATE
	import { page } from '$app/stores';
	import { results, subjects } from '$lib/stores/user';
	import { allPapers } from '$lib/stores/app';
	import timer from '$lib/stores/timer';
	let container: HTMLDivElement;

	const id = $page.params.id;
	const countdown = timer({ interval: 100 });

	let result: TestResult,
		paper: Paper,
		answers: Option['id'][] = [],
		marks: boolean[] = [];
	let currentQuestion: number = 0;
	let start_time: number = Date.now();
	let accordionItems: AccordionItem[] = [];

	// auto submit on time up
	$: if (($countdown.getTime() - start_time) / 1000 >= result?.total_time_available * 60) {
		submit();
	}

	// update accordion
	$: for (const item of accordionItems) {
		const offset = item.data.offset;
		const questions = item.data.questions;
		item.data.answers = answers.slice(offset, questions.length + offset);
		item.data.marks = marks.slice(offset, questions.length + offset);
	}
	accordionItems = accordionItems;

	/// LIFECYCLE HOOKS ///
	onMount(() => {
		// get result
		result = $results.find((r) => r.id === Number(id));

		// if already done redirect to result
		if (result.done) {
			goto('/result/' + result.id);
		}

		// get paper
		paper = $allPapers.find((p) => p.id === result.paper);
		// sort subjects
		paper.questions.sort((a, b) => {
			if (a.subject > b.subject) {
				return 1;
			} else if (a.subject < b.subject) {
				return -1;
			}
			return 0;
		});

		// setup answers and marks array
		answers = new Array(paper?.questions?.length ?? 0).fill(null);
		marks = new Array(paper?.questions?.length ?? 0).fill(false);

		// filter and sort subjects for accordion
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

		// setup accordion
		filteredSubjects.forEach((s) => {
			const questions = paper.questions.filter((p) => p.subject === s.name);
			const item = {
				heading: s.name,
				data: {
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

	/// METHODS ///
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

	function clear() {
		answers[currentQuestion] = null;
	}

	function submit() {
		let c = false;
		if (!(($countdown.getTime() - start_time) / 1000 >= result?.total_time_available * 60)) {
			c = confirm("Are you sure you'd like to submit the paper before the time is up?");
		}
		if (c || ($countdown.getTime() - start_time) / 1000 >= result?.total_time_available * 60) {
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

<div class="container" bind:this={container}>
	<main>
		<div class="main">
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
		</div>
		<div class="actions">
			<div class="buttons">
				<Button type="button" on:click={prev}>Prev</Button>
				<Button type="button" on:click={next} inverted>Next</Button>
				<Button type="button" on:click={clear} danger>Clear</Button>
				<Button
					type="button"
					on:click={toggleMark}
					danger={marks[currentQuestion]}
					success={!marks[currentQuestion]}>{marks[currentQuestion] ? 'Unmark' : 'Mark'}</Button
				>
				<span class="spacer" />
				<Button type="button" on:click={submit} inverted
					>Submit ({duration.format(
						result?.total_time_available * 60 - ($countdown.getTime() - start_time) / 1000
					)})</Button
				>
			</div>
		</div>
	</main>
	<aside>
		<Accordion items={accordionItems} let:item>
			<Questions {...item.data} on:select={(e) => (currentQuestion = e.detail)} />
		</Accordion>
		<button on:click={() => container.scrollTo({ top: 0, behavior: 'smooth' })} class="goto--top"
			><IconUp style="font-size: 2em;" /></button
		>
	</aside>
</div>

<style lang="scss">
	.goto--top {
		display: none;
		cursor: pointer;
		outline: none;
		border: none;
		background-color: black;
		aspect-ratio: 1;
		color: white;
		border-radius: 50%;
		margin-top: 1rem;
		float: right;
		@media screen and (max-width: 768px) {
			display: block;
		}
	}
	.container {
		min-height: 100%;
		max-height: 100%;
		overflow-y: auto;
		padding: 1rem;
		display: grid;
		gap: 1rem;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'main sidebar';
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr;
			grid-template-rows: 100% auto;
			grid-template-areas: 'main' 'sidebar';
		}
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 1rem;
		h1 {
			font-size: large;
			margin: 0;
		}
	}
	aside {
		grid-area: sidebar;
		display: block;
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
