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
	answer: Option['id'];
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

interface TestResult {
	id: number;
	done: boolean;
	cmarks: number;
	imarks: number;
	paper: Paper['id'];
	date_given: number;
	seconds_taken: number;
	total_time_available: number;
	answers: Array<Question['answer']>;
	timings: Array<number>;
	notes: string;
}
