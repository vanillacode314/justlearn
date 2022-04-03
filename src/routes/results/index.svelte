<script lang="ts">
	/// COMPONENTS
	import IconAdd from '~icons/mdi/add';

	/// STATE
	import { papers, results } from '$lib/stores/user';
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';

	function gotoResult(result: TestResult) {
		goto('/result/' + result.id);
	}
</script>

<div class="container">
	<main>
		<ul class="paper-grid">
			{#each $results as result}
				<li>
					<Button type="button" outlined on:click={() => gotoResult(result)}>
						{@const paper = $papers.find((p) => p['id'] === result['paper'])}
						{paper.name} <strong>({new Date(result.date_given).toLocaleString()})</strong>
					</Button>
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
			display: contents;
		}
	}
</style>
