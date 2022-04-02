<script lang="ts">
	/// COMPONENTS
	import Button from '$lib/components/Button.svelte';
	import IconAdd from '~icons/mdi/add';
	import IconTrash from '~icons/mdi/trash';
	import IconExport from '~icons/mdi/export';

	/// STATE
	import { page } from '$app/stores';
	import { papers } from '$lib/stores/user';
	import List from '$lib/components/List.svelte';
	import { activePaper, addQuestionModalOpen, deletePaperModalOpen } from '$lib/stores/app';
	import { exportToJsonFile } from '$lib/utils';
	$: id = $page.params.pid;
	$: paper = $papers.find((p) => p.id === Number(id));
	$: $activePaper = paper;

	/// METHODS
	function addQuestion() {
		$addQuestionModalOpen = true;
	}

	function deletePaper() {
		$deletePaperModalOpen = true;
	}

	function _export() {
		exportToJsonFile(paper, paper.name);
	}
</script>

<div class="container">
	<div class="toolbar">
		<Button inverted on:click={addQuestion}><IconAdd /> Add</Button>
		<Button inverted on:click={deletePaper}><IconTrash /> Delete</Button>
		<Button inverted on:click={_export}><IconExport /> Export</Button>
	</div>
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
		display: grid;
		grid-template-columns: minmax(200px, auto) 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'toolbar main';
		@media (max-width: 768px) {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			grid-template-areas: 'toolbar' 'main';
		}
		height: 100%;
	}
	.toolbar {
		grid-area: toolbar;
		background-color: var(--foreground);
		height: 100%;
		display: flex;
		flex-direction: column;
		@media (max-width: 768px) {
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
	main {
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
