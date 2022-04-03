<script lang="ts">
	/// COMPONENTS
	import IconAdd from '~icons/mdi/add';

	/// STATE
	import { papers } from '$lib/stores/user';
	import { genRandomNumber } from '$lib/utils';
	import Button from '$lib/components/Button.svelte';
	import { activePaper, startPaperModalOpen } from '$lib/stores/app';

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

	function startPaper(paper: Paper) {
		$activePaper = paper;
		$startPaperModalOpen = true;
	}
</script>

<div class="container">
	<!-- <div class="toolbar"> -->
	<!-- 	<button title="Add Paper" on:click={addPaper}><IconAdd /> Add</button> -->
	<!-- </div> -->
	<main>
		<ul class="paper-grid">
			{#each $papers as paper}
				<li>
					<Button type="button" large outlined on:click={() => startPaper(paper)}>
						{paper.name}
					</Button>
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
		height: 100%;
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
			display: contents;
		}
	}
</style>
