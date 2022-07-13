<script lang="ts">
	/// STATE ///
	import { results } from '$lib/stores/user';
	import { allPapers } from '$lib/stores/app';

	/// COMPONENTS ///
	import Tile from '$lib/components/Tile.svelte';

	/// METHODS ///
	function formatDate(result: TestResult) {
		return new Date(result.date_given).toLocaleString(undefined, {
			dateStyle: 'long',
			timeStyle: 'short'
		});
	}
</script>

<div class="container">
	<main>
		<ul class="paper-grid">
			{#each $results as result}
				{@const paper = $allPapers.find((p) => p.id === result.paper)}
				<li>
					<Tile center kind="anchor" href="/result/{result.id}">
						<div class="result-tile">
							<span class="name">
								{paper.name}
							</span>
							<span class="date"> ({formatDate(result)}) </span>
						</div>
					</Tile>
				</li>
			{/each}
		</ul>
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
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
		li {
			.result-tile {
				display: grid;
				gap: 1rem;
				.name {
					font-weight: bold;
					font-size: xx-large;
				}
			}
		}
	}
</style>
