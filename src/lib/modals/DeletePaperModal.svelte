<script lang="ts">
	/// COMPONENTS
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

	/// UTILS
	import { activePaper, deletePaperModalOpen } from '$lib/stores/app';
	import { papers } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	/// STATE

	/// METHODS
	function close() {
		$deletePaperModalOpen = false;
	}
	async function _delete() {
		await goto('/');
		$papers = $papers.filter((p) => p.id !== $activePaper.id);
		close();
	}
</script>

<Modal bind:open={$deletePaperModalOpen}>
	<form on:submit|preventDefault>
		<header>
			<h3>Delete Paper</h3>
		</header>
		<p>
			Are you sure you would like to delete paper <strong>{$activePaper.name}</strong>?
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
