<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import VirtualList from '@sveltejs/svelte-virtual-list';

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
			<VirtualList items={paper?.questions} let:item={question}>
				{@const { answer, options } = question}
				{@const index = paper.questions.findIndex((q) => q === question)}
				{@const isCorrect = result.answers[index] === answer}
				{@const isSkipped = result.answers[index] === null}
				{@const chosenOption = options.find((o) => o['id'] === result.answers[index])}
				{@const correctOption = options.find((o) => o['id'] === answer)}
				<div class="item">
					<ResultQuestion
						{isCorrect}
						{isSkipped}
						{chosenOption}
						{correctOption}
						{question}
						{index}
					/>
				</div>
			</VirtualList>
		</footer>
	{:else}
		<p>No result with id {id} found :(</p>
	{/if}
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-rows: auto auto 1fr;
		grid-template-columns: 1fr;
		grid-template-areas: 'header' 'main' 'footer';
		gap: 1rem;
		padding: 1rem;
		max-height: 100%;
	}
	header {
		grid-area: header;
		h1 {
			font-size: large;
			margin: 0;
		}
	}
	main {
		grid-area: main;
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
		.cards {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 1rem;
			.card {
				border: 0.1rem var(--foreground) solid;
				padding: 1rem;
			}
			h2 {
				font-size: small;
			}
			p {
				font-size: xx-large;
			}
		}
		.card {
			display: flex;
			flex-direction: column;
			place-items: center;
		}
	}
	footer {
		grid-area: footer;
		.item {
			margin-block: 0.1rem;
		}
	}
</style>
