<script lang="ts">
	type Kind = 'default' | 'button' | 'anchor';
	export let kind: Kind = 'default';
	export let center: boolean = false;
	export let sharp: boolean = false;
	export let compact: boolean = false;
	export let href: string;
</script>

<div style="display:contents" class:center class:sharp class:compact>
	{#if kind === 'button'}
		<button type="button" class="tile" on:click {...$$restProps}>
			<slot />
		</button>
	{:else if kind === 'anchor'}
		<a class="tile" on:click {...$$restProps} {href}>
			<slot />
		</a>
	{:else}
		<div class="tile" on:click {...$$restProps}>
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	.tile {
		all: unset;
		box-sizing: border-box;
		background-color: black;
		color: white;
		padding: 2rem;
		border-radius: 1rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		display: block;
		width: 100%;
		display: flex;
		.center & {
			justify-content: center;
		}
		.sharp & {
			border-radius: 0;
		}
		.compact & {
			padding: 1rem;
		}
		&:hover {
			background-color: #222;
		}
	}
</style>
