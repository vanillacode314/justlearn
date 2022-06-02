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
  E: () => Export,
  L: () => List
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("./index-62ca9411.js");
const Export = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_62ca9411.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_62ca9411.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="m23 12l-4-4v3h-9v2h9v3M1 18V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3h-2V6H3v12h12v-3h2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
var List_svelte_svelte_type_style_lang = "";
const css = {
  code: "ul.svelte-1vi0q0y.svelte-1vi0q0y{list-style-type:none}ul.svelte-1vi0q0y li:last-child a.svelte-1vi0q0y{border-bottom:none}ul.svelte-1vi0q0y li a.svelte-1vi0q0y{display:block;padding:0.5rem 1rem;transition:all 0.3s ease-in-out;background-color:var(--background);color:var(--foreground);border-left:2px solid var(--foreground);border-bottom:2px solid var(--foreground);text-decoration:none}ul.svelte-1vi0q0y li a.svelte-1vi0q0y:hover{border-left:2px solid var(--background);background:var(--foreground);color:var(--background)}",
  map: null
};
const List = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  return `<ul class="${"svelte-1vi0q0y"}">${(0, import_index_62ca9411.f)(items, (item, index) => {
    return `<li><a${(0, import_index_62ca9411.d)("href", item == null ? void 0 : item.href, 0)} class="${"svelte-1vi0q0y"}">${slots.default ? slots.default({ item, index }) : ``}</a></li>`;
  })}
</ul>`;
});
