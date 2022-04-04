<script lang="ts">
	/// COMPONENTS
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

	/// UTILS
	import { genRandomNumber } from '$lib/utils';
	import { tick } from 'svelte';
	import { goto } from '$app/navigation';

	/// STATE
	import { activePaper, startPaperModalOpen } from '$lib/stores/app';
	import { results } from '$lib/stores/user';
	let qInput: HTMLInputElement;
	let time: number = 180;
	let cmarks: number = 4;
	let imarks: number = -1;

	/// METHODS
	function onOpen() {
		tick().then(() => qInput.focus());
		time = 180;
		cmarks = 4;
		imarks = -1;
	}

	function close() {
		$startPaperModalOpen = false;
	}

	async function startPaper() {
		const result: TestResult = {
			id: genRandomNumber(12),
			cmarks,
			imarks,
			paper: $activePaper.id,
			done: false,
			seconds_taken: -1,
			answers: new Array($activePaper.questions.length).map(() => null),
			date_given: Date.now(),
			total_time_available: time,
			timings: [],
			notes: ''
		};
		$results.push(result);
		$results = $results;
		goto('/paper/' + result.id);
		close();
	}
</script>

<Modal bind:open={$startPaperModalOpen} on:open={onOpen}>
	<form on:submit|preventDefault={startPaper}>
		<header>
			<h3>Configure Paper</h3>
		</header>
		<div class="form">
			<label
				><span>
					Time Limit <em> (in minutes) </em>:
				</span>
				<input type="number" bind:this={qInput} bind:value={time} required />
			</label>
			<label
				>Marks for correct answers:
				<input type="number" bind:this={qInput} bind:value={cmarks} min="1" required />
			</label>
			<label
				>Marks for incorrect answers:
				<input type="number" bind:this={qInput} bind:value={imarks} max="0" required />
			</label>
		</div>
		<div class="actions">
			<Button type="submit" inverted>Start</Button>
			<Button type="button" on:click={close}>Cancel</Button>
		</div>
	</form>
</Modal>

<style lang="scss">
	form {
		min-width: 400px;
		max-width: 95%;
		background-color: var(--background);
		header {
			background-color: var(--foreground);
			color: var(--background);
			padding: 0.5rem 1rem;
			font-size: large;
		}
		div.form {
			padding: 1rem;
			display: grid;
			gap: 1rem;
			& > label {
				display: flex;
				gap: 0.5rem;
				flex-direction: column;
			}
		}
		div.actions {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 100%;
		}
		input[type='number'] {
			padding: 0.3rem;
		}
	}
</style>
