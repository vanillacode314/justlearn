<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';

	import IconCog from '~icons/mdi/cog';
	import IconResult from '~icons/mdi/file-document';

	function goBack() {
		goto('/');
	}
</script>

{#if !$page.url.pathname.startsWith('/paper')}
	<nav aria-label="sidebar">
		<a title="results" href="/results" class:active={$page.url.pathname.startsWith('/results')}>
			<IconResult style="font-size: 1.2em" />
			<span> Results </span></a
		>
		<a title="admin" href="/admin" class:active={$page.url.pathname.startsWith('/admin')}>
			<IconCog style="font-size: 1.2em" />
			<span> Admin </span>
		</a>
		<span class="spacer" />
		<!-- <a title="github" href="https://github.com/vanillacode314/justlearn" rel="external"> -->
		<!-- 	<IconGithub style="font-size: 1.2em" /> <span> Github </span> -->
		<!-- </a> -->
	</nav>
{/if}

<style lang="scss">
	a {
		padding: 0.5rem 1rem;
		text-decoration: none;
		&:hover,
		&.active {
			font-weight: bold;
			color: var(--foreground);
			background: var(--background);
		}
		color: var(--background);
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	nav {
		min-width: 200px;
		grid-area: sidebar;
		display: flex;
		flex-direction: column;
		background: var(--foreground);
		color: var(--background);
		border-right: 0.1rem var(--background) solid;
		.spacer {
			flex-grow: 1;
		}
		@media (max-width: 768px) {
			flex-direction: row;
		}
	}
</style>
