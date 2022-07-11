<script lang="ts">
	import { page } from '$app/stores';
	import Tile from '$lib/components/Tile.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';

	import IconCog from '~icons/mdi/cog';
	import IconResult from '~icons/mdi/file-document';
	import IconHome from '~icons/mdi/home';
</script>

{#if !$page.url.pathname.startsWith('/paper')}
	<Toolbar aria-label="sidebar">
		<Tile
			kind="anchor"
			sharp
			center
			compact
			title="Home"
			href="/"
			active={$page.url.pathname === '/'}
		>
			<IconHome style="font-size: 1.2em" />
		</Tile>
		<Tile
			kind="anchor"
			sharp
			center
			compact
			title="Results"
			href="/results"
			active={$page.url.pathname.startsWith('/results')}
		>
			<IconResult style="font-size: 1.2em" />
		</Tile>
		<Tile
			kind="anchor"
			sharp
			center
			compact
			title="Admin"
			href="/admin"
			active={$page.url.pathname.startsWith('/admin')}
		>
			<IconCog style="font-size: 1.2em" />
		</Tile>
		<span class="spacer" />
	</Toolbar>
{/if}

<style lang="scss">
</style>
