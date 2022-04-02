<script lang="ts">
	/// COMPONENTS
	import Navbar from '$lib/layouts/Navbar.svelte';
	import AddQuestionModal from '$lib/modals/AddQuestionModal.svelte';
	import DeletePaperModal from '$lib/modals/DeletePaperModal.svelte';
	import DeleteQuestionModal from '$lib/modals/DeleteQuestionModal.svelte';
	import EditQuestionModal from '$lib/modals/EditQuestionModal.svelte';

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

<style lang="scss">
	.wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
