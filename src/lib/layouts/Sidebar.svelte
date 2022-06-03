<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';

	import IconCog from '~icons/mdi/cog';
	import IconResult from '~icons/mdi/file-document';
	import IconHome from '~icons/mdi/home';

	function goBack() {
		goto('/');
	}
</script>

{#if !$page.url.pathname.startsWith('/paper')}
	<nav aria-label="sidebar">
		<a title="Home" href="/" class:active={$page.url.pathname === '/'}>
			<IconHome style="font-size: 1.2em" />
		</a>
		<a title="Results" href="/results" class:active={$page.url.pathname.startsWith('/results')}>
			<IconResult style="font-size: 1.2em" />
		</a>
		<a title="Admin" href="/admin" class:active={$page.url.pathname.startsWith('/admin')}>
			<IconCog style="font-size: 1.2em" />
		</a>
		<span class="spacer" />
		<!-- <a title="github" href="https://github.com/vanillacode314/justlearn" rel="external"> -->
		<!-- 	<IconGithub style="font-size: 1.2em" /> <span> Github </span> -->
		<!-- </a> -->
	</nav>
{/if}

<style lang="scss">
	a {
		padding: 1rem 1.5rem;
		text-decoration: none;
		&:hover,
		&.active {
			font-weight: bold;
			background: #222;
		}
		color: var(--background);
		display: flex;
		align-items: center;
		gap: 1rem;
		transition: all 0.3s ease-out;
	}
	nav {
		overflow: hidden;
		/* border-radius: 0 1rem 1rem 0; */
		grid-area: sidebar;
		display: flex;
		flex-direction: column;
		background: var(--foreground);
		color: var(--background);
		.spacer {
			flex-grow: 1;
		}
		@media (max-width: 768px) {
			flex-direction: row;
		}
	}
</style>
