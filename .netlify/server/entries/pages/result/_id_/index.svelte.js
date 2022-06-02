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
  default: () => U5Bidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../../../chunks/index-62ca9411.js");
var import_Button_2086bf86 = require("../../../../chunks/Button-2086bf86.js");
var import_ResultQuestion_2bfc5be1 = require("../../../../chunks/ResultQuestion-2bfc5be1.js");
var import_stores_2a0032fa = require("../../../../chunks/stores-2a0032fa.js");
var import_app_0d80de54 = require("../../../../chunks/app-0d80de54.js");
var import_user_843637aa = require("../../../../chunks/user-843637aa.js");
var import_chevron_down_b21245fa = require("../../../../chunks/chevron-down-b21245fa.js");
const Delete = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_62ca9411.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_62ca9411.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-1ju6dg2.svelte-1ju6dg2{display:grid;grid-template-rows:auto auto 1fr;grid-template-columns:1fr;grid-template-areas:"header" "main" "footer";gap:1rem;padding:1rem;max-height:100%}header.svelte-1ju6dg2.svelte-1ju6dg2{grid-area:header;display:flex;align-items:center;gap:1rem}header.svelte-1ju6dg2 .spacer.svelte-1ju6dg2{flex-grow:1}header.svelte-1ju6dg2 h1.svelte-1ju6dg2{font-size:large;margin:0}main.svelte-1ju6dg2.svelte-1ju6dg2{grid-area:main}@media(max-width: 768px){main.svelte-1ju6dg2.svelte-1ju6dg2{grid-template-columns:1fr}}main.svelte-1ju6dg2 .cards.svelte-1ju6dg2{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem}main.svelte-1ju6dg2 .cards .card.svelte-1ju6dg2{border:0.1rem var(--foreground) solid;padding:1rem}main.svelte-1ju6dg2 .cards h2.svelte-1ju6dg2{font-size:small}main.svelte-1ju6dg2 .cards p.svelte-1ju6dg2{font-size:xx-large}main.svelte-1ju6dg2 .card.svelte-1ju6dg2{display:flex;flex-direction:column;place-items:center}footer.svelte-1ju6dg2.svelte-1ju6dg2{grid-area:footer}footer.svelte-1ju6dg2 .item.svelte-1ju6dg2{margin-block:0.1rem}',
  map: null
};
const U5Bidu5D = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let id;
  let result;
  let paper;
  let correct;
  let skipped;
  let incorrect;
  let score;
  let $results, $$unsubscribe_results;
  let $allPapers, $$unsubscribe_allPapers;
  let $page, $$unsubscribe_page;
  $$unsubscribe_results = (0, import_index_62ca9411.b)(import_user_843637aa.r, (value) => $results = value);
  $$unsubscribe_allPapers = (0, import_index_62ca9411.b)(import_app_0d80de54.h, (value) => $allPapers = value);
  $$unsubscribe_page = (0, import_index_62ca9411.b)(import_stores_2a0032fa.p, (value) => $page = value);
  $$result.css.add(css);
  id = $page.params.id;
  result = $results.find((r) => r.id === Number(id));
  paper = result && $allPapers.find((p) => p.id === result.paper);
  correct = paper ? result.answers.filter((a, i) => a === paper.questions[i].answer) : [];
  skipped = paper ? result.answers.filter((a) => a === null) : [];
  incorrect = paper ? result.answers.filter((a, i) => a !== null && a !== paper.questions[i].answer) : [];
  score = result ? correct.length * result.cmarks + incorrect.length * result.imarks : 0;
  $$unsubscribe_results();
  $$unsubscribe_allPapers();
  $$unsubscribe_page();
  return `<div class="${"container svelte-1ju6dg2"}">${result && paper ? `<header class="${"svelte-1ju6dg2"}"><h1 class="${"svelte-1ju6dg2"}">${(0, import_index_62ca9411.g)(paper.name)} (result id: ${(0, import_index_62ca9411.g)(id)})</h1>
			<span class="${"spacer svelte-1ju6dg2"}"></span>
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { outlined: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(Delete, "IconDelete").$$render($$result, {}, {}, {})}
				Delete
			`;
    }
  })}</header>
		<main class="${"svelte-1ju6dg2"}"><div class="${"cards svelte-1ju6dg2"}"><div class="${"card svelte-1ju6dg2"}"><h2 class="${"svelte-1ju6dg2"}">Correct (Marks +${(0, import_index_62ca9411.g)(result.cmarks)})</h2>
					<p class="${"svelte-1ju6dg2"}">${(0, import_index_62ca9411.g)(correct.length)}</p></div>
				<div class="${"card svelte-1ju6dg2"}"><h2 class="${"svelte-1ju6dg2"}">Incorrect (Marks ${(0, import_index_62ca9411.g)(result.imarks)})</h2>
					<p class="${"svelte-1ju6dg2"}">${(0, import_index_62ca9411.g)(incorrect.length)}</p></div>
				<div class="${"card svelte-1ju6dg2"}"><h2 class="${"svelte-1ju6dg2"}">Skipped</h2>
					<p class="${"svelte-1ju6dg2"}">${(0, import_index_62ca9411.g)(skipped.length)}</p></div>
				<div class="${"card svelte-1ju6dg2"}"><h2 class="${"svelte-1ju6dg2"}">Score</h2>
					<p class="${"svelte-1ju6dg2"}">${(0, import_index_62ca9411.g)(score)}</p></div></div></main>
		<footer class="${"svelte-1ju6dg2"}">${(0, import_index_62ca9411.v)(import_ResultQuestion_2bfc5be1.V, "VirtualList").$$render($$result, { items: paper == null ? void 0 : paper.questions, height: "800px" }, {}, {
    default: ({ item: question }) => {
      let { answer, options } = question, index = paper.questions.findIndex((q) => q === question), isCorrect = result.answers[index] === answer, isSkipped = result.answers[index] === null, chosenOption = options.find((o) => o["id"] === result.answers[index]), correctOption = options.find((o) => o["id"] === answer);
      return `<div class="${"item svelte-1ju6dg2"}">${(0, import_index_62ca9411.v)(import_ResultQuestion_2bfc5be1.R, "ResultQuestion").$$render($$result, {
        isCorrect,
        isSkipped,
        chosenOption,
        correctOption,
        question,
        index
      }, {}, {})}</div>`;
    }
  })}</footer>` : `<p>No result with id ${(0, import_index_62ca9411.g)(id)} found :(</p>`}
</div>`;
});
