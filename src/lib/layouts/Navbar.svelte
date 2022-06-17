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
	<!-- {#if $page.url.pathname !== '/'} -->
	<!-- 	<span on:click={goBack}> -->
	<!-- 		<IconBack class="back-arrow" /> -->
	<!-- 	</span> -->
	<!-- {/if} -->
	<h1 class="brand">JustLearn</h1>
	<span class="spacer" />
	<a title="github" href="https://github.com/vanillacode314/justlearn" rel="external">
		<IconGithub style="font-size: 1.2em" />
	</a>
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
		grid-area: nav;
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 1rem;
		background: var(--foreground);
		color: var(--background);
		h1 {
			font-size: x-large;
			text-transform: uppercase;
			letter-spacing: 0.1rem;
			margin: 0;
			padding: 0;
		}
		.spacer {
			flex-grow: 1;
		}
	}
</style>
