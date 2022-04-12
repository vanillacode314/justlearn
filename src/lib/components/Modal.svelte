<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, scale } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	/// STATE
	export let open: boolean = false;
	export let closeOnOutsideClick: boolean = false;

	$: open && dispatch('open');
</script>

{#if open}
	<div class="backdrop" transition:fade={{ duration: 150 }} />
	<main
		on:click|self={() => closeOnOutsideClick && (open = false)}
		transition:scale={{ duration: 400 }}
	>
		<slot />
	</main>
{/if}

<style lang="scss">
	.backdrop {
		position: fixed;
		inset: -10rem;
		z-index: 10;
		opacity: 0.8;
		background-color: black;
	}
	main {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 10000;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
</style>
