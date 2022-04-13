<script lang="ts" context="module">
	export interface AccordionItem {
		heading: string;
		data: any;
	}
</script>

<script lang="ts">
	import { slide } from 'svelte/transition';
	/// COMPONENTS
	import IconDown from '~icons/mdi/chevron-down';

	/// STATE
	export let items: AccordionItem[];
	export let key: Function = (t: any) => t;
	let activeIndex: number = 0;

	/// METHODS
	function toggleState(index: number) {
		if (activeIndex === index) {
			activeIndex = -1;
			return;
		}
		activeIndex = index;
	}
</script>

{#each items as item, index (key(item))}
	{@const active = index === activeIndex}
	<div class:active>
		<header>
			<h3>
				{item.heading}
			</h3>
			<span class="spacer" />
			<button type="button" on:click={() => toggleState(index)}
				><IconDown style="color:var(--background)" /></button
			>
		</header>
		{#if active}
			<main transition:slide>
				<slot {item} {index} />
			</main>
		{/if}
	</div>
{/each}

<style lang="scss">
	div {
		header {
			background-color: var(--foreground);
			color: var(--background);
			display: flex;
			align-items: center;
			padding: 0.5rem 1rem;
			.spacer {
				flex-grow: 1;
			}
			button {
				background: none;
				outline: none;
				border: none;
				cursor: pointer;
				transition: transform 0.3s ease-in-out;
			}
		}
		/* main { */
		/* 	display: none; */
		/* } */
		&.active {
			header {
				button {
					transform: rotate(180deg);
				}
			}
			/* main { */
			/* 	display: block; */
			/* } */
		}
	}
</style>
