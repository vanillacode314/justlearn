<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import Question from '$lib/layouts/Question.svelte';

	/// STATE
	import { page } from '$app/stores';
	import { papers, results } from '$lib/stores/user';
	import { sharedPapers } from '$lib/stores/app';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	$: allPapers = $sharedPapers.concat($papers);
	$: id = $page.params.id;
	$: result = $results.find((r) => r.id === Number(id));
	$: paper = result && allPapers.find((p) => p.id === result.paper);
	let currentQuestion: number = 0;
	let answers = new Array(paper?.questions?.length ?? 0).map(() => -1);
	let marks = new Array(paper?.questions?.length ?? 0).map(() => false);
	let start_time: number = Date.now();

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

	onMount(() => {
		answers = new Array(paper?.questions?.length ?? 0).map(() => -1);
		marks = new Array(paper?.questions?.length ?? 0).map(() => false);
		if (result.done) {
			goto('/result/' + result.id);
		}
	});

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
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-rows: 1fr auto;
		grid-template-areas: 'main main' 'footer footer';
		padding: 1rem;
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
