<script lang="ts">
	/// COMPONENTS
	import IconAdd from '~icons/mdi/add';

	/// STATE
	import { results } from '$lib/stores/user';
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';
	import { allPapers } from '$lib/stores/app';

	function gotoResult(result: TestResult) {
		goto('/result/' + result.id);
	}
</script>

<div class="container">
	<main>
		<ul class="paper-grid">
			{#each $results as result}
				{@const paper = $allPapers.find((p) => p['id'] === result['paper'])}
				<li>
					<button type="button" on:click={() => gotoResult(result)}>
						<span class="name">
							{paper.name}
						</span>
						<span class="date">
							({new Date(result.date_given).toLocaleString(undefined, {
								dateStyle: 'long',
								timeStyle: 'short'
							})})
						</span>
					</button>
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
</style>
