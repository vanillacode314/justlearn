<script lang="ts">
	export let inverted: boolean = false;
	export let outlined: boolean = false;
	export let success: boolean = false;
	export let danger: boolean = false;
	export let large: boolean = false;
</script>

<button
	{...$$restProps}
	on:click
	class:success
	class:inverted
	class:danger
	class:outlined
	class:large
>
	<slot />
</button>

<style lang="scss">
	button {
		display: flex;
		border-radius: 0.5rem;
		justify-content: center;
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
		&.large {
			font-size: xx-large;
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

	button.outlined:not(.success) {
		border: 0.1rem solid var(--foreground);
		&.inverted {
			border: 0.1rem solid var(--background);
		}
	}

	button.danger {
		background-color: red;
		color: var(--background);
		&:hover {
			background-color: var(--background);
			color: var(--foreground);
			border: 0.1rem solid red;
		}
	}

	button.success {
		background-color: green;
		color: var(--background);
		&:hover {
			background-color: var(--background);
			color: var(--foreground);
			border: 0.1rem solid green;
		}
	}
</style>
