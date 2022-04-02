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
  Q: () => Question
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1696507a = require("./index-1696507a.js");
var Question_svelte_svelte_type_style_lang = "";
const css = {
  code: 'article.svelte-he0zcl.svelte-he0zcl{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto 1fr;grid-template-areas:"heading image" "options image";align-content:start;gap:1rem}@media(max-width: 768px){article.svelte-he0zcl.svelte-he0zcl{grid-template-areas:"heading heading" "image image" "options options"}}article.svelte-he0zcl img.svelte-he0zcl{grid-area:image;width:100%}article.svelte-he0zcl h2.svelte-he0zcl{grid-area:heading}.options.svelte-he0zcl.svelte-he0zcl{grid-area:options;display:flex;flex-direction:column}.options.svelte-he0zcl label.svelte-he0zcl{display:flex;justify-content:start;align-items:center;gap:1rem;width:auto}.options.svelte-he0zcl label img.svelte-he0zcl{width:auto;height:5rem}.options.svelte-he0zcl label.svelte-he0zcl{margin:0.5em}',
  map: null
};
const Question = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let questionNo;
  let { question } = $$props;
  let { index = -1 } = $$props;
  let { answer } = $$props;
  console.log({ answer });
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  $$result.css.add(css);
  questionNo = index + 1;
  return `<article class="${"svelte-he0zcl"}">${(question == null ? void 0 : question.image) ? `<img${(0, import_index_1696507a.f)("src", question.image, 0)} alt="${"question"}" class="${"svelte-he0zcl"}">` : ``}
	<h2 class="${"svelte-he0zcl"}">Q${(0, import_index_1696507a.h)(questionNo > 0 ? questionNo : "")})
		<span>${(0, import_index_1696507a.h)(question.text)}</span></h2>
	<div class="${"options svelte-he0zcl"}">${(0, import_index_1696507a.g)(question.options, (option) => {
    return `<label class="${"svelte-he0zcl"}"><input type="${"radio"}"${(0, import_index_1696507a.f)("name", String(question.id), 0)}${(0, import_index_1696507a.f)("value", option.id, 0)}${option.id === answer ? (0, import_index_1696507a.f)("checked", true, 1) : ""}>
				${(option == null ? void 0 : option.text) ? `${(0, import_index_1696507a.h)(option.text)}` : ``}
				${(option == null ? void 0 : option.image) ? `<img${(0, import_index_1696507a.f)("src", option.image, 0)} alt="${"option " + (0, import_index_1696507a.h)(option.id)}" class="${"svelte-he0zcl"}">` : ``}
			</label>`;
  })}</div>
</article>`;
});
