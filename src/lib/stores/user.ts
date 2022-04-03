import { writable } from 'svelte-local-storage-store';
import subjectsJson from '$lib/data/subjects.json';

export const papers = writable<Paper[]>('papers', []);
export const subjects = writable<Subject[]>('subjects', subjectsJson);
export const results = writable<TestResult[]>('results', []);
