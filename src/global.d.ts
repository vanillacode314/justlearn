/// <reference types="@sveltejs/kit" />
/// <reference types="unplugin-icons/types/svelte" />

interface Paper {
	id: number;
	name: string;
	questions: Question[];
}

interface Question {
	id: number;
	text?: string;
	image?: string;
	answer: number;
	options: Option[];
	subject: string;
	chapter: string;
}

interface Option {
	id: number;
	text?: string;
	image?: string;
}

interface Subject {
	name: string;
	chapters: string[];
}
