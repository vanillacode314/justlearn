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
  default: () => U5Bpidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1696507a = require("../../../../chunks/index-1696507a.js");
var import_Button_cadf2420 = require("../../../../chunks/Button-cadf2420.js");
var import_Question_cf03b059 = require("../../../../chunks/Question-cf03b059.js");
var import_app_ce4f8d58 = require("../../../../chunks/app-ce4f8d58.js");
var import_user_ef559a82 = require("../../../../chunks/user-ef559a82.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1s049d4.svelte-1s049d4{height:100%}main.svelte-1s049d4.svelte-1s049d4{grid-area:main;padding:1rem;display:flex;flex-direction:column;gap:1rem}main.svelte-1s049d4 h1.svelte-1s049d4{font-size:large;margin:0}main.svelte-1s049d4 .buttons.svelte-1s049d4{display:flex;gap:1rem}",
  map: null
};
const U5Bpidu5D = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let id;
  let paper;
  let $activePaper, $$unsubscribe_activePaper;
  let $papers, $$unsubscribe_papers;
  let $page, $$unsubscribe_page;
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_ce4f8d58.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$unsubscribe_page = (0, import_index_1696507a.b)(import_app_ce4f8d58.p, (value) => $page = value);
  let currentQuestion = 0;
  let answers = new Array((_b = (_a = paper == null ? void 0 : paper.questions) == null ? void 0 : _a.length) != null ? _b : 0);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    id = $page.params.pid;
    paper = $papers.find((p) => p.id === Number(id));
    (0, import_index_1696507a.o)(import_app_ce4f8d58.a, $activePaper = paper, $activePaper);
    $$rendered = `<div class="${"container svelte-1s049d4"}"><main class="${"svelte-1s049d4"}">${paper ? `<h1 class="${"svelte-1s049d4"}">${(0, import_index_1696507a.h)(paper.name)}</h1>
			${paper.questions.length ? `${(0, import_index_1696507a.v)(import_Question_cf03b059.Q, "Question").$$render($$result, {
      question: paper.questions[currentQuestion],
      answer: answers[currentQuestion]
    }, {
      answer: ($$value) => {
        answers[currentQuestion] = $$value;
        $$settled = false;
      }
    }, {})}
				<div class="${"buttons svelte-1s049d4"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Prev`;
      }
    })}
					${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
      default: () => {
        return `Next`;
      }
    })}</div>` : `<p>No questions found</p>`}` : `<p>No paper with id ${(0, import_index_1696507a.h)(id)} found :(</p>`}</main>
</div>`;
  } while (!$$settled);
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  $$unsubscribe_page();
  return $$rendered;
});
