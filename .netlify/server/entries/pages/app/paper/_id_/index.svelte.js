var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bidu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("../../../../../chunks/index-62ca9411.js");
var import_intl_unofficial_duration_unit_format = __toESM(require("intl-unofficial-duration-unit-format"));
var import_Button_2086bf86 = require("../../../../../chunks/Button-2086bf86.js");
var import_timer_827815be = require("../../../../../chunks/timer-827815be.js");
var import_stores_2a0032fa = require("../../../../../chunks/stores-2a0032fa.js");
var import_user_843637aa = require("../../../../../chunks/user-843637aa.js");
var import_app_0d80de54 = require("../../../../../chunks/app-0d80de54.js");
var import_chevron_down_b21245fa = require("../../../../../chunks/chevron-down-b21245fa.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-t3oae5.svelte-t3oae5{height:100%;overflow-y:hidden;display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr auto;grid-template-areas:"main sidebar" "footer sidebar";padding:1rem;gap:1rem}@media(max-width: 768px){.container.svelte-t3oae5.svelte-t3oae5{grid-template-areas:"main main" "footer footer" "sidebar sidebar"}}main.svelte-t3oae5.svelte-t3oae5{grid-area:main;display:flex;flex-direction:column;gap:1rem}main.svelte-t3oae5 h1.svelte-t3oae5{font-size:large;margin:0}aside.svelte-t3oae5.svelte-t3oae5{grid-area:sidebar;overflow-y:auto}footer.svelte-t3oae5.svelte-t3oae5{grid-area:footer}.buttons.svelte-t3oae5.svelte-t3oae5{display:flex;gap:1rem;flex-wrap:wrap}.buttons.svelte-t3oae5 .spacer.svelte-t3oae5{flex-grow:1;height:0}@media(max-width: 768px){.buttons.svelte-t3oae5 .spacer.svelte-t3oae5{flex-grow:initial;flex-basis:100%}}',
  map: null
};
const U5Bidu5D = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $results, $$unsubscribe_results;
  let $countdown, $$unsubscribe_countdown;
  let $$unsubscribe_subjects;
  let $$unsubscribe_allPapers;
  let $page, $$unsubscribe_page;
  $$unsubscribe_results = (0, import_index_62ca9411.b)(import_user_843637aa.r, (value) => $results = value);
  $$unsubscribe_subjects = (0, import_index_62ca9411.b)(import_user_843637aa.s, (value) => value);
  $$unsubscribe_allPapers = (0, import_index_62ca9411.b)(import_app_0d80de54.h, (value) => value);
  $$unsubscribe_page = (0, import_index_62ca9411.b)(import_stores_2a0032fa.p, (value) => $page = value);
  const duration = new import_intl_unofficial_duration_unit_format.default(void 0, {
    style: import_intl_unofficial_duration_unit_format.default.styles.TIMER,
    format: "{hour}:{minutes}:{seconds}"
  });
  const id = $page.params.id;
  const countdown = (0, import_timer_827815be.t)({ interval: 100 });
  $$unsubscribe_countdown = (0, import_index_62ca9411.b)(countdown, (value) => $countdown = value);
  let result, answers = [], marks = [];
  let currentQuestion = 0;
  let start_time = Date.now();
  let accordionItems = [];
  function submit() {
    let c = false;
    if (!(($countdown.getTime() - start_time) / 1e3 >= (result == null ? void 0 : result.total_time_available) * 60)) {
      c = confirm("Are you sure you'd like to submit the paper before the time is up?");
    }
    if (c || ($countdown.getTime() - start_time) / 1e3 >= (result == null ? void 0 : result.total_time_available) * 60) {
      let end_time = Date.now();
      result.done = true;
      result.seconds_taken = (end_time - start_time) / 1e3;
      result.answers = answers;
      import_user_843637aa.r.set($results);
      (0, import_timer_827815be.g)("/result/" + result.id);
    }
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (($countdown.getTime() - start_time) / 1e3 >= (result == null ? void 0 : result.total_time_available) * 60) {
        submit();
      }
    }
    {
      {
        for (const item of accordionItems) {
          const offset = item.data.offset;
          const questions = item.data.questions;
          item.data.answers = answers.slice(offset, questions.length + offset);
          item.data.marks = marks.slice(offset, questions.length + offset);
        }
        accordionItems = accordionItems;
      }
    }
    $$rendered = `<div class="${"container svelte-t3oae5"}"><main class="${"svelte-t3oae5"}">${`<p>No paper with id ${(0, import_index_62ca9411.g)(id)} found :(</p>`}</main>
	<aside class="${"svelte-t3oae5"}">${(0, import_index_62ca9411.v)(import_timer_827815be.A, "Accordion").$$render($$result, { items: accordionItems }, {}, {
      default: ({ item }) => {
        return `${(0, import_index_62ca9411.v)(import_timer_827815be.Q, "Questions").$$render($$result, Object.assign(item.data), {}, {})}`;
      }
    })}</aside>
	<footer class="${"svelte-t3oae5"}"><div class="${"buttons svelte-t3oae5"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button" }, {}, {
      default: () => {
        return `Prev`;
      }
    })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button", inverted: true }, {}, {
      default: () => {
        return `Next`;
      }
    })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, {
      type: "button",
      danger: marks[currentQuestion],
      success: !marks[currentQuestion]
    }, {}, {
      default: () => {
        return `${(0, import_index_62ca9411.g)(marks[currentQuestion] ? "Unmark" : "Mark")}`;
      }
    })}
			<span class="${"spacer svelte-t3oae5"}"></span>
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button", inverted: true }, {}, {
      default: () => {
        return `Submit (${(0, import_index_62ca9411.g)(duration.format((result == null ? void 0 : result.total_time_available) * 60 - ($countdown.getTime() - start_time) / 1e3))})`;
      }
    })}</div></footer>
</div>`;
  } while (!$$settled);
  $$unsubscribe_results();
  $$unsubscribe_countdown();
  $$unsubscribe_subjects();
  $$unsubscribe_allPapers();
  $$unsubscribe_page();
  return $$rendered;
});
