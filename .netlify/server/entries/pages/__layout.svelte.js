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
var import_index_1696507a = require("../../chunks/index-1696507a.js");
var import_app_ce4f8d58 = require("../../chunks/app-ce4f8d58.js");
var import_Button_cadf2420 = require("../../chunks/Button-cadf2420.js");
var import_trash_d7eb86c4 = require("../../chunks/trash-d7eb86c4.js");
var import_user_ef559a82 = require("../../chunks/user-ef559a82.js");
const Arrow_back = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1696507a.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_1696507a.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Cog = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_1696507a.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_1696507a.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
var Navbar_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".back-arrow{cursor:pointer}.back-arrow:hover{color:red}a.svelte-blev84.svelte-blev84{color:var(--background);display:flex;gap:0.3rem}nav.svelte-blev84.svelte-blev84{display:flex;gap:1rem;justify-content:space-between;align-items:center;padding:0.5rem 1rem;background:var(--foreground);color:var(--background)}nav.svelte-blev84 header.svelte-blev84{display:flex;gap:1rem;align-items:center}nav.svelte-blev84 h1.svelte-blev84{font-size:x-large;text-transform:uppercase;letter-spacing:0.1rem;margin:0;padding:0}",
  map: null
};
const Navbar = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_1696507a.b)(import_app_ce4f8d58.p, (value) => $page = value);
  $$result.css.add(css$6);
  $$unsubscribe_page();
  return `<nav class="${"svelte-blev84"}"><header class="${"svelte-blev84"}">${$page.url.pathname !== "/" ? `<span>${(0, import_index_1696507a.v)(Arrow_back, "IconBack").$$render($$result, { class: "back-arrow" }, {}, {})}</span>` : ``}
		<h1 class="${"brand svelte-blev84"}">JustLearn</h1></header>
	<footer><a href="${"/admin"}" class="${"svelte-blev84"}">${(0, import_index_1696507a.v)(Cog, "IconCog").$$render($$result, {}, {}, {})} Admin
		</a></footer>
</nav>`;
});
var Modal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".modal.svelte-2cj11y{position:fixed;inset:0 0 0 0;backdrop-filter:brightness(50%) blur(2px);z-index:10000;display:grid;place-items:center}",
  map: null
};
const Modal = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  const dispatch = (0, import_index_1696507a.d)();
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$5);
  open && dispatch("open");
  return `${open ? `<div class="${"modal svelte-2cj11y"}">${slots.default ? slots.default({}) : ``}</div>` : ``}`;
});
var AddQuestionModal_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "form.svelte-9lmelb.svelte-9lmelb.svelte-9lmelb{min-width:400px;max-width:95%;background-color:var(--background)}form.svelte-9lmelb header.svelte-9lmelb.svelte-9lmelb{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-9lmelb div.form.svelte-9lmelb.svelte-9lmelb{padding:1rem;display:grid;gap:1rem}form.svelte-9lmelb div.form.svelte-9lmelb>label.svelte-9lmelb{display:flex;gap:0.5rem;flex-direction:column}form.svelte-9lmelb div.form ul.options.svelte-9lmelb.svelte-9lmelb{display:grid;align-items:start}form.svelte-9lmelb div.form ul.options li.svelte-9lmelb.svelte-9lmelb{display:flex;gap:1rem}form.svelte-9lmelb div.form ul.options label.svelte-9lmelb.svelte-9lmelb{flex-grow:1;display:flex;align-items:center;gap:1rem}form.svelte-9lmelb div.form ul.options label img.svelte-9lmelb.svelte-9lmelb{max-height:5rem}form.svelte-9lmelb div.actions.svelte-9lmelb.svelte-9lmelb{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-9lmelb input[type=text].svelte-9lmelb.svelte-9lmelb{padding:0.3rem}",
  map: null
};
const AddQuestionModal = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_papers;
  let $$unsubscribe_activePaper;
  let $addQuestionModalOpen, $$unsubscribe_addQuestionModalOpen;
  let $subjects, $$unsubscribe_subjects;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_ce4f8d58.a, (value) => value);
  $$unsubscribe_addQuestionModalOpen = (0, import_index_1696507a.b)(import_app_ce4f8d58.b, (value) => $addQuestionModalOpen = value);
  $$unsubscribe_subjects = (0, import_index_1696507a.b)(import_user_ef559a82.s, (value) => $subjects = value);
  let text = "";
  let options = [];
  let selected = -1;
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1696507a.v)(Modal, "Modal").$$render($$result, { open: $addQuestionModalOpen }, {
      open: ($$value) => {
        $addQuestionModalOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-9lmelb"}"><header class="${"svelte-9lmelb"}"><h3>Add Question</h3></header>
		<div class="${"form svelte-9lmelb"}"><label class="${"svelte-9lmelb"}">Question:
				<input type="${"text"}" placeholder="${"Write the question here"}" required class="${"svelte-9lmelb"}"${(0, import_index_1696507a.f)("value", text, 0)}></label>
			<label class="${"svelte-9lmelb"}">Subject:
				<select required>${(0, import_index_1696507a.g)($subjects, (subject) => {
          return `<option${(0, import_index_1696507a.f)("value", subject.name, 0)}>${(0, import_index_1696507a.h)(subject.name)}
						</option>`;
        })}</select>
				</label>
			${``}
			<label class="${"svelte-9lmelb"}">Image:
				<input id="${"image-input"}" type="${"file"}" placeholder="${"Write the question here"}"></label>
			<p>Options <em>(Choose the correct one):</em></p>
			<ul class="${"options svelte-9lmelb"}">${(0, import_index_1696507a.g)(options, (option) => {
          return `<li class="${"svelte-9lmelb"}"><label class="${"svelte-9lmelb"}"><input name="${"option"}" type="${"radio"}"${(0, import_index_1696507a.f)("value", option.id, 0)} required${option.id === selected ? (0, import_index_1696507a.f)("checked", true, 1) : ""}>
							${(option == null ? void 0 : option.text) ? `${(0, import_index_1696507a.h)(option.text)}` : ``}
							${(option == null ? void 0 : option.image) ? `<img${(0, import_index_1696507a.f)("src", option.image, 0)} alt="${"option " + (0, import_index_1696507a.h)(option.id)}" class="${"svelte-9lmelb"}">` : ``}</label>
						${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_1696507a.v)(import_trash_d7eb86c4.T, "IconTrash").$$render($$result, {}, {}, {})}
						`;
            }
          })}
					</li>`;
        })}
				${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `Add Option`;
          }
        })}</ul></div>
		<div class="${"actions svelte-9lmelb"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `OK`;
          }
        })}
			${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_papers();
  $$unsubscribe_activePaper();
  $$unsubscribe_addQuestionModalOpen();
  $$unsubscribe_subjects();
  return $$rendered;
});
var DeletePaperModal_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "form.svelte-d7dvu.svelte-d7dvu{min-width:400px;max-width:95%;background-color:var(--background)}form.svelte-d7dvu header.svelte-d7dvu{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-d7dvu p.svelte-d7dvu{padding:1rem}form.svelte-d7dvu div.actions.svelte-d7dvu{display:grid;grid-template-columns:1fr 1fr;width:100%}",
  map: null
};
const DeletePaperModal = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $activePaper, $$unsubscribe_activePaper;
  let $$unsubscribe_papers;
  let $deletePaperModalOpen, $$unsubscribe_deletePaperModalOpen;
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_ce4f8d58.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => value);
  $$unsubscribe_deletePaperModalOpen = (0, import_index_1696507a.b)(import_app_ce4f8d58.d, (value) => $deletePaperModalOpen = value);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1696507a.v)(Modal, "Modal").$$render($$result, { open: $deletePaperModalOpen }, {
      open: ($$value) => {
        $deletePaperModalOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-d7dvu"}"><header class="${"svelte-d7dvu"}"><h3>Delete Paper</h3></header>
		<p class="${"svelte-d7dvu"}">Are you sure you would like to delete paper <strong>${(0, import_index_1696507a.h)($activePaper.name)}</strong>?
		</p>
		<div class="${"actions svelte-d7dvu"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `DELETE`;
          }
        })}
			${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  $$unsubscribe_deletePaperModalOpen();
  return $$rendered;
});
var DeleteQuestionModal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-d7dvu.svelte-d7dvu{min-width:400px;max-width:95%;background-color:var(--background)}form.svelte-d7dvu header.svelte-d7dvu{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-d7dvu p.svelte-d7dvu{padding:1rem}form.svelte-d7dvu div.actions.svelte-d7dvu{display:grid;grid-template-columns:1fr 1fr;width:100%}",
  map: null
};
const DeleteQuestionModal = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_papers;
  let $activePaper, $$unsubscribe_activePaper;
  let $activeQuestion, $$unsubscribe_activeQuestion;
  let $deleteQuestionModalOpen, $$unsubscribe_deleteQuestionModalOpen;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_ce4f8d58.a, (value) => $activePaper = value);
  $$unsubscribe_activeQuestion = (0, import_index_1696507a.b)(import_app_ce4f8d58.c, (value) => $activeQuestion = value);
  $$unsubscribe_deleteQuestionModalOpen = (0, import_index_1696507a.b)(import_app_ce4f8d58.e, (value) => $deleteQuestionModalOpen = value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1696507a.v)(Modal, "Modal").$$render($$result, { open: $deleteQuestionModalOpen }, {
      open: ($$value) => {
        $deleteQuestionModalOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-d7dvu"}"><header class="${"svelte-d7dvu"}"><h3>Delete Question</h3></header>
		<p class="${"svelte-d7dvu"}">Are you sure you would like to delete question <strong>${(0, import_index_1696507a.h)($activeQuestion.text)}</strong> from
			paper <strong>${(0, import_index_1696507a.h)($activePaper.name)}</strong>?
		</p>
		<div class="${"actions svelte-d7dvu"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `DELETE`;
          }
        })}
			${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_papers();
  $$unsubscribe_activePaper();
  $$unsubscribe_activeQuestion();
  $$unsubscribe_deleteQuestionModalOpen();
  return $$rendered;
});
var EditQuestionModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "form.svelte-8gpwhr.svelte-8gpwhr.svelte-8gpwhr{min-width:400px;max-width:95%;background-color:var(--background)}form.svelte-8gpwhr header.svelte-8gpwhr.svelte-8gpwhr{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-8gpwhr div.form.svelte-8gpwhr.svelte-8gpwhr{padding:1rem;display:grid;gap:1rem}form.svelte-8gpwhr div.form.svelte-8gpwhr>label.svelte-8gpwhr{display:flex;gap:0.5rem;flex-direction:column}form.svelte-8gpwhr div.form ul.options.svelte-8gpwhr.svelte-8gpwhr{display:grid;align-items:start}form.svelte-8gpwhr div.form ul.options li.svelte-8gpwhr.svelte-8gpwhr{display:flex;gap:1rem}form.svelte-8gpwhr div.form ul.options label.svelte-8gpwhr.svelte-8gpwhr{flex-grow:1;display:flex;gap:1rem;align-items:center}form.svelte-8gpwhr div.form ul.options label img.svelte-8gpwhr.svelte-8gpwhr{max-height:5rem}form.svelte-8gpwhr div.actions.svelte-8gpwhr.svelte-8gpwhr{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-8gpwhr input[type=text].svelte-8gpwhr.svelte-8gpwhr{padding:0.3rem}",
  map: null
};
const EditQuestionModal = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $$unsubscribe_papers;
  let $$unsubscribe_activePaper;
  let $activeQuestion, $$unsubscribe_activeQuestion;
  let $editQuestionModalOpen, $$unsubscribe_editQuestionModalOpen;
  let $subjects, $$unsubscribe_subjects;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_ce4f8d58.a, (value) => value);
  $$unsubscribe_activeQuestion = (0, import_index_1696507a.b)(import_app_ce4f8d58.c, (value) => $activeQuestion = value);
  $$unsubscribe_editQuestionModalOpen = (0, import_index_1696507a.b)(import_app_ce4f8d58.f, (value) => $editQuestionModalOpen = value);
  $$unsubscribe_subjects = (0, import_index_1696507a.b)(import_user_ef559a82.s, (value) => $subjects = value);
  let text = ($activeQuestion == null ? void 0 : $activeQuestion.text) || "";
  let subject = ($activeQuestion == null ? void 0 : $activeQuestion.subject) || "";
  ($activeQuestion == null ? void 0 : $activeQuestion.chapter) || "";
  let options = ($activeQuestion == null ? void 0 : $activeQuestion.options) || [];
  let selected = (_a = $activeQuestion == null ? void 0 : $activeQuestion.answer) != null ? _a : -1;
  let keepImage = true;
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_1696507a.v)(Modal, "Modal").$$render($$result, { open: $editQuestionModalOpen }, {
      open: ($$value) => {
        $editQuestionModalOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-8gpwhr"}"><header class="${"svelte-8gpwhr"}"><h3>Edit Question</h3></header>
		<div class="${"form svelte-8gpwhr"}"><label class="${"svelte-8gpwhr"}">Question:
				<input type="${"text"}" placeholder="${"Write the question here"}" required class="${"svelte-8gpwhr"}"${(0, import_index_1696507a.f)("value", text, 0)}></label>
			<label class="${"svelte-8gpwhr"}">Subject:
				<select required>${(0, import_index_1696507a.g)($subjects, (subject2) => {
          return `<option${(0, import_index_1696507a.f)("value", subject2.name, 0)}>${(0, import_index_1696507a.h)(subject2.name)}
						</option>`;
        })}</select>
				</label>
			${subject ? `<label class="${"svelte-8gpwhr"}">Chapter:
					<select required>${(0, import_index_1696507a.g)($subjects.find((s) => s.name === subject).chapters, (chapter) => {
          return `<option${(0, import_index_1696507a.f)("value", chapter, 0)}>${(0, import_index_1696507a.h)(chapter)}
							</option>`;
        })}</select>
					</label>` : ``}
			<label class="${"svelte-8gpwhr"}">Image:
				<input id="${"image-input"}" type="${"file"}" placeholder="${"Write the question here"}"></label>
			<label class="${"svelte-8gpwhr"}">Keep Image:
				<input type="${"checkbox"}"${(0, import_index_1696507a.f)("checked", keepImage, 1)}></label>
			<p>Options <em>(Choose the correct one):</em></p>
			<ul class="${"options svelte-8gpwhr"}">${(0, import_index_1696507a.g)(options, (option) => {
          return `<li class="${"svelte-8gpwhr"}"><label class="${"svelte-8gpwhr"}"><input name="${"option"}" type="${"radio"}"${(0, import_index_1696507a.f)("value", option.id, 0)} required${option.id === selected ? (0, import_index_1696507a.f)("checked", true, 1) : ""}>
							${(option == null ? void 0 : option.text) ? `${(0, import_index_1696507a.h)(option.text)}` : ``}
							${(option == null ? void 0 : option.image) ? `<img${(0, import_index_1696507a.f)("src", option.image, 0)} alt="${"option " + (0, import_index_1696507a.h)(option.id)}" class="${"svelte-8gpwhr"}">` : ``}</label>
						${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `${(0, import_index_1696507a.v)(import_trash_d7eb86c4.T, "IconTrash").$$render($$result, {}, {}, {})}
						`;
            }
          })}
					</li>`;
        })}
				${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `Add Option`;
          }
        })}</ul></div>
		<div class="${"actions svelte-8gpwhr"}">${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `OK`;
          }
        })}
			${(0, import_index_1696507a.v)(import_Button_cadf2420.B, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_papers();
  $$unsubscribe_activePaper();
  $$unsubscribe_activeQuestion();
  $$unsubscribe_editQuestionModalOpen();
  $$unsubscribe_subjects();
  return $$rendered;
});
var normalize = "";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-hgq7rm{height:100%;display:flex;flex-direction:column}",
  map: null
};
const _layout = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-hgq7rm"}">${(0, import_index_1696507a.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}</div>

${(0, import_index_1696507a.v)(AddQuestionModal, "AddQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_1696507a.v)(EditQuestionModal, "EditQuestionModal").$$render($$result, {}, {}, {})}
${(0, import_index_1696507a.v)(DeletePaperModal, "DeletePaperModal").$$render($$result, {}, {}, {})}
${(0, import_index_1696507a.v)(DeleteQuestionModal, "DeleteQuestionModal").$$render($$result, {}, {}, {})}`;
});
