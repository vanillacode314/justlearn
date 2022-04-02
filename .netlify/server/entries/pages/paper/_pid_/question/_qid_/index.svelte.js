var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bqidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1696507a = require("../../../../../../chunks/index-1696507a.js");
var import_app_bcd30bb6 = require("../../../../../../chunks/app-bcd30bb6.js");
var import_trash_d7eb86c4 = require("../../../../../../chunks/trash-d7eb86c4.js");
var import_user_ef559a82 = require("../../../../../../chunks/user-ef559a82.js");
var Question_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'article.svelte-gnfzvg.svelte-gnfzvg{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto 1fr;grid-template-areas:"heading image" "options image";align-content:start;gap:1rem;gap:1rem}article.svelte-gnfzvg img.svelte-gnfzvg{grid-area:image;width:100%}article.svelte-gnfzvg h2.svelte-gnfzvg{grid-area:heading}.options.svelte-gnfzvg.svelte-gnfzvg{grid-area:options;display:flex;flex-direction:column}.options.svelte-gnfzvg label.svelte-gnfzvg{margin:0.5em}',
  map: null
};
const Question = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let questionNo;
  let { question } = $$props;
  let { index = -1 } = $$props;
  let { answer } = $$props;
  console.log({ answer });
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css$1);
  questionNo = index + 1;
  return `<article class="${"svelte-gnfzvg"}">${(question == null ? void 0 : question.image) ? `<img${(0, import_index_1696507a.f)("src", question.image, 0)} alt="${"question"}" class="${"svelte-gnfzvg"}">` : ``}
	<h2 class="${"svelte-gnfzvg"}">Q${(0, import_index_1696507a.h)(questionNo > 0 ? questionNo : "")})
		${(0, import_index_1696507a.h)(question.text)}</h2>
	<div class="${"options svelte-gnfzvg"}">${(0, import_index_1696507a.g)(question.options, (option) => {
    return `<label class="${"svelte-gnfzvg"}"><input type="${"radio"}"${(0, import_index_1696507a.f)("name", String(question.id), 0)}${(0, import_index_1696507a.f)("value", option.id, 0)}${option.id === answer ? (0, import_index_1696507a.f)("checked", true, 1) : ""}>
				${(0, import_index_1696507a.h)(option.text)}</label>`;
  })}</div>
</article>`;
});
const Pencil = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1696507a.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_1696507a.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-25ygxz{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";height:100%}main.svelte-25ygxz{grid-area:main;padding:1rem;display:flex;flex-direction:column;gap:1rem}.toolbar.svelte-25ygxz{display:flex;flex-direction:column;grid-area:toolbar;background-color:var(--foreground);height:100%}',
  map: null
};
const U5Bqidu5D = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let pid;
  let paper;
  let id;
  let question;
  let $$unsubscribe_deleteQuestionModalOpen;
  let $$unsubscribe_editQuestionModalOpen;
  let $activeQuestion, $$unsubscribe_activeQuestion;
  let $page, $$unsubscribe_page;
  let $activePaper, $$unsubscribe_activePaper;
  let $papers, $$unsubscribe_papers;
  $$unsubscribe_deleteQuestionModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.e, (value) => value);
  $$unsubscribe_editQuestionModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.f, (value) => value);
  $$unsubscribe_activeQuestion = (0, import_index_1696507a.b)(import_app_bcd30bb6.c, (value) => $activeQuestion = value);
  $$unsubscribe_page = (0, import_index_1696507a.b)(import_app_bcd30bb6.p, (value) => $page = value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_bcd30bb6.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$result.css.add(css);
  pid = $page.params.pid;
  paper = $papers.find((p) => p.id === Number(pid));
  (0, import_index_1696507a.o)(import_app_bcd30bb6.a, $activePaper = paper, $activePaper);
  id = $page.params.qid;
  question = paper == null ? void 0 : paper.questions.find((q) => q.id === Number(id));
  (0, import_index_1696507a.o)(import_app_bcd30bb6.c, $activeQuestion = question, $activeQuestion);
  $$unsubscribe_deleteQuestionModalOpen();
  $$unsubscribe_editQuestionModalOpen();
  $$unsubscribe_activeQuestion();
  $$unsubscribe_page();
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  return `<div class="${"container svelte-25ygxz"}"><div class="${"toolbar svelte-25ygxz"}">${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(Pencil, "IconPencil").$$render($$result, {}, {}, {})} Edit`;
    }
  })}
		${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(import_trash_d7eb86c4.T, "IconTrash").$$render($$result, {}, {}, {})} Delete`;
    }
  })}</div>
	<main class="${"svelte-25ygxz"}">${paper ? `${(0, import_index_1696507a.v)(Question, "Question").$$render($$result, { question, answer: question.answer }, {}, {})}` : `<p>No question with id ${(0, import_index_1696507a.h)(id)} found in paper with id ${(0, import_index_1696507a.h)(pid)} and name ${(0, import_index_1696507a.h)(paper == null ? void 0 : paper.name)}:(</p>`}</main>
</div>`;
});
