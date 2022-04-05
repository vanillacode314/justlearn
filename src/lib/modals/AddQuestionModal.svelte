<script lang="ts">
	/// COMPONENTS
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';
	import IconTrash from '~icons/mdi/trash';

	/// UTILS
	import { genRandomNumber } from '$lib/utils';
	import { activePaper, addQuestionModalOpen } from '$lib/stores/app';
	import { papers, subjects } from '$lib/stores/user';
	import { tick } from 'svelte';

	/// STATE
	let qInput: HTMLInputElement;
	let text: string = '';
	let subject: string = '';
	let chapter: string = '';
	let options: Option[] = [];
	let selected = -1;
	let adding: boolean = false;

	/// METHODS
	function onOpen() {
		tick().then(() => qInput.focus());
		text = '';
		subject = '';
		chapter = '';
		options = [];
		selected = -1;
	}

	async function addOption() {
		if (adding) return;
		const option = prompt('Enter option (type image to upload image)');
		if (!option) return;
		adding = true;
		switch (option) {
			case 'image':
				let image: File;
				async function handleFiles() {
					input.removeEventListener('change', handleFiles);
					image = this.files[0];
					if (image) {
						const url = `/api/uploadimage`;
						const formData = new FormData();
						formData.append('image', image);
						const res = await fetch(url, {
							method: 'POST',
							body: formData
						});
						if (res.ok) {
							options.push({ id: genRandomNumber(12), image: await res.text() });
							options = options;
						} else {
							alert('Image upload failed, Please try again');
						}
					}
				}
				const input = document.createElement('input');
				input.setAttribute('type', 'file');
				input.addEventListener('change', handleFiles);
				input.click();
				break;
			default:
				options.push({ id: genRandomNumber(12), text: option });
				options = options;
				break;
		}
		adding = false;
		await tick();
		MathLive.renderMathInDocument();
	}

	function close() {
		$addQuestionModalOpen = false;
	}

	async function addQuestion() {
		if (options.length < 2) {
			alert('Please add atleast two options to choose from.');
			return;
		}
		const question: Question = {
			id: genRandomNumber(12),
			answer: selected,
			options: options,
			subject,
			chapter,
			text
		};
		const imageInput = document.getElementById('image-input') as HTMLInputElement;
		const image = imageInput.files[0];
		if (image) {
			const url = `/api/uploadimage`;
			const formData = new FormData();
			formData.append('image', image);
			const res = await fetch(url, {
				method: 'POST',
				body: formData
			});
			if (res.ok) {
				question.image = await res.text();
			} else {
				alert('Image upload failed, Please try again');
				return;
			}
		}
		$activePaper.questions.push(question);
		$papers = $papers;
		close();
	}
</script>

<Modal bind:open={$addQuestionModalOpen} on:open={onOpen}>
	<form on:submit|preventDefault={addQuestion}>
		<header>
			<h3>Add Question</h3>
		</header>
		<div class="form">
			<label
				>Question:
				<input
					type="text"
					bind:this={qInput}
					bind:value={text}
					placeholder="Write the question here"
					required
				/>
			</label>
			<label
				>Subject:
				<select bind:value={subject} required>
					{#each $subjects as subject}
						<option value={subject.name}>
							{subject.name}
						</option>
					{/each}
				</select>
				<!-- <input type="text" bind:value={subject} placeholder="Subject..." /> -->
			</label>
			{#if subject}
				<label
					>Chapter:
					<select bind:value={chapter} required>
						{#each $subjects.find((s) => s.name === subject).chapters as chapter}
							<option value={chapter}>
								{chapter}
							</option>
						{/each}
					</select>
					<!-- <input type="text" bind:value={subject} placeholder="Subject..." /> -->
				</label>
			{/if}
			<label
				>Image:
				<input id="image-input" type="file" placeholder="Write the question here" />
			</label>
			<p>Options <em>(Choose the correct one):</em></p>
			<ul class="options">
				{#each options as option}
					<li>
						<label>
							<input bind:group={selected} name="option" type="radio" value={option.id} required />
							{#if option?.text}
								{option.text}
							{/if}
							{#if option?.image}
								<img src={option.image} alt="option {option.id}" />
							{/if}
						</label>
						<Button
							type="button"
							on:click={() => (options = options.filter((o) => o.id !== option.id))}
						>
							<IconTrash />
						</Button>
					</li>
				{/each}
				<Button inverted type="button" on:click={addOption}>Add Option</Button>
			</ul>
		</div>
		<div class="actions">
			<Button type="submit" inverted>OK</Button>
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
			ul.options {
				display: grid;
				align-items: start;
				li {
					display: flex;
					gap: 1rem;
				}
				label {
					flex-grow: 1;
					display: flex;
					align-items: center;
					gap: 1rem;
					img {
						max-height: 5rem;
					}
				}
			}
		}
		div.actions {
			display: grid;
			grid-template-columns: 1fr 1fr;
			width: 100%;
		}
		input[type='text'] {
			padding: 0.3rem;
		}
	}
</style>
