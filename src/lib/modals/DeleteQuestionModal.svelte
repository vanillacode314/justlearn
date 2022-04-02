<script lang="ts">
	/// COMPONENTS
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

	/// UTILS
	import { activePaper, activeQuestion, deleteQuestionModalOpen } from '$lib/stores/app';
	import { papers } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	/// STATE

	/// METHODS
	function close() {
		$deleteQuestionModalOpen = false;
	}
	async function _delete() {
		await goto(`/admin/paper/${$activePaper.id}`);
		$activePaper.questions = $activePaper.questions.filter((q) => q.id !== $activeQuestion.id);
		const p = $papers.findIndex((x) => x.id === $activePaper.id);
		$papers[p] = $activePaper;
		$papers = $papers;
		close();
	}
</script>

<Modal bind:open={$deleteQuestionModalOpen}>
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
			<Button on:click={close}>Cancel</Button>
		</div>
	</form>
</Modal>

<style lang="scss">
	form {
		min-width: 400px;
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
