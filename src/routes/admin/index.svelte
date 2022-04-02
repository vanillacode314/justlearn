<script lang="ts">
	/// COMPONENTS
	import IconAdd from '~icons/mdi/add';

	/// STATE
	import { papers } from '$lib/stores/user';
	import { genRandomNumber } from '$lib/utils';

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
</script>

<div class="container">
	<div class="toolbar">
		<button title="Add Paper" on:click={addPaper}><IconAdd /> Add</button>
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
