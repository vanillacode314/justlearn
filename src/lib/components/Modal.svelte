<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import { quadInOut } from 'svelte/easing';

	export function modalStore() {
		const { subscribe, set, update } = writable<boolean>(false);
		const open = () => set(true);
		const close = () => set(false);
		const toggle = () => update((t) => !t);
		return {
			subscribe,
			set,
			update,
			open,
			close,
			toggle
		};
	}
</script>

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
	<div class="backdrop" transition:fade={{ duration: 200 }} />
	<main
		on:click|self={() => closeOnOutsideClick && (open = false)}
		transition:scale={{ duration: 250, easing: quadInOut }}
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
