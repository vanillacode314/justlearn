<script lang="ts">
	/// COMPONENTS
	import Navbar from '$lib/layouts/Navbar.svelte';
	import Sidebar from '$lib/layouts/Sidebar.svelte';
	import AddQuestionModal from '$lib/modals/AddQuestionModal.svelte';
	import DeletePaperModal from '$lib/modals/DeletePaperModal.svelte';
	import DeleteQuestionModal from '$lib/modals/DeleteQuestionModal.svelte';
	import EditQuestionModal from '$lib/modals/EditQuestionModal.svelte';
	import ResultQuestionModal from '$lib/modals/ResultQuestionModal.svelte';
	import StartPaperModal from '$lib/modals/StartPaperModal.svelte';

	/// STYLES
	import 'normalize.css';
	import '../app.scss';
</script>

<div class="wrapper">
	<Navbar />
	<Sidebar />
	<main>
		<slot />
	</main>
</div>

<AddQuestionModal />
<EditQuestionModal />
<DeletePaperModal />
<DeleteQuestionModal />
<StartPaperModal />
<ResultQuestionModal />

<style lang="scss">
	.wrapper {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'nav nav' 'sidebar main' 'sidebar main';
		@media (max-width: 768px) {
			grid-template-rows: auto 1fr;
			grid-template-columns: auto 1fr;
			grid-template-areas: 'nav nav' 'main main' 'sidebar sidebar';
		}
	}
	main {
		grid-area: main;
		height: 100%;
		overflow-y: auto;
	}
</style>
