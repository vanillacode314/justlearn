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
		{#if $papers.length < 1}
			<p>No local papers found. You can create one from the admin panel</p>
		{:else}
			<ul class="paper-grid">
				{#each $papers as paper}
					<li>
						<button type="button" on:click={() => startPaper(paper)}>
							<span class="name">
								{paper.name}
							</span>
						</button>
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
					<button type="button" on:click={() => startPaper(paper)}>
						<span class="name">
							{paper.name}
						</span>
					</button>
				</li>
			{/each}
		</ul>
	</section>
</main>

<style lang="scss">
	main {
		padding: 1rem 0;
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
			grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
			gap: 1rem;
			li {
				button {
					background-color: black;
					color: white;
					padding: 2rem;
					border-radius: 1rem;
					cursor: pointer;
					border: none;
					outline: none;
					transition: all 0.2s ease-in-out;
					&:hover {
						background-color: #222;
					}
					display: grid;
					gap: 1rem;
					.name {
						font-weight: bold;
						font-size: xx-large;
					}
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
