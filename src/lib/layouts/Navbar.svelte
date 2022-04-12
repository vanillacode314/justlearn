<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';

	import IconBack from '~icons/mdi/arrow-back';
	import IconCog from '~icons/mdi/cog';
	import IconGithub from '~icons/mdi/github';
	import IconResult from '~icons/mdi/file-document';

	function goBack() {
		goto('/');
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
		<a title="admin" href="/admin">
			<IconCog />
		</a>
		<a title="results" href="/results"> <IconResult /> </a>
		<a title="github" href="https://github.com/vanillacode314/justlearn" rel="external">
			<IconGithub />
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
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
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
		footer {
			display: flex;
			gap: 1rem;
		}
	}
</style>
