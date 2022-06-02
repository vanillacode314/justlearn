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
  R: () => ResultQuestion,
  V: () => VirtualList
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("./index-62ca9411.js");
var import_chevron_down_b21245fa = require("./chevron-down-b21245fa.js");
var VirtualList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svelte-virtual-list-viewport.svelte-1tqh76q{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-1tqh76q,svelte-virtual-list-row.svelte-1tqh76q{display:block}svelte-virtual-list-row.svelte-1tqh76q{overflow:hidden}",
  map: null
};
const VirtualList = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { height = "100%" } = $$props;
  let { itemHeight = void 0 } = $$props;
  let { start = 0 } = $$props;
  let { end = 0 } = $$props;
  let viewport;
  let contents;
  let visible;
  let top = 0;
  let bottom = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.itemHeight === void 0 && $$bindings.itemHeight && itemHeight !== void 0)
    $$bindings.itemHeight(itemHeight);
  if ($$props.start === void 0 && $$bindings.start && start !== void 0)
    $$bindings.start(start);
  if ($$props.end === void 0 && $$bindings.end && end !== void 0)
    $$bindings.end(end);
  $$result.css.add(css$1);
  visible = items.slice(start, end).map((data, i) => {
    return { index: i + start, data };
  });
  return `<svelte-virtual-list-viewport style="${"height: " + (0, import_index_62ca9411.g)(height) + ";"}" class="${"svelte-1tqh76q"}"${(0, import_index_62ca9411.d)("this", viewport, 0)}><svelte-virtual-list-contents style="${"padding-top: " + (0, import_index_62ca9411.g)(top) + "px; padding-bottom: " + (0, import_index_62ca9411.g)(bottom) + "px;"}" class="${"svelte-1tqh76q"}"${(0, import_index_62ca9411.d)("this", contents, 0)}>${(0, import_index_62ca9411.f)(visible, (row) => {
    return `<svelte-virtual-list-row class="${"svelte-1tqh76q"}">${slots.default ? slots.default({ item: row.data }) : `Missing template`}
			</svelte-virtual-list-row>`;
  })}</svelte-virtual-list-contents></svelte-virtual-list-viewport>`;
});
var ResultQuestion_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1vj1dpq.svelte-1vj1dpq{width:100%;max-width:500px}button.svelte-1vj1dpq.svelte-1vj1dpq{width:100%;cursor:pointer;background:none;outline:none;border:none;text-align:left}button.active.svelte-1vj1dpq .icon--down{transform:rotate(180deg)}.icon--down{transition:transform 0.3s ease-in-out}header.svelte-1vj1dpq.svelte-1vj1dpq{display:flex;border:0.1rem var(--foreground) solid;padding:0.5rem}header.isCorrect.svelte-1vj1dpq.svelte-1vj1dpq{border:none;background-color:green;color:white}header.isCorrect.svelte-1vj1dpq .icon--down{color:white}header.svelte-1vj1dpq.svelte-1vj1dpq:not(:is(.isCorrect, .isSkipped)){border:none;background-color:rgb(150, 171, 179);color:white}header.svelte-1vj1dpq:not(:is(.isCorrect, .isSkipped)) .icon--down{color:white}header.svelte-1vj1dpq .spacer.svelte-1vj1dpq{flex-grow:1}.main.svelte-1vj1dpq.svelte-1vj1dpq{border:0.1rem var(--foreground) solid;margin-block:0.1rem;padding:0.5rem}.main.svelte-1vj1dpq .options.svelte-1vj1dpq{margin-top:0.5rem;display:grid;gap:0.3rem}.main.svelte-1vj1dpq input[type=radio].svelte-1vj1dpq{accent-color:red}.main.svelte-1vj1dpq .correct[type=radio].svelte-1vj1dpq{accent-color:green}.main.svelte-1vj1dpq .more--info.svelte-1vj1dpq{margin-top:1rem;display:grid;gap:0.3rem}",
  map: null
};
const ResultQuestion = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  let { index } = $$props;
  let { isCorrect } = $$props;
  let { isSkipped } = $$props;
  let { chosenOption } = $$props;
  let { correctOption } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.isCorrect === void 0 && $$bindings.isCorrect && isCorrect !== void 0)
    $$bindings.isCorrect(isCorrect);
  if ($$props.isSkipped === void 0 && $$bindings.isSkipped && isSkipped !== void 0)
    $$bindings.isSkipped(isSkipped);
  if ($$props.chosenOption === void 0 && $$bindings.chosenOption && chosenOption !== void 0)
    $$bindings.chosenOption(chosenOption);
  if ($$props.correctOption === void 0 && $$bindings.correctOption && correctOption !== void 0)
    $$bindings.correctOption(correctOption);
  $$result.css.add(css);
  return `<section><button type="${"button"}" class="${["svelte-1vj1dpq", ""].join(" ").trim()}"><header class="${[
    "svelte-1vj1dpq",
    (isCorrect ? "isCorrect" : "") + " " + (isSkipped ? "isSkipped" : "")
  ].join(" ").trim()}"><p>Q${(0, import_index_62ca9411.g)(index + 1)}) ${(0, import_index_62ca9411.g)(question.text)}
				${question.image ? `<strong>(Expand to see image)</strong>` : ``}</p>
			<span class="${"spacer svelte-1vj1dpq"}"></span>
			${(0, import_index_62ca9411.v)(import_chevron_down_b21245fa.C, "IconDown").$$render($$result, { class: "icon--down" }, {}, {})}</header></button>
	${``}
</section>`;
});
