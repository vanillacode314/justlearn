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
  default: () => Results
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../../chunks/index-62ca9411.js");
var import_user_843637aa = require("../../../chunks/user-843637aa.js");
var import_Button_2086bf86 = require("../../../chunks/Button-2086bf86.js");
var import_app_0d80de54 = require("../../../chunks/app-0d80de54.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-679k75.svelte-679k75{height:100%}main.svelte-679k75.svelte-679k75{padding:1rem}ul.paper-grid.svelte-679k75.svelte-679k75{list-style-type:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:1rem}ul.paper-grid.svelte-679k75 li.svelte-679k75{display:contents}",
  map: null
};
const Results = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $results, $$unsubscribe_results;
  let $allPapers, $$unsubscribe_allPapers;
  $$unsubscribe_results = (0, import_index_62ca9411.b)(import_user_843637aa.r, (value) => $results = value);
  $$unsubscribe_allPapers = (0, import_index_62ca9411.b)(import_app_0d80de54.h, (value) => $allPapers = value);
  $$result.css.add(css);
  $$unsubscribe_results();
  $$unsubscribe_allPapers();
  return `<div class="${"container svelte-679k75"}"><main class="${"svelte-679k75"}"><ul class="${"paper-grid svelte-679k75"}">${(0, import_index_62ca9411.f)($results, (result) => {
    return `<li class="${"svelte-679k75"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button", outlined: true }, {}, {
      default: () => {
        let paper = $allPapers.find((p) => p["id"] === result["paper"]);
        return `${(0, import_index_62ca9411.g)(paper.name)} <strong>(${(0, import_index_62ca9411.g)(new Date(result.date_given).toLocaleString())})</strong>
					`;
      }
    })}
				</li>`;
  })}</ul></main>
</div>`;
});
