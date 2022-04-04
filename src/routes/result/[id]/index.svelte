<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';

	/// STATE
	import { page } from '$app/stores';
	import { allPapers } from '$lib/stores/app';
	import { results } from '$lib/stores/user';
	import { afterUpdate } from 'svelte';
	$: id = $page.params.id;
	$: result = $results.find((r) => r.id === Number(id));
	$: paper = result && $allPapers.find((p) => p.id === result.paper);

	$: correct = paper ? result.answers.filter((a, i) => a === paper.questions[i].answer) : [];
	$: skipped = paper ? result.answers.filter((a) => a === null) : [];
	$: incorrect = paper
		? result.answers.filter((a, i) => a !== null && a !== paper.questions[i].answer)
		: [];
	$: score = result ? correct.length * result.cmarks + incorrect.length * result.imarks : 0;

	/// METHODS

	afterUpdate(() => {
		MathLive.renderMathInDocument();
	});
</script>

<div class="container">
	<article>
		<header>
			{#if result && paper}
				<h1>{paper.name} (result id: {id})</h1>
			{:else}
				<p>No result with id {id} found :(</p>
			{/if}
		</header>
		<main>
			<div class="cards">
				<div class="card">
					<h2>Correct</h2>
					<p>{correct.length}</p>
				</div>
				<div class="card">
					<h2>Incorrect</h2>
					<p>{incorrect.length}</p>
				</div>
				<div class="card">
					<h2>Skipped</h2>
					<p>{skipped.length}</p>
				</div>
			</div>
			<div class="card">
				<h2>Score</h2>
				<p>{score}</p>
			</div>
		</main>
		<footer>
			<table>
				<thead>
					<tr>
						<th> Question No. </th>
						<th> Status </th>
						<th> Chosen Option </th>
						<th> Correct Option </th>
					</tr>
				</thead>
				<tbody>
					{#each paper?.questions ?? [] as { answer, options }, index}
						{@const isCorrect = result.answers[index] === answer}
						{@const isSkipped = result.answers[index] === null}
						{@const chosenOption = options.find((o) => o['id'] === result.answers[index])}
						{@const correctOption = options.find((o) => o['id'] === answer)}
						<tr>
							<td>
								{index + 1}
							</td>
							<td class:correct={isCorrect} class:incorrect={!isSkipped && !isCorrect}>
								{isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'}
							</td>
							<td>
								{isSkipped ? '' : chosenOption?.text}
							</td>
							<td>
								{correctOption?.text}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</footer>
	</article>
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
	table {
		width: 100%;
		th {
			background-color: var(--foreground);
			color: var(--background);
		}
		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border: 0.1rem solid var(--foreground);
		}
		td {
			&.correct {
				background-color: green;
				color: white;
				border: 0.1rem solid transparent;
			}
			&.incorrect {
				background-color: red;
				color: white;
				border: 0.1rem solid transparent;
			}
		}
	}
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		.cards {
			display: grid;
			gap: 1rem;
		}
		.card {
			display: flex;
			flex-direction: column;
			place-items: center;
			p {
				font-size: xxx-large;
			}
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
