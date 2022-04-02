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
  B: () => Button
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1696507a = require("./index-1696507a.js");
var Button_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-4bfa0w{display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:none;cursor:pointer;transition:all 0.3s ease-in-out;background-color:var(--background);color:var(--foreground);border:0.1rem solid transparent}button.svelte-4bfa0w:hover{border:0.1rem solid var(--background);background:var(--foreground);color:var(--background)}button.inverted.svelte-4bfa0w{background:var(--foreground);color:var(--background);border:0.1rem solid transparent}button.inverted.svelte-4bfa0w:hover{border:0.1rem solid var(--foreground);background-color:var(--background);color:var(--foreground)}button.danger.svelte-4bfa0w{background-color:red}",
  map: null
};
const Button = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_1696507a.j)($$props, ["inverted", "danger"]);
  let { inverted = false } = $$props;
  let { danger = false } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  $$result.css.add(css);
  return `<button${(0, import_index_1696507a.a)([(0, import_index_1696507a.e)($$restProps)], {
    classes: (inverted ? "inverted" : "") + " " + (danger ? "danger" : "") + " svelte-4bfa0w"
  })}>${slots.default ? slots.default({}) : ``}
</button>`;
});
