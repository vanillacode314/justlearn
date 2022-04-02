<script lang="ts">
	/// COMPONENTS
	import IconAdd from '~icons/mdi/add';
	import IconImport from '~icons/mdi/import';

	/// STATE
	import { papers } from '$lib/stores/user';
	import { genRandomNumber } from '$lib/utils';
	import Button from '$lib/components/Button.svelte';

	/// METHODS
	function addPaper() {
		const name = prompt('Enter a name for the paper.');
		if (!name) return;
		const paper: Paper = {
			id: genRandomNumber(12),
			name,
			questions: []
		};
		$papers.push(paper);
		$papers = $papers;
	}
	function _import() {
		async function handleFiles() {
			input.removeEventListener('change', handleFiles);
			const file = this.files[0];
			const data = await file.text();
			$papers.push(JSON.parse(data));
			$papers = $papers;
		}
		const input = document.createElement('input');
		input.setAttribute('type', 'file');
		input.addEventListener('change', handleFiles);
		input.click();
	}
</script>

<div class="container">
	<div class="toolbar">
		<Button inverted on:click={addPaper}><IconAdd /> Add</Button>
		<Button inverted on:click={_import}><IconImport /> Import</Button>
	</div>
	<main>
		<ul class="paper-grid">
			{#each $papers as paper}
				<li>
					<a href="/admin/paper/{paper.id}">
						{paper.name}
					</a>
				</li>
			{/each}
		</ul>
		<!-- 	<List items={$papers.map((p) => ({ ...p, href: `/paper/${p.id}` }))} let:item> -->
		<!-- 		{item.name} -->
		<!-- 	</List> -->
		<!-- </main> -->
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
	.toolbar {
		grid-area: toolbar;
		background-color: var(--foreground);
		height: 100%;
		display: flex;
		flex-direction: column;
		button {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.5rem 1rem;
			border: none;
			background: var(--foreground);
			color: var(--background);
			cursor: pointer;
			transition: all 0.3s ease-in-out;
			&:hover {
				background-color: var(--background);
				color: var(--foreground);
			}
		}
	}
	main {
		padding: 1rem;
	}
	ul.paper-grid {
		list-style-type: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
		gap: 1rem;
		li {
			a {
				display: block;
				border: 2px solid var(--foreground);
				padding: 1rem;
				transition: all 0.3s ease-in-out;
				text-decoration: none;
				color: var(--foreground);
				font-size: x-large;
				&:hover {
					font-weight: bold;
					background-color: var(--foreground);
					color: var(--background);
				}
			}
		}
	}
</style>
