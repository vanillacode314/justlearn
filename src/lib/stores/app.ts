import { derived, writable } from 'svelte/store';
import papers from '$lib/data/papers.json';
import { papers as userPapers } from '$lib/stores/user';
import { modalStore } from '$lib/components/Modal.svelte';

export const sharedPapers = writable<Paper[]>(papers);
export const activePaper = writable<Paper>(null);
export const activeQuestion = writable<Question>(null);
export const activeResult = writable<TestResult>(null);
export const activeResultQuestion = writable<Question>(null);
export const addQuestionModal = modalStore();
export const editQuestionModal = modalStore();
export const deletePaperModal = modalStore();
export const deleteQuestionModal = modalStore();
export const startPaperModal = modalStore();
export const resultQuestionModal = modalStore();

export const allPapers = derived([sharedPapers, userPapers], ([$sharedPapers, $userPapers]) => [
	...$sharedPapers,
	...$userPapers
]);
