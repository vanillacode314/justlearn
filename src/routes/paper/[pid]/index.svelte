<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import Question from '$lib/layouts/Question.svelte';

	/// STATE
	import { page } from '$app/stores';
	import { papers } from '$lib/stores/user';
	import { activePaper, addQuestionModalOpen, deletePaperModalOpen } from '$lib/stores/app';
	$: id = $page.params.pid;
	$: paper = $papers.find((p) => p.id === Number(id));
	$: $activePaper = paper;
	let currentQuestion: number = 0;
	let answers = new Array(paper?.questions?.length ?? 0);

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
</script>

<div class="container">
	<main>
		{#if paper}
			<h1>{paper.name}</h1>
			{#if paper.questions.length}
				<Question
					question={paper.questions[currentQuestion]}
					bind:answer={answers[currentQuestion]}
				/>
				<div class="buttons">
					<Button on:click={prev}>Prev</Button>
					<Button on:click={next} inverted>Next</Button>
				</div>
			{:else}
				<p>No questions found</p>
			{/if}
		{:else}
			<p>No paper with id {id} found :(</p>
		{/if}
	</main>
</div>

<style lang="scss">
	.container {
		height: 100%;
	}
	main {
		grid-area: main;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		h1 {
			font-size: large;
			margin: 0;
		}
		.buttons {
			display: flex;
			gap: 1rem;
		}
	}
</style>
