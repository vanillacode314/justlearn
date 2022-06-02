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
  default: () => App
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../../chunks/index-62ca9411.js");
var import_user_843637aa = require("../../../chunks/user-843637aa.js");
var import_Button_2086bf86 = require("../../../chunks/Button-2086bf86.js");
var import_app_0d80de54 = require("../../../chunks/app-0d80de54.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-xy4z22.svelte-xy4z22{grid-area:main;height:100%;display:flex;flex-direction:column}main.svelte-xy4z22 ul.paper-grid.svelte-xy4z22{padding:1rem;list-style-type:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:1rem}main.svelte-xy4z22 ul.paper-grid li.svelte-xy4z22{display:contents}main.svelte-xy4z22 section h3.svelte-xy4z22{--bg-color:black;--fg-color:white;padding:0.5rem;font-size:small;background-color:var(--bg-color);color:var(--fg-color)}",
  map: null
};
const App = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_activePaper;
  let $papers, $$unsubscribe_papers;
  let $sharedPapers, $$unsubscribe_sharedPapers;
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => value);
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => $papers = value);
  $$unsubscribe_sharedPapers = (0, import_index_62ca9411.b)(import_app_0d80de54.g, (value) => $sharedPapers = value);
  $$result.css.add(css);
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  $$unsubscribe_sharedPapers();
  return `<main class="${"svelte-xy4z22"}"><section><h3 class="${"svelte-xy4z22"}">Local Papers</h3>
		<ul class="${"paper-grid svelte-xy4z22"}">${(0, import_index_62ca9411.f)($papers, (paper) => {
    return `<li class="${"svelte-xy4z22"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, {
      type: "button",
      large: true,
      outlined: true
    }, {}, {
      default: () => {
        return `${(0, import_index_62ca9411.g)(paper.name)}
					`;
      }
    })}
				</li>`;
  })}
			${$papers.length < 1 ? `<p>No local papers found. You can create one from the admin panel</p>` : ``}</ul></section>
	<section><h3 class="${"svelte-xy4z22"}">Shared Papers</h3>
		<ul class="${"paper-grid svelte-xy4z22"}">${(0, import_index_62ca9411.f)($sharedPapers, (paper) => {
    return `<li class="${"svelte-xy4z22"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, {
      type: "button",
      large: true,
      outlined: true
    }, {}, {
      default: () => {
        return `${(0, import_index_62ca9411.g)(paper.name)}
					`;
      }
    })}
				</li>`;
  })}</ul></section>
</main>`;
});
