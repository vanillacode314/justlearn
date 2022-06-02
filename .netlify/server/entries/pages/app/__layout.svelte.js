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
var import_index_62ca9411 = require("../../../chunks/index-62ca9411.js");
var import_StartPaperModal_e7ee925b = require("../../../chunks/StartPaperModal-e7ee925b.js");
var import_stores_2a0032fa = require("../../../chunks/stores-2a0032fa.js");
var import_app_0d80de54 = require("../../../chunks/app-0d80de54.js");
var import_user_843637aa = require("../../../chunks/user-843637aa.js");
var import_Button_2086bf86 = require("../../../chunks/Button-2086bf86.js");
var import_trash_aec85db4 = require("../../../chunks/trash-aec85db4.js");
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.wrapper.svelte-1vzsqkv{height:100%;display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:auto 1fr;grid-template-areas:"nav nav" "sidebar main" "sidebar main"}@media(max-width: 768px){.wrapper.svelte-1vzsqkv{grid-template-rows:auto 1fr;grid-template-columns:auto 1fr;grid-template-areas:"nav nav" "main main" "sidebar sidebar"}}main.svelte-1vzsqkv{grid-area:main;height:100%;overflow-y:auto}',
  map: null
};
const _layout = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1vzsqkv"}">
	${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.S, "Sidebar").$$render($$result, {}, {}, {})}
	<main class="${"svelte-1vzsqkv"}">${slots.default ? slots.default({}) : ``}</main></div>

${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.A, "AddQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.E, "EditQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.D, "DeletePaperModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.a, "DeleteQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_62ca9411.v)(import_StartPaperModal_e7ee925b.b, "StartPaperModal").$$render($$result, {}, {}, {})}`;
});
