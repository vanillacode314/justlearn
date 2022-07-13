<script lang="ts">
	/// COMPONENTS
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

	/// STATE
	import {
		activeResultQuestion,
		activeResult,
		resultQuestionModal,
		allPapers
	} from '$lib/stores/app';
	import { afterUpdate } from 'svelte';

	let index: number = -1,
		isCorrect: boolean = false,
		isSkipped: boolean = false,
		chosenOption: Option = {},
		correctOption: Option = {},
		el: HTMLFormElement;

	/// METHODS
	function onOpen() {
		const { answer, options } = $activeResultQuestion;
		const paper = $allPapers.find((p) => p.id === $activeResult.paper);
		index = paper.questions.findIndex((q) => q === $activeResultQuestion);
		isCorrect = $activeResult.answers[index] === answer;
		isSkipped = $activeResult.answers[index] === null;
		chosenOption = options.find((o) => o['id'] === $activeResult.answers[index]);
		correctOption = options.find((o) => o['id'] === answer);
	}

	afterUpdate(() => {
		// @ts-ignore
		MathLive.renderMathInElement(el);
	});
</script>

<Modal bind:open={$resultQuestionModal} on:open={onOpen} closeOnOutsideClick>
	<form bind:this={el}>
		<header>
			<h3>Question ({isCorrect ? 'Correct' : isSkipped ? 'Skipped' : 'Incorrect'})</h3>
		</header>
		<div class="form">
			<h2>
				Q{index}) {$activeResultQuestion.text}
			</h2>
			{#if $activeResultQuestion.image}
				<img src={$activeResultQuestion.image} alt="question" />
			{/if}
			<div class="options">
				<h4>Options (green is correct and red is your chosen option if not chosen correctly)</h4>
				{#each $activeResultQuestion.options as option}
					{#key option}
						<label>
							<input
								on:click|preventDefault
								type="radio"
								class:correct={option['id'] === $activeResultQuestion.answer}
								checked={chosenOption?.id === option['id'] || option['id'] === correctOption.id}
							/>
							{#if option?.text}
								{option.text}
							{/if}
							{#if option?.image}
								<img src={option.image} alt="option {option.id}" />
							{/if}
						</label>
					{/key}
				{/each}
			</div>
			<div class="more--info">
				<h4>More info:</h4>
				<span>
					<strong>Chapter</strong>: {$activeResultQuestion.chapter}
				</span>
				<span>
					<strong>Subject</strong>: {$activeResultQuestion.subject}
				</span>
			</div>
		</div>
		<div class="actions">
			<Button type="button" inverted on:click={resultQuestionModal.close}>Close</Button>
		</div>
	</form>
</Modal>

<style lang="scss">
	form {
		max-width: 95%;
		background-color: var(--background);
		header {
			background-color: var(--foreground);
			color: var(--background);
			padding: 0.5rem 1rem;
			font-size: large;
		}
		div.form {
			padding: 1rem;
			display: grid;
			gap: 1rem;
		}
		div.actions {
			display: grid;
			grid-template-columns: 1fr;
			width: 100%;
		}
	}
	img {
		width: 100%;
		max-width: 720px;
	}
	.options {
		margin-top: 0.5rem;
		display: grid;
		gap: 0.3rem;
	}
	input[type='radio'] {
		accent-color: red;
	}
	.correct[type='radio'] {
		accent-color: green;
	}
	.more--info {
		margin-top: 1rem;
		display: grid;
		gap: 0.3rem;
	}
</style>
