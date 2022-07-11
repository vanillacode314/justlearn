<script lang="ts">
	/// COMPONENTS
	import IconAdd from '~icons/mdi/add';
	import IconImport from '~icons/mdi/import';

	/// STATE
	import { papers } from '$lib/stores/user';
	import { genRandomNumber } from '$lib/utils';
	import Tile from '$lib/components/Tile.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';

	/// METHODS
	function addPaper() {
		const name = prompt('Enter a name for the paper.');
		if (!name) return;
		const paper: Paper = {
			id: genRandomNumber(12),
			name,
			questions: []
		};
		$papers.push(paper);
		$papers = $papers;
	}
	function importPaper() {
		async function handleFiles() {
			input.removeEventListener('change', handleFiles);
			const file = this.files[0];
			const data = await file.text();
			const paper = JSON.parse(data);
			$papers.push(paper);
			$papers = $papers;
		}
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.addEventListener('change', handleFiles);
		input.click();
	}
</script>

<div class="container">
	<Toolbar aria-label="admin-toolbar" style="grid-area: toolbar;">
		<Tile sharp center compact kind="button" title="Add Paper" on:click={addPaper}><IconAdd /></Tile
		>
		<Tile sharp center compact kind="button" title="Import Paper" on:click={importPaper}
			><IconImport /></Tile
		>
	</Toolbar>
	<main>
		<ul class="paper-grid">
			{#each $papers as paper}
				<li>
					<Tile center kind="anchor" href="/admin/paper/{paper.id}">
						<span class="paper">
							{paper.name}
						</span>
					</Tile>
				</li>
			{/each}
		</ul>
	</main>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr;
		grid-template-areas: 'main toolbar';
		@media (max-width: 768px) {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			grid-template-areas: 'toolbar' 'main';
		}
		height: 100%;
	}
	main {
		padding: 1rem;
	}
	ul.paper-grid {
		list-style-type: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
		li {
			.paper {
				font-size: xx-large;
				font-weight: bold;
			}
		}
	}
</style>
