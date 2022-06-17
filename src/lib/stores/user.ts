import subjectsJson from '$lib/data/subjects.json';
import { writable } from 'svelte/store';
import { persist, indexedDBStorage } from '@macfja/svelte-persistent-store';

export const papers = persist(writable<Paper[]>([]), indexedDBStorage(), 'papers');
export const subjects = persist(writable<Subject[]>(subjectsJson), indexedDBStorage(), 'subjects');
export const results = persist(writable<TestResult[]>([]), indexedDBStorage(), 'results');
