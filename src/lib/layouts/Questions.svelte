<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/// STATE
	export let questions: Question[];
	export let offset: number = 0;
	export let marks: boolean[];
	export let answers: Question['answer'][];

	/// METHODS
	function onClick(i: number) {
		dispatch('select', i);
	}
</script>

<div class="question--grid">
	{#each questions as _, index}
		{@const isAnswered = answers[index] !== null}
		{@const isMarked = marks[index]}
		<Button
			type="button"
			on:click={() => onClick(index + offset)}
			outlined
			success={isAnswered}
			inverted={isMarked}
		>
			{index + offset + 1}
		</Button>
	{/each}
</div>

<style lang="scss">
	.question--grid {
		background-color: var(--background);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
		padding-top: 0.1rem;
		gap: 0.1rem;
	}
</style>
