<script lang="ts">
	/// COMPONENTS
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

	/// UTILS
	import { activePaper, activeQuestion, deleteQuestionModal } from '$lib/stores/app';
	import { papers } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	/// STATE

	/// METHODS
	async function _delete() {
		await goto(`/admin/paper/${$activePaper.id}`);
		$activePaper.questions = $activePaper.questions.filter((q) => q.id !== $activeQuestion.id);
		const p = $papers.findIndex((x) => x.id === $activePaper.id);
		$papers[p] = $activePaper;
		$papers = $papers;
		deleteQuestionModal.close();
	}
</script>

<Modal bind:open={$deleteQuestionModal}>
	<form on:submit|preventDefault>
		<header>
			<h3>Delete Question</h3>
		</header>
		<p>
			Are you sure you would like to delete question <strong>{$activeQuestion.text}</strong> from
			paper <strong>{$activePaper.name}</strong>?
		</p>
		<div class="actions">
			<Button on:click={_delete} inverted>DELETE</Button>
			<Button on:click={deleteQuestionModal.close}>Cancel</Button>
		</div>
	</form>
</Modal>

<style lang="scss">
	form {
		max-width: 95%;
		background-color: var(--background);
		header {
			background-color: var(--foreground);
			color: var(--background);
			padding: 0.5rem 1rem;
			font-size: large;
		}
		p {
			padding: 1rem;
		}
		div.actions {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 100%;
		}
	}
</style>
