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
  default: () => U5Bpidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../../../../chunks/index-62ca9411.js");
var import_Button_2086bf86 = require("../../../../../chunks/Button-2086bf86.js");
var import_add_d29b6d80 = require("../../../../../chunks/add-d29b6d80.js");
var import_trash_aec85db4 = require("../../../../../chunks/trash-aec85db4.js");
var import_List_83d446c7 = require("../../../../../chunks/List-83d446c7.js");
var import_pencil_7f38138b = require("../../../../../chunks/pencil-7f38138b.js");
var import_stores_2a0032fa = require("../../../../../chunks/stores-2a0032fa.js");
var import_user_843637aa = require("../../../../../chunks/user-843637aa.js");
var import_app_0d80de54 = require("../../../../../chunks/app-0d80de54.js");
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-juz0xf.svelte-juz0xf{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";overflow-y:auto}@media(max-width: 768px){.container.svelte-juz0xf.svelte-juz0xf{grid-template-rows:auto 1fr;grid-template-columns:1fr;grid-template-areas:"toolbar" "main"}}.toolbar.svelte-juz0xf.svelte-juz0xf{grid-area:toolbar;background-color:var(--foreground);height:100%;display:flex;flex-direction:column}@media(max-width: 768px){.toolbar.svelte-juz0xf.svelte-juz0xf{flex-direction:row;flex-wrap:wrap}}main.svelte-juz0xf.svelte-juz0xf{overflow-y:scroll;grid-area:main;padding:1rem;display:flex;flex-direction:column;gap:1rem}main.svelte-juz0xf h1.svelte-juz0xf{margin:0}',
  map: null
};
const U5Bpidu5D = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let id;
  let paper;
  let $papers, $$unsubscribe_papers;
  let $activePaper, $$unsubscribe_activePaper;
  let $page, $$unsubscribe_page;
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => $papers = value);
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => $activePaper = value);
  $$unsubscribe_page = (0, import_index_62ca9411.b)(import_stores_2a0032fa.p, (value) => $page = value);
  $$result.css.add(css);
  id = $page.params.pid;
  paper = $papers.find((p) => p.id === Number(id));
  (0, import_index_62ca9411.p)(import_app_0d80de54.a, $activePaper = paper, $activePaper);
  $$unsubscribe_papers();
  $$unsubscribe_activePaper();
  $$unsubscribe_page();
  return `<div class="${"container svelte-juz0xf"}"><div class="${"toolbar svelte-juz0xf"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(import_add_d29b6d80.A, "IconAdd").$$render($$result, {}, {}, {})} Add Question`;
    }
  })}
		${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(import_pencil_7f38138b.P, "IconPencil").$$render($$result, {}, {}, {})} Rename Paper`;
    }
  })}
		${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(import_trash_aec85db4.T, "IconTrash").$$render($$result, {}, {}, {})} Delete Paper`;
    }
  })}
		${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_62ca9411.v)(import_List_83d446c7.E, "IconExport").$$render($$result, {}, {}, {})} Export Paper`;
    }
  })}</div>
	<main class="${"svelte-juz0xf"}">${paper ? `<h1 class="${"svelte-juz0xf"}">${(0, import_index_62ca9411.g)(paper.name)}</h1>
			${paper.questions.length ? `${(0, import_index_62ca9411.v)(import_List_83d446c7.L, "List").$$render($$result, {
    items: paper.questions.map((q) => __spreadProps(__spreadValues({}, q), {
      href: `/admin/paper/${id}/question/${q.id}`
    }))
  }, {}, {
    default: ({ item, index }) => {
      return `Q${(0, import_index_62ca9411.g)(index + 1)}) ${(0, import_index_62ca9411.g)(item.text)}`;
    }
  })}` : `<p>No questions found</p>`}` : `<p>No paper with id ${(0, import_index_62ca9411.g)(id)} found :(</p>`}</main>
</div>`;
});
