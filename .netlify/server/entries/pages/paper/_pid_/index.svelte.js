var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var import_index_1696507a = require("../../../../chunks/index-1696507a.js");
var import_app_bcd30bb6 = require("../../../../chunks/app-bcd30bb6.js");
var import_add_19131305 = require("../../../../chunks/add-19131305.js");
var import_trash_d7eb86c4 = require("../../../../chunks/trash-d7eb86c4.js");
var import_user_ef559a82 = require("../../../../chunks/user-ef559a82.js");
var List_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "ul.svelte-1vi0q0y.svelte-1vi0q0y{list-style-type:none}ul.svelte-1vi0q0y li:last-child a.svelte-1vi0q0y{border-bottom:none}ul.svelte-1vi0q0y li a.svelte-1vi0q0y{display:block;padding:0.5rem 1rem;transition:all 0.3s ease-in-out;background-color:var(--background);color:var(--foreground);border-left:2px solid var(--foreground);border-bottom:2px solid var(--foreground);text-decoration:none}ul.svelte-1vi0q0y li a.svelte-1vi0q0y:hover{border-left:2px solid var(--background);background:var(--foreground);color:var(--background)}",
  map: null
};
const List = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$1);
  return `<ul class="${"svelte-1vi0q0y"}">${(0, import_index_1696507a.g)(items, (item, index) => {
    return `<li><a${(0, import_index_1696507a.f)("href", item == null ? void 0 : item.href, 0)} class="${"svelte-1vi0q0y"}">${slots.default ? slots.default({ item, index }) : ``}</a></li>`;
  })}
</ul>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-2ur69w.svelte-2ur69w{display:grid;grid-template-columns:minmax(200px, auto) 1fr;grid-template-rows:1fr;grid-template-areas:"toolbar main";height:100%}main.svelte-2ur69w.svelte-2ur69w{grid-area:main;padding:1rem;display:flex;flex-direction:column;gap:1rem}main.svelte-2ur69w h1.svelte-2ur69w{margin:0}.toolbar.svelte-2ur69w.svelte-2ur69w{grid-area:toolbar;display:flex;flex-direction:column;background-color:var(--foreground);height:100%}',
  map: null
};
const U5Bpidu5D = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let id;
  let paper;
  let $$unsubscribe_deletePaperModalOpen;
  let $$unsubscribe_addQuestionModalOpen;
  let $activePaper, $$unsubscribe_activePaper;
  let $papers, $$unsubscribe_papers;
  let $page, $$unsubscribe_page;
  $$unsubscribe_deletePaperModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.d, (value) => value);
  $$unsubscribe_addQuestionModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.b, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_bcd30bb6.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => $papers = value);
  $$unsubscribe_page = (0, import_index_1696507a.b)(import_app_bcd30bb6.p, (value) => $page = value);
  $$result.css.add(css);
  id = $page.params.pid;
  paper = $papers.find((p) => p.id === Number(id));
  (0, import_index_1696507a.o)(import_app_bcd30bb6.a, $activePaper = paper, $activePaper);
  $$unsubscribe_deletePaperModalOpen();
  $$unsubscribe_addQuestionModalOpen();
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  $$unsubscribe_page();
  return `<div class="${"container svelte-2ur69w"}"><div class="${"toolbar svelte-2ur69w"}">${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(import_add_19131305.A, "IconAdd").$$render($$result, {}, {}, {})} Add`;
    }
  })}
		${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
    default: () => {
      return `${(0, import_index_1696507a.v)(import_trash_d7eb86c4.T, "IconTrash").$$render($$result, {}, {}, {})} Delete`;
    }
  })}</div>
	<main class="${"svelte-2ur69w"}">${paper ? `<h1 class="${"svelte-2ur69w"}">${(0, import_index_1696507a.h)(paper.name)}</h1>
			${paper.questions.length ? `${(0, import_index_1696507a.v)(List, "List").$$render($$result, {
    items: paper.questions.map((q) => __spreadProps(__spreadValues({}, q), {
      href: `/paper/${id}/question/${q.id}`
    }))
  }, {}, {
    default: ({ item, index }) => {
      return `Q${(0, import_index_1696507a.h)(index + 1)}) ${(0, import_index_1696507a.h)(item.text)}`;
    }
  })}` : `<p>No questions found</p>`}` : `<p>No paper with id ${(0, import_index_1696507a.h)(id)} found :(</p>`}</main>
</div>`;
});
