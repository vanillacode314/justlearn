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
  A: () => Accordion,
  Q: () => Questions,
  g: () => goto,
  t: () => timer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("./index-62ca9411.js");
var import_Button_2086bf86 = require("./Button-2086bf86.js");
var import_chevron_down_b21245fa = require("./chevron-down-b21245fa.js");
var import_user_843637aa = require("./user-843637aa.js");
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
var Questions_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".question--grid.svelte-f0gjrm{background-color:var(--background);display:grid;grid-template-columns:repeat(auto-fill, minmax(3rem, 1fr));padding-block:0.1rem;gap:0.1rem}",
  map: null
};
const Questions = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_62ca9411.i)();
  let { questions } = $$props;
  let { offset = 0 } = $$props;
  let { marks } = $$props;
  let { answers } = $$props;
  if ($$props.questions === void 0 && $$bindings.questions && questions !== void 0)
    $$bindings.questions(questions);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.marks === void 0 && $$bindings.marks && marks !== void 0)
    $$bindings.marks(marks);
  if ($$props.answers === void 0 && $$bindings.answers && answers !== void 0)
    $$bindings.answers(answers);
  $$result.css.add(css$1);
  return `<div class="${"question--grid svelte-f0gjrm"}">${(0, import_index_62ca9411.f)(questions, (_, index) => {
    let isAnswered = answers[index] !== null, isMarked = marks[index];
    return `
		
		${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, {
      type: "button",
      outlined: true,
      success: isAnswered,
      inverted: isMarked
    }, {}, {
      default: () => {
        return `${(0, import_index_62ca9411.g)(index + offset + 1)}
		`;
      }
    })}`;
  })}
</div>`;
});
var Accordion_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1mfg1hz header.svelte-1mfg1hz{background-color:var(--foreground);color:var(--background);display:flex;align-items:center;padding:0.5rem 1rem}div.svelte-1mfg1hz header .spacer.svelte-1mfg1hz{flex-grow:1}div.svelte-1mfg1hz header button.svelte-1mfg1hz{background:none;outline:none;border:none;cursor:pointer;transition:transform 0.3s ease-in-out}div.active.svelte-1mfg1hz header button.svelte-1mfg1hz{transform:rotate(180deg)}",
  map: null
};
const Accordion = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  let { key = (t) => t } = $$props;
  let activeIndex = 0;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  $$result.css.add(css);
  return `${(0, import_index_62ca9411.f)(items, (item, index) => {
    let active = index === activeIndex;
    return `
	<div class="${["svelte-1mfg1hz", active ? "active" : ""].join(" ").trim()}"><header class="${"svelte-1mfg1hz"}"><h3>${(0, import_index_62ca9411.g)(item.heading)}</h3>
			<span class="${"spacer svelte-1mfg1hz"}"></span>
			<button type="${"button"}" class="${"svelte-1mfg1hz"}">${(0, import_index_62ca9411.v)(import_chevron_down_b21245fa.C, "IconDown").$$render($$result, { style: "color:var(--background)" }, {}, {})}</button></header>
		${active ? `<main>${slots.default ? slots.default({ item, index }) : ``}
			</main>` : ``}
	</div>`;
  })}`;
});
function timer(options = { interval: 100 }) {
  return (0, import_user_843637aa.a)(null, (set) => {
    const update = () => set(new Date());
    update();
    const interval = setInterval(update, options.interval || 1e3);
    return () => clearInterval(interval);
  });
}
