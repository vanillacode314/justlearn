<script lang="ts" context="module">
	import { slide } from 'svelte/transition';

	export interface AccordionItem {
		heading: string;
		component: any;
		props: any;
	}
</script>

<script lang="ts">
	/// COMPONENTS
	import IconDown from '~icons/mdi/chevron-down';

	/// STATE
	export let items: AccordionItem[];
	export let key: Function = (t) => t;
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
				<!-- HACK: static event forwarding -->
				<svelte:component this={item.component} on:select {...item.props} />
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
