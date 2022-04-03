<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	/// STATE
	export let open: boolean = false;

	$: open && dispatch('open');
</script>

{#if open}
	<div on:click|self={() => (open = false)} transition:fade={{ duration: 150 }} class="modal">
		<slot />
	</div>
{/if}

<style lang="scss">
	.modal {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		backdrop-filter: brightness(50%) blur(2px);
		z-index: 10000;
		display: grid;
		place-items: center;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
</style>
