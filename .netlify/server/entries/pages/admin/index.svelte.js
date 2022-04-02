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
var import_index_1696507a = require("../../../chunks/index-1696507a.js");
var import_add_19131305 = require("../../../chunks/add-19131305.js");
var import_user_ef559a82 = require("../../../chunks/user-ef559a82.js");
var import_Button_cadf2420 = require("../../../chunks/Button-cadf2420.js");
const Import = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1696507a.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_1696507a.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m14 12l-4-4v3H2v2h8v3m10 2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h2V6h12v12H6v-3H4v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-14upl5b.svelte-14upl5b{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";height:100%}@media(max-width: 768px){.container.svelte-14upl5b.svelte-14upl5b{grid-template-rows:auto 1fr;grid-template-columns:1fr;grid-template-areas:"toolbar" "main"}}.toolbar.svelte-14upl5b.svelte-14upl5b{grid-area:toolbar;background-color:var(--foreground);height:100%;display:flex;flex-direction:column}@media(max-width: 768px){.toolbar.svelte-14upl5b.svelte-14upl5b{flex-direction:row;flex-wrap:wrap}}main.svelte-14upl5b.svelte-14upl5b{padding:1rem}ul.paper-grid.svelte-14upl5b.svelte-14upl5b{list-style-type:none;display:grid;grid-template-columns:repeat(auto-fill, minmax(360px, 1fr));gap:1rem}ul.paper-grid.svelte-14upl5b li a.svelte-14upl5b{display:block;border:2px solid var(--foreground);padding:1rem;transition:all 0.3s ease-in-out;text-decoration:none;color:var(--foreground);font-size:x-large}ul.paper-grid.svelte-14upl5b li a.svelte-14upl5b:hover{font-weight:bold;background-color:var(--foreground);color:var(--background)}',
  map: null
};
const Admin = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $papers, $$unsubscribe_papers;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$result.css.add(css);
  $$unsubscribe_papers();
  return `<div class="${"container svelte-14upl5b"}"><div class="${"toolbar svelte-14upl5b"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(import_add_19131305.A, "IconAdd").$$render($$result, {}, {}, {})} Add`;
    }
  })}
		${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(Import, "IconImport").$$render($$result, {}, {}, {})} Import`;
    }
  })}</div>
	<main class="${"svelte-14upl5b"}"><ul class="${"paper-grid svelte-14upl5b"}">${(0, import_index_1696507a.g)($papers, (paper) => {
    return `<li><a href="${"/admin/paper/" + (0, import_index_1696507a.h)(paper.id)}" class="${"svelte-14upl5b"}">${(0, import_index_1696507a.h)(paper.name)}</a>
				</li>`;
  })}</ul></main>
</div>`;
});
