<script lang="ts">
	/// COMPONENTS
	import Question from '$lib/layouts/Question.svelte';
	import Button from '$lib/components/Button.svelte';
	import IconPencil from '~icons/mdi/pencil';
	import IconTrash from '~icons/mdi/trash';

	/// STATE
	import { page } from '$app/stores';
	import { papers } from '$lib/stores/user';
	import {
		activePaper,
		activeQuestion,
		deleteQuestionModalOpen,
		editQuestionModalOpen
	} from '$lib/stores/app';
	$: pid = $page.params.pid;
	$: paper = $papers.find((p) => p.id === Number(pid));
	$: $activePaper = paper;
	$: id = $page.params.qid;
	$: question = paper?.questions.find((q) => q.id === Number(id));
	$: $activeQuestion = question;

	/// METHODS
	function editQuestion() {
		$editQuestionModalOpen = true;
	}

	function deleteQuestion() {
		$deleteQuestionModalOpen = true;
	}
</script>

<div class="container">
	<div class="toolbar">
		<Button inverted on:click={editQuestion}><IconPencil /> Edit</Button>
		<Button inverted on:click={deleteQuestion}><IconTrash /> Delete</Button>
	</div>
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
		grid-template-columns: minmax(200px, auto) 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'toolbar main';
		height: 100%;
	}
	main {
		grid-area: main;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.toolbar {
		display: flex;
		flex-direction: column;
		grid-area: toolbar;
		background-color: var(--foreground);
		height: 100%;
	}
</style>
