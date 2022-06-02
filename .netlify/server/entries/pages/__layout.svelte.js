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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../chunks/index-62ca9411.js");
var import_stores_2a0032fa = require("../../chunks/stores-2a0032fa.js");
var import_StartPaperModal_e7ee925b = require("../../chunks/StartPaperModal-e7ee925b.js");
var import_app_0d80de54 = require("../../chunks/app-0d80de54.js");
var import_user_843637aa = require("../../chunks/user-843637aa.js");
var import_Button_2086bf86 = require("../../chunks/Button-2086bf86.js");
var import_trash_aec85db4 = require("../../chunks/trash-aec85db4.js");
const Arrow_back = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_62ca9411.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_62ca9411.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Github = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_62ca9411.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_62ca9411.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const css$1 = {
  code: ".back-arrow{cursor:pointer}.back-arrow:hover{color:red}a.svelte-6aj5d7.svelte-6aj5d7{text-decoration:none;color:var(--background);display:flex;gap:0.3rem}a.svelte-6aj5d7.svelte-6aj5d7:hover{text-decoration:underline}nav.svelte-6aj5d7.svelte-6aj5d7{border-bottom:0.1rem var(--background) solid;grid-area:nav;display:flex;gap:1rem;align-items:center;padding:1rem;background:var(--foreground);color:var(--background)}nav.svelte-6aj5d7 h1.svelte-6aj5d7{font-size:x-large;text-transform:uppercase;letter-spacing:0.1rem;margin:0;padding:0}nav.svelte-6aj5d7 .spacer.svelte-6aj5d7{flex-grow:1}",
  map: null
};
const Navbar = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_62ca9411.b)(import_stores_2a0032fa.p, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="${"svelte-6aj5d7"}">${$page.url.pathname !== "/" ? `<span>${(0, import_index_62ca9411.v)(Arrow_back, "IconBack").$$render($$result, { class: "back-arrow" }, {}, {})}</span>` : ``}
	<h1 class="${"brand svelte-6aj5d7"}">JustLearn</h1>
	<span class="${"spacer svelte-6aj5d7"}"></span>
	<a title="${"github"}" href="${"https://github.com/vanillacode314/justlearn"}" rel="${"external"}" class="${"svelte-6aj5d7"}">${(0, import_index_62ca9411.v)(Github, "IconGithub").$$render($$result, { style: "font-size: 1.2em" }, {}, {})}</a>
</nav>`;
});
var normalize = "";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.wrapper.svelte-1vzsqkv{height:100%;display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:auto 1fr;grid-template-areas:"nav nav" "sidebar main" "sidebar main"}@media(max-width: 768px){.wrapper.svelte-1vzsqkv{grid-template-rows:auto 1fr;grid-template-columns:auto 1fr;grid-template-areas:"nav nav" "main main" "sidebar sidebar"}}main.svelte-1vzsqkv{grid-area:main;height:100%;overflow-y:auto}',
  map: null
};
const _layout = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1vzsqkv"}">${(0, import_index_62ca9411.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.S, "Sidebar").$$render($$result, {}, {}, {})}
	<main class="${"svelte-1vzsqkv"}">${slots.default ? slots.default({}) : ``}</main></div>

${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.A, "AddQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.E, "EditQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.D, "DeletePaperModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.a, "DeleteQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.b, "StartPaperModal").$$render($$result, {}, {}, {})}`;
});
