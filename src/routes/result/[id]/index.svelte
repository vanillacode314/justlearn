<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import VirtualList from '@sveltejs/svelte-virtual-list';
	import IconDelete from '~icons/mdi/delete';

	/// STATE
	import { page } from '$app/stores';
	import { activeResult, allPapers } from '$lib/stores/app';
	import { results } from '$lib/stores/user';
	import { afterUpdate, onMount } from 'svelte';
	import ResultQuestion from '$lib/layouts/ResultQuestion.svelte';
	import { goto } from '$app/navigation';
	import ResultCard from '$lib/layouts/ResultCard.svelte';
	$: id = $page.params.id;
	$: result = $results.find((r) => r.id === Number(id));
	$: $activeResult = result;
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
			<div class="bullets">
				<div class="bullet">
					<div class="circle" style:background-color="lime" />
					<span>Correct: {correct.length}</span>
				</div>
				<div class="bullet">
					<div class="circle" style:background-color="red" />
					<span>Incorrect: {incorrect.length}</span>
				</div>
				<div class="bullet">
					<div class="circle" style:background-color="gray" />
					<span>Skipped: {skipped.length}</span>
				</div>
				<!-- <div class="bullet"> -->
				<!-- 	<div class="circle" style:background-color="black" /> -->
				<!-- 	<span>Score: {score}</span> -->
				<!-- </div> -->
			</div>
			<div class="score--card">
				<h3>Score 🏆</h3>
				<p>{score}</p>
			</div>
		</main>
		<footer>
			{#each questions as question}
				<!-- <VirtualList items={questions} let:item={question} height="800px"> -->
				{@const { answer, options } = question}
				{@const index = questions.findIndex((q) => q === question)}
				{@const isCorrect = result.answers[index] === answer}
				{@const isSkipped = result.answers[index] === null}
				{@const chosenOption = options.find((o) => o['id'] === result.answers[index])}
				{@const correctOption = options.find((o) => o['id'] === answer)}
				<ResultCard {question} {index} {isCorrect} {isSkipped} />
			{/each}
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
	.score--card {
		width: 100%;
		background-color: black;
		color: white;
		padding: 2rem;
		border-radius: 1rem;
		margin-block: 1rem;
		h3 {
			font-size: x-large;
		}
		p {
			font-size: xxx-large;
		}
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
	.bullet {
		display: flex;
		gap: 0.5rem;
		font-size: small;
		align-items: center;
		.circle {
			--diameter: 10px;
			width: var(--diameter);
			height: var(--diameter);
			border-radius: 50%;
		}
	}
	.bullets {
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
	}
	main {
		grid-area: main;
		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
	footer {
		grid-area: footer;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		gap: 1rem;
	}
</style>
