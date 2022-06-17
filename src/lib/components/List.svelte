<script lang="ts">
	export let items: any[];
	let el: HTMLUListElement;
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		MathLive.renderMathInElement(el);
	});
</script>

<ul bind:this={el}>
	{#each items as item, index}
		<li><a href={item?.href}><slot {item} {index} /></a></li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style-type: none;
		li {
			&:last-child {
				a {
					border-bottom: none;
				}
			}
			a {
				display: block;
				padding: 0.5rem 1rem;
				transition: all 0.3s ease-in-out;
				background-color: var(--background);
				color: var(--foreground);
				border-left: 2px solid var(--foreground);
				border-bottom: 2px solid var(--foreground);
				text-decoration: none;
				&:hover {
					border-left: 2px solid var(--background);
					background: var(--foreground);
					color: var(--background);
				}
			}
		}
	}
</style>
