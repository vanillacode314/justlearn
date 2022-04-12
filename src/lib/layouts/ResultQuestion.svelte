<script lang="ts">
	import { afterUpdate } from 'svelte';

	/// COMPONENTS
	import { slide } from 'svelte/transition';
	import IconDown from '~icons/mdi/chevron-down';

	/// STATE
	export let question: Question;
	export let index: number;
	export let isCorrect: boolean;
	export let isSkipped: boolean;
	export let chosenOption: Option;
	export let correctOption: Option;
	let active: boolean = false;

	/// METHODS
	afterUpdate(() => {
		MathLive.renderMathInDocument();
	});
</script>

<section>
	<button type="button" class:active on:click={() => (active = !active)}>
		<header class:isCorrect class:isSkipped>
			<p>
				Q{index + 1}) {question.text}
				{#if question.image} <strong>(Expand to see image)</strong> {/if}
			</p>
			<span class="spacer" />
			<IconDown class="icon--down" />
		</header>
	</button>
	{#if active}
		<div class="main" transition:slide>
			{#if question.image}
				<img src={question.image} alt="question" />
			{/if}
			<div class="options">
				<h4>Options (green is correct and red is your chosen option if not chosen correctly)</h4>
				{#each question.options as option}
					{#key option}
						<label>
							<input
								on:click|preventDefault
								type="radio"
								class:correct={option['id'] === question.answer}
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
					Chapter: {question.chapter}
				</span>
				<span>
					Subject: {question.subject}
				</span>
			</div>
		</div>
	{/if}
</section>

<style lang="scss">
	img {
		width: 100%;
		max-width: 500px;
	}
	button {
		width: 100%;
		cursor: pointer;
		background: none;
		outline: none;
		border: none;
		text-align: left;
		&.active {
			:global(.icon--down) {
				transform: rotate(180deg);
			}
		}
	}
	:global(.icon--down) {
		transition: transform 0.3s ease-in-out;
	}
	header {
		display: flex;
		border: 0.1rem var(--foreground) solid;
		padding: 0.5rem;
		&.isCorrect {
			border: none;
			background-color: green;
			color: white;
			:global(.icon--down) {
				color: white;
			}
		}
		&:not(:is(.isCorrect, .isSkipped)) {
			border: none;
			background-color: red;
			color: white;
			:global(.icon--down) {
				color: white;
			}
		}
		.spacer {
			flex-grow: 1;
		}
	}
	.main {
		border: 0.1rem var(--foreground) solid;
		margin-block: 0.1rem;
		padding: 0.5rem;
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
	}
</style>
