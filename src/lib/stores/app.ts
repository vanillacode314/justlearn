import { writable } from 'svelte/store';
import papers from '$lib/data/papers.json';

export const sharedPapers = writable<Paper[]>(papers);
export const activePaper = writable<Paper>(null);
export const activeQuestion = writable<Question>(null);
export const addQuestionModalOpen = writable<boolean>(false);
export const editQuestionModalOpen = writable<boolean>(false);
export const deletePaperModalOpen = writable<boolean>(false);
export const deleteQuestionModalOpen = writable<boolean>(false);
export const startPaperModalOpen = writable<boolean>(false);
