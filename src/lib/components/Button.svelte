<script lang="ts">
	export let inverted: boolean = false;
	export let danger: boolean = false;
</script>

<button {...$$restProps} on:click class:inverted class:danger>
	<slot />
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		background-color: var(--background);
		color: var(--foreground);
		border: 0.1rem solid transparent;
		&:hover {
			border: 0.1rem solid var(--background);
			background: var(--foreground);
			color: var(--background);
		}
	}

	button.inverted {
		background: var(--foreground);
		color: var(--background);
		border: 0.1rem solid transparent;
		&:hover {
			border: 0.1rem solid var(--foreground);
			background-color: var(--background);
			color: var(--foreground);
		}
	}
	button.danger {
		background-color: red;
	}
</style>
