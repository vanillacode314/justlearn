<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import IconDelete from '~icons/mdi/delete';

	/// STATE
	import { page } from '$app/stores';
	import { allPapers } from '$lib/stores/app';
	import { results } from '$lib/stores/user';
	import { afterUpdate, onMount } from 'svelte';
	import ResultQuestion from '$lib/layouts/ResultQuestion.svelte';
	import { goto } from '$app/navigation';
	$: id = $page.params.id;
	$: result = $results.find((r) => r.id === Number(id));
	$: paper = result && $allPapers.find((p) => p.id === result.paper);

	$: questions =
		(paper?.questions &&
			[...paper?.questions].sort((a, b) => {
				if (a.subject > b.subject) return 1;
				if (a.subject < b.subject) return -1;
				return 0;
			})) ||
		[];
	$: correct = paper ? result.answers.filter((a, i) => a === questions[i].answer) : [];
	$: skipped = paper ? result.answers.filter((a) => a === null) : [];
	$: incorrect = paper
		? result.answers.filter((a, i) => a !== null && a !== questions[i].answer)
		: [];
	$: score = result ? correct.length * result.cmarks + incorrect.length * result.imarks : 0;

	onMount(() => {});

	/// METHODS
	afterUpdate(() => {
		MathLive.renderMathInDocument();
	});

	async function removeResult() {
		await goto('/results');
		$results = $results.filter((r) => r.id !== result.id);
	}
</script>

<div class="container">
	{#if result && paper}
		<header>
			<h1>{paper.name} (result id: {id})</h1>
			<span class="spacer" />
			<Button outlined on:click={removeResult}>
				<IconDelete />
				Delete
			</Button>
		</header>
		<main>
			<div class="cards">
				<div class="card success">
					<span class="name">Correct (Marks +{result.cmarks})</span>
					<p>{correct.length}</p>
				</div>
				<div class="card danger">
					<span class="name">Incorrect (Marks {result.imarks})</span>
					<p>{incorrect.length}</p>
				</div>
				<div class="card neutral">
					<span class="name">Skipped</span>
					<p>{skipped.length}</p>
				</div>
				<div class="card">
					<span class="name">Score 🏆</span>
					<p>{score}</p>
				</div>
			</div>
		</main>
		<footer>
			<VirtualList items={questions} let:item={question} height="800px">
				{@const { answer, options } = question}
				{@const index = questions.findIndex((q) => q === question)}
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
		display: flex;
		align-items: center;
		gap: 1rem;
		.spacer {
			flex-grow: 1;
		}
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
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: 1rem;
			.card {
				background-color: black;
				color: white;
				padding: 2rem;
				border-radius: 1rem;
				cursor: pointer;
				border: none;
				outline: none;
				transition: all 0.2s ease-in-out;
				/* &:hover { */
				/* 	background-color: #222; */
				/* } */
				&.success {
					background-color: green;
				}
				&.danger {
					background-color: red;
				}
				&.neutral {
					background-color: gray;
				}
				display: grid;
				gap: 1rem;
				.name {
					text-align: center;
					font-weight: bold;
					font-size: x-large;
				}
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
