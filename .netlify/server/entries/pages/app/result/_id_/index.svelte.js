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
var import_index_62ca9411 = require("../../../../../chunks/index-62ca9411.js");
var import_user_843637aa = require("../../../../../chunks/user-843637aa.js");
var import_ResultQuestion_2bfc5be1 = require("../../../../../chunks/ResultQuestion-2bfc5be1.js");
var import_stores_2a0032fa = require("../../../../../chunks/stores-2a0032fa.js");
var import_app_0d80de54 = require("../../../../../chunks/app-0d80de54.js");
var import_chevron_down_b21245fa = require("../../../../../chunks/chevron-down-b21245fa.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-fvag32.svelte-fvag32{display:grid;grid-template-rows:auto auto 1fr;grid-template-columns:1fr;grid-template-areas:"header" "main" "footer";gap:1rem;padding:1rem;max-height:100%}header.svelte-fvag32.svelte-fvag32{grid-area:header}header.svelte-fvag32 h1.svelte-fvag32{font-size:large;margin:0}main.svelte-fvag32.svelte-fvag32{grid-area:main}@media(max-width: 768px){main.svelte-fvag32.svelte-fvag32{grid-template-columns:1fr}}main.svelte-fvag32 .cards.svelte-fvag32{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem}main.svelte-fvag32 .cards .card.svelte-fvag32{border:0.1rem var(--foreground) solid;padding:1rem}main.svelte-fvag32 .cards h2.svelte-fvag32{font-size:small}main.svelte-fvag32 .cards p.svelte-fvag32{font-size:xx-large}main.svelte-fvag32 .card.svelte-fvag32{display:flex;flex-direction:column;place-items:center}footer.svelte-fvag32.svelte-fvag32{grid-area:footer}footer.svelte-fvag32 .item.svelte-fvag32{margin-block:0.1rem}',
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
  let $allPapers, $$unsubscribe_allPapers;
  let $results, $$unsubscribe_results;
  let $page, $$unsubscribe_page;
  $$unsubscribe_allPapers = (0, import_index_62ca9411.b)(import_app_0d80de54.h, (value) => $allPapers = value);
  $$unsubscribe_results = (0, import_index_62ca9411.b)(import_user_843637aa.r, (value) => $results = value);
  $$unsubscribe_page = (0, import_index_62ca9411.b)(import_stores_2a0032fa.p, (value) => $page = value);
  $$result.css.add(css);
  id = $page.params.id;
  result = $results.find((r) => r.id === Number(id));
  paper = result && $allPapers.find((p) => p.id === result.paper);
  correct = paper ? result.answers.filter((a, i) => a === paper.questions[i].answer) : [];
  skipped = paper ? result.answers.filter((a) => a === null) : [];
  incorrect = paper ? result.answers.filter((a, i) => a !== null && a !== paper.questions[i].answer) : [];
  score = result ? correct.length * result.cmarks + incorrect.length * result.imarks : 0;
  $$unsubscribe_allPapers();
  $$unsubscribe_results();
  $$unsubscribe_page();
  return `<div class="${"container svelte-fvag32"}">${result && paper ? `<header class="${"svelte-fvag32"}"><h1 class="${"svelte-fvag32"}">${(0, import_index_62ca9411.g)(paper.name)} (result id: ${(0, import_index_62ca9411.g)(id)})</h1></header>
		<main class="${"svelte-fvag32"}"><div class="${"cards svelte-fvag32"}"><div class="${"card svelte-fvag32"}"><h2 class="${"svelte-fvag32"}">Correct (Marks +${(0, import_index_62ca9411.g)(result.cmarks)})</h2>
					<p class="${"svelte-fvag32"}">${(0, import_index_62ca9411.g)(correct.length)}</p></div>
				<div class="${"card svelte-fvag32"}"><h2 class="${"svelte-fvag32"}">Incorrect (Marks ${(0, import_index_62ca9411.g)(result.imarks)})</h2>
					<p class="${"svelte-fvag32"}">${(0, import_index_62ca9411.g)(incorrect.length)}</p></div>
				<div class="${"card svelte-fvag32"}"><h2 class="${"svelte-fvag32"}">Skipped</h2>
					<p class="${"svelte-fvag32"}">${(0, import_index_62ca9411.g)(skipped.length)}</p></div>
				<div class="${"card svelte-fvag32"}"><h2 class="${"svelte-fvag32"}">Score</h2>
					<p class="${"svelte-fvag32"}">${(0, import_index_62ca9411.g)(score)}</p></div></div></main>
		<footer class="${"svelte-fvag32"}">${(0, import_index_62ca9411.v)(import_ResultQuestion_2bfc5be1.V, "VirtualList").$$render($$result, { items: paper == null ? void 0 : paper.questions, height: "800px" }, {}, {
    default: ({ item: question }) => {
      let { answer, options } = question, index = paper.questions.findIndex((q) => q === question), isCorrect = result.answers[index] === answer, isSkipped = result.answers[index] === null, chosenOption = options.find((o) => o["id"] === result.answers[index]), correctOption = options.find((o) => o["id"] === answer);
      return `<div class="${"item svelte-fvag32"}">${(0, import_index_62ca9411.v)(import_ResultQuestion_2bfc5be1.R, "ResultQuestion").$$render($$result, {
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
