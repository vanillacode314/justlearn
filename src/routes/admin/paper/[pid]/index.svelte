<script lang="ts">
	/// COMPONENTS ///
	import IconAdd from '~icons/mdi/add';
	import IconTrash from '~icons/mdi/trash';
	import IconExport from '~icons/mdi/export';
	import IconPencil from '~icons/mdi/pencil';
	import List from '$lib/components/List.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import Tile from '$lib/components/Tile.svelte';

	/// STATE ///
	import { page } from '$app/stores';
	import { papers } from '$lib/stores/user';
	import { activePaper, addQuestionModal, deletePaperModal } from '$lib/stores/app';
	import { exportToJsonFile } from '$lib/utils';
	$: id = $page.params.pid;
	$: paper = $papers.find((p) => p.id === Number(id));
	$: $activePaper = paper;

	/// METHODS ///
	function renamePaper() {
		const name = prompt('Enter a new name');
		paper.name = name;
		$papers = $papers;
	}

	function _export() {
		exportToJsonFile(paper, paper.name);
	}
</script>

<div class="container">
	<Toolbar style="grid-area: toolbar">
		<Tile
			title="add paper"
			compact
			sharp
			center
			kind="button"
			inverted
			on:click={addQuestionModal.open}><IconAdd /></Tile
		>
		<Tile title="edit paper" compact sharp center kind="button" inverted on:click={renamePaper}
			><IconPencil /></Tile
		>
		<Tile
			title="delete paper"
			compact
			sharp
			center
			kind="button"
			inverted
			on:click={deletePaperModal.open}><IconTrash /></Tile
		>
		<Tile title="export paper" compact sharp center kind="button" inverted on:click={_export}
			><IconExport /></Tile
		>
	</Toolbar>
	<main>
		{#if paper}
			<h1>{paper.name}</h1>
			{#if paper.questions.length}
				<List
					items={paper.questions.map((q) => ({
						...q,
						href: `/admin/paper/${id}/question/${q.id}`
					}))}
					let:item
					let:index
				>
					Q{index + 1}) {item.text}
				</List>
			{:else}
				<p>No questions found</p>
			{/if}
		{:else}
			<p>No paper with id {id} found :(</p>
		{/if}
	</main>
</div>

<style lang="scss">
	.container {
		height: 100%;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr;
		grid-template-areas: 'main toolbar';
		overflow-y: auto;
		@media (max-width: 768px) {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			grid-template-areas: 'toolbar' 'main';
		}
	}
	main {
		overflow-y: auto;
		grid-area: main;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		h1 {
			margin: 0;
		}
	}
</style>
