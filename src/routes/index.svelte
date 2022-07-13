<script lang="ts">
	import { onMount, tick } from 'svelte';

	/// STATE ///
	import { papers, results } from '$lib/stores/user';
	import { activePaper, sharedPapers, startPaperModal } from '$lib/stores/app';

	/// COMPONENTS ///
	import Tile from '$lib/components/Tile.svelte';

	/// LIFECYCLE HOOKS ///
	onMount(async () => {
		// Filter Incomplete Papers
		await tick();
		$results = $results.filter((r) => r.done);
	});

	/// METHODS ///
	function startPaper(paper: Paper) {
		$activePaper = paper;
		startPaperModal.open();
	}
</script>

<main>
	<section>
		<h3>Local Papers</h3>
		{#if $papers.length < 1}
			<p>No local papers found. You can create one from the admin panel</p>
		{:else}
			<ul class="paper-grid">
				{#each $papers as paper}
					<li>
						<Tile center kind="button" on:click={() => startPaper(paper)}>
							<span class="name">
								{paper.name}
							</span>
						</Tile>
					</li>
				{/each}
			</ul>
		{/if}
	</section>
	<section>
		<h3>Shared Papers</h3>
		<ul class="paper-grid">
			{#each $sharedPapers as paper}
				<li>
					<Tile kind="button" center on:click={() => startPaper(paper)}>
						<span class="name">
							{paper.name}
						</span>
					</Tile>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style lang="scss">
	main {
		padding: 0.5rem;
		grid-area: main;
		height: 100%;
		display: flex;
		flex-direction: column;
		p {
			padding: 1rem 0.5rem;
		}
		ul.paper-grid {
			padding: 1rem 0.5rem;
			list-style-type: none;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			gap: 1rem;
			li {
				.name {
					font-weight: bold;
					font-size: xx-large;
				}
			}
		}
		section {
			h3 {
				padding: 0.5rem;
				font-size: xx-large;
				background-color: var(--bg-color);
				color: var(--fg-color);
			}
		}
	}
</style>
