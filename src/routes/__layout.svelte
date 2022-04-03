<script lang="ts">
	/// COMPONENTS
	import Navbar from '$lib/layouts/Navbar.svelte';
	import AddQuestionModal from '$lib/modals/AddQuestionModal.svelte';
	import DeletePaperModal from '$lib/modals/DeletePaperModal.svelte';
	import DeleteQuestionModal from '$lib/modals/DeleteQuestionModal.svelte';
	import EditQuestionModal from '$lib/modals/EditQuestionModal.svelte';
	import StartPaperModal from '$lib/modals/StartPaperModal.svelte';

	/// STYLES
	import 'normalize.css';
	import '../app.scss';
</script>

<div class="wrapper">
	<Navbar />
	<slot />
</div>

<AddQuestionModal />
<EditQuestionModal />
<DeletePaperModal />
<DeleteQuestionModal />
<StartPaperModal />

<style lang="scss">
	.wrapper {
		overflow: hidden;
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
	}
</style>
