<script lang="ts">
</script>

<nav {...$$restProps}>
	<slot />
</nav>

<style lang="scss">
	nav {
		overflow: hidden;
		/* border-radius: 0 1rem 1rem 0; */
		grid-area: sidebar;
		display: flex;
		flex-direction: column;
		background: var(--foreground);
		color: var(--background);
		@media (max-width: 768px) {
			flex-direction: row;
		}
	}
</style>
