<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';

	/// STATE
	import { page } from '$app/stores';
	import { allPapers } from '$lib/stores/app';
	import { results } from '$lib/stores/user';
	import { afterUpdate, onMount } from 'svelte';
	import ResultQuestion from '$lib/layouts/ResultQuestion.svelte';
	$: id = $page.params.id;
	$: result = $results.find((r) => r.id === Number(id));
	$: paper = result && $allPapers.find((p) => p.id === result.paper);

	$: correct = paper ? result.answers.filter((a, i) => a === paper.questions[i].answer) : [];
	$: skipped = paper ? result.answers.filter((a) => a === null) : [];
	$: incorrect = paper
		? result.answers.filter((a, i) => a !== null && a !== paper.questions[i].answer)
		: [];
	$: score = result ? correct.length * result.cmarks + incorrect.length * result.imarks : 0;

	onMount(() => {});

	/// METHODS
	afterUpdate(() => {
		MathLive.renderMathInDocument();
	});
</script>

<div class="container">
	{#if result && paper}
		<article>
			<header>
				<h1>{paper.name} (result id: {id})</h1>
			</header>
			<main>
				<div class="cards">
					<div class="card">
						<h2>Correct (Marks +{result.cmarks})</h2>
						<p>{correct.length}</p>
					</div>
					<div class="card">
						<h2>Incorrect (Marks {result.imarks})</h2>
						<p>{incorrect.length}</p>
					</div>
					<div class="card">
						<h2>Skipped</h2>
						<p>{skipped.length}</p>
					</div>
					<div class="card">
						<h2>Score</h2>
						<p>{score}</p>
					</div>
				</div>
			</main>
			<footer>
				{#each paper?.questions ?? [] as question, index}
					{@const { answer, options } = question}
					{@const isCorrect = result.answers[index] === answer}
					{@const isSkipped = result.answers[index] === null}
					{@const chosenOption = options.find((o) => o['id'] === result.answers[index])}
					{@const correctOption = options.find((o) => o['id'] === answer)}
					<ResultQuestion
						{isCorrect}
						{isSkipped}
						{chosenOption}
						{correctOption}
						{question}
						{index}
					/>
					<!-- <td> -->
					<!-- 	{index + 1} -->
					<!-- </td> -->
					<!-- <td class:correct={isCorrect} class:incorrect={!isSkipped && !isCorrect}> -->
					<!-- 	{isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'} -->
					<!-- </td> -->
					<!-- <td> -->
					<!-- 	{isSkipped ? '' : chosenOption?.text} -->
					<!-- </td> -->
					<!-- <td> -->
					<!-- 	{correctOption?.text} -->
					<!-- </td> -->
				{/each}
			</footer>
		</article>
	{:else}
		<p>No result with id {id} found :(</p>
	{/if}
</div>

<style lang="scss">
	.container {
		overflow-y: auto;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas: 'main' 'footer';
		padding: 1rem;
	}
	.card {
		border: 0.1rem var(--foreground) solid;
		padding: 1rem;
	}
	footer {
		display: grid;
		gap: 0.1rem;
	}
	main {
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
		.cards {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 1rem;
		}
		.card {
			display: flex;
			flex-direction: column;
			place-items: center;
		}
	}
	article {
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
</style>
