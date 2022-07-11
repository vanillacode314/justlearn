<script lang="ts">
	import { activeResultQuestion, resultQuestionModal } from '$lib/stores/app';

	import { afterUpdate } from 'svelte';

	/// STATE ///
	let el: HTMLDivElement;
	export let index: number;
	export let question: Question;
	export let isCorrect: boolean;
	export let isSkipped: boolean;

	/// HOOKS ///
	afterUpdate(() => {
		MathLive.renderMathInElement(el);
	});

	function onClick() {
		$activeResultQuestion = question;
		resultQuestionModal.open();
	}
</script>

<div
	on:click={onClick}
	class="result--card"
	class:success={isCorrect}
	class:danger={!isCorrect && !isSkipped}
	bind:this={el}
>
	<span class="question--number">Q{index + 1} )</span>
	<span class="question"
		>{question.text}
		{#if question?.image}
			<small><em><strong>(Expand to see image)</strong></em></small>
		{/if}</span
	>
</div>

<style lang="scss">
	.result--card {
		background-color: gray;
		color: white;
		padding: 2rem;
		border-radius: 1rem;
		cursor: pointer;
		border: none;
		outline: none;
		transition: all 0.2s ease-in-out;
		&.success {
			background-color: green;
			&:hover {
				background-color: limegreen;
			}
		}
		&.danger {
			background-color: maroon;
			&:hover {
				background-color: red;
			}
		}
		&:hover {
			background-color: #222;
		}
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1rem;
		.question--number {
			font-weight: bold;
		}
		.question {
			overflow: auto hidden;
			font-size: large;
		}
	}
</style>
