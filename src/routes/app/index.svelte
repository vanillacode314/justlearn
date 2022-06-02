<script lang="ts">
	/// STATE
	import { papers } from '$lib/stores/user';
	import Button from '$lib/components/Button.svelte';
	import { activePaper, sharedPapers, startPaperModal } from '$lib/stores/app';

	function startPaper(paper: Paper) {
		$activePaper = paper;
		startPaperModal.open();
	}
</script>

<main>
	<section>
		<h3>Local Papers</h3>
		<ul class="paper-grid">
			{#each $papers as paper}
				<li>
					<Button type="button" large outlined on:click={() => startPaper(paper)}>
						{paper.name}
					</Button>
				</li>
			{/each}
			{#if $papers.length < 1}
				<p>No local papers found. You can create one from the admin panel</p>
			{/if}
		</ul>
	</section>
	<section>
		<h3>Shared Papers</h3>
		<ul class="paper-grid">
			{#each $sharedPapers as paper}
				<li>
					<Button type="button" large outlined on:click={() => startPaper(paper)}>
						{paper.name}
					</Button>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style lang="scss">
	main {
		grid-area: main;
		height: 100%;
		display: flex;
		flex-direction: column;
		ul.paper-grid {
			padding: 1rem;
			list-style-type: none;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
			gap: 1rem;
			li {
				display: contents;
			}
		}
		section {
			h3 {
				--bg-color: black;
				--fg-color: white;
				padding: 0.5rem;
				font-size: small;
				background-color: var(--bg-color);
				color: var(--fg-color);
			}
		}
	}
</style>
