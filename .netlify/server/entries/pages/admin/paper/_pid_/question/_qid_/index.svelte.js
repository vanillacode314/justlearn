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
var import_index_1696507a = require("../../../../../../../chunks/index-1696507a.js");
var import_Question_cf03b059 = require("../../../../../../../chunks/Question-cf03b059.js");
var import_Button_cadf2420 = require("../../../../../../../chunks/Button-cadf2420.js");
var import_pencil_dd0cf3d2 = require("../../../../../../../chunks/pencil-dd0cf3d2.js");
var import_trash_d7eb86c4 = require("../../../../../../../chunks/trash-d7eb86c4.js");
var import_app_ce4f8d58 = require("../../../../../../../chunks/app-ce4f8d58.js");
var import_user_ef559a82 = require("../../../../../../../chunks/user-ef559a82.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-m4s11k{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";height:100%}@media(max-width: 768px){.container.svelte-m4s11k{grid-template-rows:auto 1fr;grid-template-columns:1fr;grid-template-areas:"toolbar" "main"}}.toolbar.svelte-m4s11k{grid-area:toolbar;background-color:var(--foreground);height:100%;display:flex;flex-direction:column}@media(max-width: 768px){.toolbar.svelte-m4s11k{flex-direction:row;flex-wrap:wrap}}main.svelte-m4s11k{grid-area:main;padding:1rem;display:flex;flex-direction:column;gap:1rem}',
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
  $$unsubscribe_deleteQuestionModalOpen = (0, import_index_1696507a.b)(import_app_ce4f8d58.e, (value) => value);
  $$unsubscribe_editQuestionModalOpen = (0, import_index_1696507a.b)(import_app_ce4f8d58.f, (value) => value);
  $$unsubscribe_activeQuestion = (0, import_index_1696507a.b)(import_app_ce4f8d58.c, (value) => $activeQuestion = value);
  $$unsubscribe_page = (0, import_index_1696507a.b)(import_app_ce4f8d58.p, (value) => $page = value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_ce4f8d58.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$result.css.add(css);
  pid = $page.params.pid;
  paper = $papers.find((p) => p.id === Number(pid));
  (0, import_index_1696507a.o)(import_app_ce4f8d58.a, $activePaper = paper, $activePaper);
  id = $page.params.qid;
  question = paper == null ? void 0 : paper.questions.find((q) => q.id === Number(id));
  (0, import_index_1696507a.o)(import_app_ce4f8d58.c, $activeQuestion = question, $activeQuestion);
  $$unsubscribe_deleteQuestionModalOpen();
  $$unsubscribe_editQuestionModalOpen();
  $$unsubscribe_activeQuestion();
  $$unsubscribe_page();
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  return `<div class="${"container svelte-m4s11k"}"><div class="${"toolbar svelte-m4s11k"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(import_pencil_dd0cf3d2.P, "IconPencil").$$render($$result, {}, {}, {})} Edit`;
    }
  })}
		${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(import_trash_d7eb86c4.T, "IconTrash").$$render($$result, {}, {}, {})} Delete`;
    }
  })}</div>
	<main class="${"svelte-m4s11k"}">${paper ? `${(0, import_index_1696507a.v)(import_Question_cf03b059.Q, "Question").$$render($$result, { question, answer: question.answer }, {}, {})}` : `<p>No question with id ${(0, import_index_1696507a.h)(id)} found in paper with id ${(0, import_index_1696507a.h)(pid)} and name ${(0, import_index_1696507a.h)(paper == null ? void 0 : paper.name)}:(</p>`}</main>
</div>`;
});
