<script lang="ts">
	/// COMPONENTS
	import Question from '$lib/layouts/Question.svelte';
	import Tile from '$lib/components/Tile.svelte';
	import Toolbar from '$lib/components/Toolbar.svelte';
	import IconPencil from '~icons/mdi/pencil';
	import IconTrash from '~icons/mdi/trash';

	/// STATE
	import { page } from '$app/stores';
	import { papers } from '$lib/stores/user';
	import {
		activePaper,
		activeQuestion,
		deleteQuestionModal,
		editQuestionModal
	} from '$lib/stores/app';
	$: pid = $page.params.pid;
	$: paper = $papers.find((p) => p.id === Number(pid));
	$: $activePaper = paper;
	$: id = $page.params.qid;
	$: question = paper?.questions.find((q) => q.id === Number(id));
	$: $activeQuestion = question;
</script>

<div class="container">
	<Toolbar style="grid-area: toolbar">
		<Tile title="edit" compact sharp center kind="button" on:click={editQuestionModal.open}
			><IconPencil />
		</Tile>
		<Tile title="delete" compact sharp kind="button" center on:click={deleteQuestionModal.open}
			><IconTrash />
		</Tile>
	</Toolbar>
	<main>
		{#if paper}
			<Question {question} answer={question.answer} />
		{:else}
			<p>No question with id {id} found in paper with id {pid} and name {paper?.name}:(</p>
		{/if}
	</main>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: 1fr;
		grid-template-areas: 'main toolbar';
		height: 100%;
		@media (max-width: 768px) {
			grid-template-rows: auto 1fr;
			grid-template-columns: 1fr;
			grid-template-areas: 'toolbar' 'main';
		}
	}
	main {
		grid-area: main;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
