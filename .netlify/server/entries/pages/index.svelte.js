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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1696507a = require("../../chunks/index-1696507a.js");
var import_user_ef559a82 = require("../../chunks/user-ef559a82.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-fg6rrv.svelte-fg6rrv{height:100%}main.svelte-fg6rrv.svelte-fg6rrv{padding:1rem}ul.paper-grid.svelte-fg6rrv.svelte-fg6rrv{list-style-type:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:1rem}ul.paper-grid.svelte-fg6rrv li a.svelte-fg6rrv{display:block;border:2px solid var(--foreground);padding:1rem;transition:all 0.3s ease-in-out;text-decoration:none;color:var(--foreground);font-size:x-large}ul.paper-grid.svelte-fg6rrv li a.svelte-fg6rrv:hover{font-weight:bold;background-color:var(--foreground);color:var(--background)}",
  map: null
};
const Routes = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $papers, $$unsubscribe_papers;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$result.css.add(css);
  $$unsubscribe_papers();
  return `<div class="${"container svelte-fg6rrv"}">
	
	
	<main class="${"svelte-fg6rrv"}"><ul class="${"paper-grid svelte-fg6rrv"}">${(0, import_index_1696507a.g)($papers, (paper) => {
    return `<li><a href="${"/paper/" + (0, import_index_1696507a.h)(paper.id)}" class="${"svelte-fg6rrv"}">${(0, import_index_1696507a.h)(paper.name)}</a>
				</li>`;
  })}</ul>
		
		
		
		</main>
</div>`;
});
