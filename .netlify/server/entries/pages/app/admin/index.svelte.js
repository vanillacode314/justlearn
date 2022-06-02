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
  default: () => Admin
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../../../chunks/index-62ca9411.js");
var import_add_d29b6d80 = require("../../../../chunks/add-d29b6d80.js");
var import_import_5c475997 = require("../../../../chunks/import-5c475997.js");
var import_user_843637aa = require("../../../../chunks/user-843637aa.js");
var import_Button_2086bf86 = require("../../../../chunks/Button-2086bf86.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-14upl5b.svelte-14upl5b{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";height:100%}@media(max-width: 768px){.container.svelte-14upl5b.svelte-14upl5b{grid-template-rows:auto 1fr;grid-template-columns:1fr;grid-template-areas:"toolbar" "main"}}.toolbar.svelte-14upl5b.svelte-14upl5b{grid-area:toolbar;background-color:var(--foreground);height:100%;display:flex;flex-direction:column}@media(max-width: 768px){.toolbar.svelte-14upl5b.svelte-14upl5b{flex-direction:row;flex-wrap:wrap}}main.svelte-14upl5b.svelte-14upl5b{padding:1rem}ul.paper-grid.svelte-14upl5b.svelte-14upl5b{list-style-type:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:1rem}ul.paper-grid.svelte-14upl5b li a.svelte-14upl5b{display:block;border:2px solid var(--foreground);padding:1rem;transition:all 0.3s ease-in-out;text-decoration:none;color:var(--foreground);font-size:x-large}ul.paper-grid.svelte-14upl5b li a.svelte-14upl5b:hover{font-weight:bold;background-color:var(--foreground);color:var(--background)}',
  map: null
};
const Admin = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $papers, $$unsubscribe_papers;
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => $papers = value);
  $$result.css.add(css);
  $$unsubscribe_papers();
  return `<div class="${"container svelte-14upl5b"}"><div class="${"toolbar svelte-14upl5b"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(import_add_d29b6d80.A, "IconAdd").$$render($$result, {}, {}, {})} Add Paper`;
    }
  })}
		${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(import_import_5c475997.I, "IconImport").$$render($$result, {}, {}, {})} Import Paper`;
    }
  })}</div>
	<main class="${"svelte-14upl5b"}"><ul class="${"paper-grid svelte-14upl5b"}">${(0, import_index_62ca9411.f)($papers, (paper) => {
    return `<li><a href="${"/admin/paper/" + (0, import_index_62ca9411.g)(paper.id)}" class="${"svelte-14upl5b"}">${(0, import_index_62ca9411.g)(paper.name)}</a>
				</li>`;
  })}</ul></main>
</div>`;
});
