<script lang="ts">
	export let question: Question;
	export let index: number = -1;
	export let answer: Option['id'];
	console.log({ answer });
	$: questionNo = index + 1;

	import { afterUpdate } from 'svelte';
	afterUpdate(() => {
		MathLive.renderMathInDocument();
	});
</script>

<article>
	{#if question?.image}
		<img src={question.image} alt="question" />
	{/if}
	<h2>
		Q{questionNo > 0 ? questionNo : ''})
		{#key question.text}
			<span>
				{question.text}
			</span>
		{/key}
	</h2>
	<div class="options">
		{#each question.options as option}
			<label>
				<input type="radio" bind:group={answer} name={String(question.id)} value={option.id} />
				{#if option?.text}
					{option.text}
				{/if}
				{#if option?.image}
					<img src={option.image} alt="option {option.id}" />
				{/if}
			</label>
		{/each}
	</div>
</article>

<style lang="scss">
	article {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: auto 1fr;
		grid-template-areas: 'heading image' 'options image';
		align-content: start;
		gap: 1rem;
		gap: 1rem;
		img {
			grid-area: image;
			width: 100%;
		}
		h2 {
			grid-area: heading;
		}
	}
	.options {
		grid-area: options;
		display: flex;
		flex-direction: column;
		label {
			display: flex;
			justify-content: start;
			align-items: center;
			gap: 1rem;
			width: auto;
			img {
				width: auto;
				height: 5rem;
			}
		}
	}
	.options label {
		margin: 0.5em;
	}
</style>
