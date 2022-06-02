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
var import_index_62ca9411 = require("./index-62ca9411.js");
var import_user_843637aa = require("./user-843637aa.js");
const css = {
  code: "button.svelte-nv5p24{display:flex;justify-content:center;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border:none;cursor:pointer;transition:all 0.3s ease-in-out;background-color:var(--background);color:var(--foreground);border:0.1rem solid transparent}button.svelte-nv5p24:hover{border:0.1rem solid var(--background);background:var(--foreground);color:var(--background)}button.large.svelte-nv5p24{font-size:xx-large}button.inverted.svelte-nv5p24{background:var(--foreground);color:var(--background);border:0.1rem solid transparent}button.inverted.svelte-nv5p24:hover{border:0.1rem solid var(--foreground);background-color:var(--background);color:var(--foreground)}button.outlined.svelte-nv5p24:not(.success){border:0.1rem solid var(--foreground)}button.outlined:not(.success).inverted.svelte-nv5p24{border:0.1rem solid var(--background)}button.danger.svelte-nv5p24{background-color:red;color:var(--background)}button.danger.svelte-nv5p24:hover{background-color:var(--background);color:var(--foreground);border:0.1rem solid red}button.success.svelte-nv5p24{background-color:green;color:var(--background)}button.success.svelte-nv5p24:hover{background-color:var(--background);color:var(--foreground);border:0.1rem solid green}",
  map: null
};
const Button = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_62ca9411.j)($$props, ["inverted", "outlined", "success", "danger", "large"]);
  let { inverted = false } = $$props;
  let { outlined = false } = $$props;
  let { success = false } = $$props;
  let { danger = false } = $$props;
  let { large = false } = $$props;
  if ($$props.inverted === void 0 && $$bindings.inverted && inverted !== void 0)
    $$bindings.inverted(inverted);
  if ($$props.outlined === void 0 && $$bindings.outlined && outlined !== void 0)
    $$bindings.outlined(outlined);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  $$result.css.add(css);
  return `<button${(0, import_index_62ca9411.a)([(0, import_index_62ca9411.e)($$restProps)], {
    classes: (success ? "success" : "") + " " + (inverted ? "inverted" : "") + " " + (danger ? "danger" : "") + " " + (outlined ? "outlined" : "") + " " + (large ? "large" : "") + " svelte-nv5p24"
  })}>${slots.default ? slots.default({}) : ``}
</button>`;
});
