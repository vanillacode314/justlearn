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
var import_add_19131305 = require("../../chunks/add-19131305.js");
var import_user_ef559a82 = require("../../chunks/user-ef559a82.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-5yuh9x.svelte-5yuh9x{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";height:100%}.toolbar.svelte-5yuh9x.svelte-5yuh9x{grid-area:toolbar;background-color:var(--foreground);height:100%}.toolbar.svelte-5yuh9x button.svelte-5yuh9x{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:none;background:var(--foreground);color:var(--background);cursor:pointer;transition:all 0.3s ease-in-out}.toolbar.svelte-5yuh9x button.svelte-5yuh9x:hover{background-color:var(--background);color:var(--foreground)}main.svelte-5yuh9x.svelte-5yuh9x{padding:1rem}ul.paper-grid.svelte-5yuh9x.svelte-5yuh9x{list-style-type:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:1rem}ul.paper-grid.svelte-5yuh9x li a.svelte-5yuh9x{display:block;border:2px solid var(--foreground);padding:1rem;transition:all 0.3s ease-in-out;text-decoration:none;color:var(--foreground);font-size:x-large}ul.paper-grid.svelte-5yuh9x li a.svelte-5yuh9x:hover{font-weight:bold;background-color:var(--foreground);color:var(--background)}',
  map: null
};
const Routes = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $papers, $$unsubscribe_papers;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$result.css.add(css);
  $$unsubscribe_papers();
  return `<div class="${"container svelte-5yuh9x"}"><div class="${"toolbar svelte-5yuh9x"}"><button title="${"Add Paper"}" class="${"svelte-5yuh9x"}">${(0, import_index_1696507a.v)(import_add_19131305.A, "IconAdd").$$render($$result, {}, {}, {})} Add</button></div>
	<main class="${"svelte-5yuh9x"}"><ul class="${"paper-grid svelte-5yuh9x"}">${(0, import_index_1696507a.g)($papers, (paper) => {
    return `<li><a href="${"/paper/" + (0, import_index_1696507a.h)(paper.id)}" class="${"svelte-5yuh9x"}">${(0, import_index_1696507a.h)(paper.name)}</a>
				</li>`;
  })}</ul>
		
		
		
		</main>
</div>`;
});
