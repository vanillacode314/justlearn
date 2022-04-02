<script lang="ts">
	import { page } from '$app/stores';

	import IconBack from '~icons/mdi/arrow-back';
	import IconCog from '~icons/mdi/cog';

	function goBack() {
		history.go(-1);
	}
</script>

<nav>
	<header>
		{#if $page.url.pathname !== '/'}
			<span on:click={goBack}>
				<IconBack class="back-arrow" />
			</span>
		{/if}
		<h1 class="brand">JustLearn</h1>
	</header>
	<footer>
		<a href="/admin">
			<IconCog /> Admin
		</a>
	</footer>
</nav>

<style lang="scss">
	:global(.back-arrow) {
		cursor: pointer;
		&:hover {
			color: red;
		}
	}
	a {
		color: var(--background);
		display: flex;
		gap: 0.3rem;
	}
	nav {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		background: var(--foreground);
		color: var(--background);
		header {
			display: flex;
			gap: 1rem;
			align-items: center;
		}
		h1 {
			font-size: x-large;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
			margin: 0;
			padding: 0;
		}
	}
</style>
