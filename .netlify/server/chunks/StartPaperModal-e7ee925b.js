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
  A: () => AddQuestionModal,
  D: () => DeletePaperModal,
  E: () => EditQuestionModal,
  S: () => Sidebar,
  a: () => DeleteQuestionModal,
  b: () => StartPaperModal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_62ca9411 = require("./index-62ca9411.js");
var import_stores_2a0032fa = require("./stores-2a0032fa.js");
var import_app_0d80de54 = require("./app-0d80de54.js");
var import_Button_2086bf86 = require("./Button-2086bf86.js");
var import_trash_aec85db4 = require("./trash-aec85db4.js");
var import_user_843637aa = require("./user-843637aa.js");
const Cog = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_62ca9411.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_62ca9411.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const File_document = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg${(0, import_index_62ca9411.a)([
    { preserveAspectRatio: "xMidYMid meet" },
    { viewBox: "0 0 24 24" },
    { width: "1.2em" },
    { height: "1.2em" },
    (0, import_index_62ca9411.e)($$props)
  ], {})}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2h9m3-4v-2H6v2h12Z"/>`}<!-- HTML_TAG_END --></svg>`;
});
var Navbar_svelte_svelte_type_style_lang = "";
var Sidebar_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "a.svelte-1k57w9t.svelte-1k57w9t{padding:0.5rem 1rem;text-decoration:none;color:var(--background);display:flex;align-items:center;gap:1rem}a.svelte-1k57w9t.svelte-1k57w9t:hover,a.active.svelte-1k57w9t.svelte-1k57w9t{font-weight:bold;color:var(--foreground);background:var(--background)}nav.svelte-1k57w9t.svelte-1k57w9t{min-width:200px;grid-area:sidebar;display:flex;flex-direction:column;background:var(--foreground);color:var(--background);border-right:0.1rem var(--background) solid}nav.svelte-1k57w9t .spacer.svelte-1k57w9t{flex-grow:1}@media(max-width: 768px){nav.svelte-1k57w9t.svelte-1k57w9t{flex-direction:row}}",
  map: null
};
const Sidebar = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_62ca9411.b)(import_stores_2a0032fa.p, (value) => $page = value);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  return `${!$page.url.pathname.startsWith("/paper") ? `<nav aria-label="${"sidebar"}" class="${"svelte-1k57w9t"}"><a title="${"results"}" href="${"/results"}" class="${[
    "svelte-1k57w9t",
    $page.url.pathname.startsWith("/results") ? "active" : ""
  ].join(" ").trim()}">${(0, import_index_62ca9411.v)(File_document, "IconResult").$$render($$result, { style: "font-size: 1.2em" }, {}, {})}
			<span>Results </span></a>
		<a title="${"admin"}" href="${"/admin"}" class="${["svelte-1k57w9t", $page.url.pathname.startsWith("/admin") ? "active" : ""].join(" ").trim()}">${(0, import_index_62ca9411.v)(Cog, "IconCog").$$render($$result, { style: "font-size: 1.2em" }, {}, {})}
			<span>Admin </span></a>
		<span class="${"spacer svelte-1k57w9t"}"></span>
		
		
		</nav>` : ``}`;
});
var AddQuestionModal_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "form.svelte-sw1fmv.svelte-sw1fmv.svelte-sw1fmv{min-width:300px;max-width:95%;background-color:var(--background)}form.svelte-sw1fmv header.svelte-sw1fmv.svelte-sw1fmv{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-sw1fmv div.form.svelte-sw1fmv.svelte-sw1fmv{padding:1rem;display:grid;gap:1rem}form.svelte-sw1fmv div.form.svelte-sw1fmv>label.svelte-sw1fmv{display:flex;gap:0.5rem;flex-direction:column}form.svelte-sw1fmv div.form ul.options.svelte-sw1fmv.svelte-sw1fmv{display:grid;align-items:start}form.svelte-sw1fmv div.form ul.options li.svelte-sw1fmv.svelte-sw1fmv{display:flex;gap:1rem}form.svelte-sw1fmv div.form ul.options label.svelte-sw1fmv.svelte-sw1fmv{flex-grow:1;display:flex;align-items:center;gap:1rem}form.svelte-sw1fmv div.form ul.options label img.svelte-sw1fmv.svelte-sw1fmv{max-height:5rem}form.svelte-sw1fmv div.actions.svelte-sw1fmv.svelte-sw1fmv{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-sw1fmv select.svelte-sw1fmv.svelte-sw1fmv{width:100%;text-overflow:ellipsis}form.svelte-sw1fmv input[type=text].svelte-sw1fmv.svelte-sw1fmv{padding:0.3rem}",
  map: null
};
const AddQuestionModal = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_papers;
  let $$unsubscribe_activePaper;
  let $addQuestionModal, $$unsubscribe_addQuestionModal;
  let $subjects, $$unsubscribe_subjects;
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => value);
  $$unsubscribe_addQuestionModal = (0, import_index_62ca9411.b)(import_app_0d80de54.b, (value) => $addQuestionModal = value);
  $$unsubscribe_subjects = (0, import_index_62ca9411.b)(import_user_843637aa.s, (value) => $subjects = value);
  let qInput;
  let text = "";
  let options = [];
  let selected = -1;
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_62ca9411.v)(import_app_0d80de54.M, "Modal").$$render($$result, { open: $addQuestionModal }, {
      open: ($$value) => {
        $addQuestionModal = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-sw1fmv"}"><header class="${"svelte-sw1fmv"}"><h3>Add Question</h3></header>
		<div class="${"form svelte-sw1fmv"}"><label class="${"svelte-sw1fmv"}">Question:
				<input type="${"text"}" placeholder="${"Write the question here"}" required class="${"svelte-sw1fmv"}"${(0, import_index_62ca9411.d)("this", qInput, 0)}${(0, import_index_62ca9411.d)("value", text, 0)}></label>
			<label class="${"svelte-sw1fmv"}">Subject:
				<select required class="${"svelte-sw1fmv"}">${(0, import_index_62ca9411.f)($subjects, (subject) => {
          return `<option${(0, import_index_62ca9411.d)("value", subject.name, 0)}>${(0, import_index_62ca9411.g)(subject.name)}
						</option>`;
        })}</select>
				</label>
			${``}
			<label class="${"svelte-sw1fmv"}">Image:
				<input id="${"image-input"}" type="${"file"}" placeholder="${"Write the question here"}"></label>
			<p>Options <em>(Choose the correct one):</em></p>
			<ul class="${"options svelte-sw1fmv"}">${(0, import_index_62ca9411.f)(options, (option) => {
          return `<li class="${"svelte-sw1fmv"}"><label class="${"svelte-sw1fmv"}"><input name="${"option"}" type="${"radio"}"${(0, import_index_62ca9411.d)("value", option.id, 0)} required${option.id === selected ? (0, import_index_62ca9411.d)("checked", true, 1) : ""}>
							${(option == null ? void 0 : option.text) ? `${(0, import_index_62ca9411.g)(option.text)}` : ``}
							${(option == null ? void 0 : option.image) ? `<img${(0, import_index_62ca9411.d)("src", option.image, 0)} alt="${"option " + (0, import_index_62ca9411.g)(option.id)}" class="${"svelte-sw1fmv"}">` : ``}</label>
						${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button" }, {}, {
            default: () => {
              return `${(0, import_index_62ca9411.v)(import_trash_aec85db4.T, "IconTrash").$$render($$result, {}, {}, {})}
						`;
            }
          })}
					</li>`;
        })}
				${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true, type: "button" }, {}, {
          default: () => {
            return `Add Option`;
          }
        })}</ul></div>
		<div class="${"actions svelte-sw1fmv"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `OK`;
          }
        })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button" }, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_papers();
  $$unsubscribe_activePaper();
  $$unsubscribe_addQuestionModal();
  $$unsubscribe_subjects();
  return $$rendered;
});
var DeletePaperModal_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "form.svelte-2j9d9y.svelte-2j9d9y{max-width:95%;background-color:var(--background)}form.svelte-2j9d9y header.svelte-2j9d9y{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-2j9d9y p.svelte-2j9d9y{padding:1rem}form.svelte-2j9d9y div.actions.svelte-2j9d9y{display:grid;grid-template-columns:1fr 1fr;width:100%}",
  map: null
};
const DeletePaperModal = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $activePaper, $$unsubscribe_activePaper;
  let $$unsubscribe_papers;
  let $deletePaperModal, $$unsubscribe_deletePaperModal;
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => value);
  $$unsubscribe_deletePaperModal = (0, import_index_62ca9411.b)(import_app_0d80de54.d, (value) => $deletePaperModal = value);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_62ca9411.v)(import_app_0d80de54.M, "Modal").$$render($$result, { open: $deletePaperModal }, {
      open: ($$value) => {
        $deletePaperModal = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-2j9d9y"}"><header class="${"svelte-2j9d9y"}"><h3>Delete Paper</h3></header>
		<p class="${"svelte-2j9d9y"}">Are you sure you would like to delete paper <strong>${(0, import_index_62ca9411.g)($activePaper.name)}</strong>?
		</p>
		<div class="${"actions svelte-2j9d9y"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `DELETE`;
          }
        })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_activePaper();
  $$unsubscribe_papers();
  $$unsubscribe_deletePaperModal();
  return $$rendered;
});
var DeleteQuestionModal_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-2j9d9y.svelte-2j9d9y{max-width:95%;background-color:var(--background)}form.svelte-2j9d9y header.svelte-2j9d9y{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-2j9d9y p.svelte-2j9d9y{padding:1rem}form.svelte-2j9d9y div.actions.svelte-2j9d9y{display:grid;grid-template-columns:1fr 1fr;width:100%}",
  map: null
};
const DeleteQuestionModal = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_papers;
  let $activePaper, $$unsubscribe_activePaper;
  let $activeQuestion, $$unsubscribe_activeQuestion;
  let $deleteQuestionModal, $$unsubscribe_deleteQuestionModal;
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => $activePaper = value);
  $$unsubscribe_activeQuestion = (0, import_index_62ca9411.b)(import_app_0d80de54.c, (value) => $activeQuestion = value);
  $$unsubscribe_deleteQuestionModal = (0, import_index_62ca9411.b)(import_app_0d80de54.e, (value) => $deleteQuestionModal = value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_62ca9411.v)(import_app_0d80de54.M, "Modal").$$render($$result, { open: $deleteQuestionModal }, {
      open: ($$value) => {
        $deleteQuestionModal = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-2j9d9y"}"><header class="${"svelte-2j9d9y"}"><h3>Delete Question</h3></header>
		<p class="${"svelte-2j9d9y"}">Are you sure you would like to delete question <strong>${(0, import_index_62ca9411.g)($activeQuestion.text)}</strong> from
			paper <strong>${(0, import_index_62ca9411.g)($activePaper.name)}</strong>?
		</p>
		<div class="${"actions svelte-2j9d9y"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `DELETE`;
          }
        })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, {}, {}, {
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
  $$unsubscribe_deleteQuestionModal();
  return $$rendered;
});
var EditQuestionModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "form.svelte-1a8qe8.svelte-1a8qe8.svelte-1a8qe8{max-width:95%;background-color:var(--background)}form.svelte-1a8qe8 header.svelte-1a8qe8.svelte-1a8qe8{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-1a8qe8 div.form.svelte-1a8qe8.svelte-1a8qe8{padding:1rem;display:grid;gap:1rem}form.svelte-1a8qe8 div.form.svelte-1a8qe8>label.svelte-1a8qe8{display:flex;gap:0.5rem;flex-direction:column}form.svelte-1a8qe8 div.form ul.options.svelte-1a8qe8.svelte-1a8qe8{display:grid;align-items:start}form.svelte-1a8qe8 div.form ul.options li.svelte-1a8qe8.svelte-1a8qe8{display:flex;gap:1rem}form.svelte-1a8qe8 div.form ul.options label.svelte-1a8qe8.svelte-1a8qe8{flex-grow:1;display:flex;gap:1rem;align-items:center}form.svelte-1a8qe8 div.form ul.options label img.svelte-1a8qe8.svelte-1a8qe8{max-height:5rem}form.svelte-1a8qe8 div.actions.svelte-1a8qe8.svelte-1a8qe8{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-1a8qe8 select.svelte-1a8qe8.svelte-1a8qe8{width:100%;text-overflow:ellipsis}form.svelte-1a8qe8 input[type=text].svelte-1a8qe8.svelte-1a8qe8{padding:0.3rem}",
  map: null
};
const EditQuestionModal = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  var _a;
  let $$unsubscribe_papers;
  let $$unsubscribe_activePaper;
  let $activeQuestion, $$unsubscribe_activeQuestion;
  let $editQuestionModal, $$unsubscribe_editQuestionModal;
  let $subjects, $$unsubscribe_subjects;
  $$unsubscribe_papers = (0, import_index_62ca9411.b)(import_user_843637aa.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => value);
  $$unsubscribe_activeQuestion = (0, import_index_62ca9411.b)(import_app_0d80de54.c, (value) => $activeQuestion = value);
  $$unsubscribe_editQuestionModal = (0, import_index_62ca9411.b)(import_app_0d80de54.f, (value) => $editQuestionModal = value);
  $$unsubscribe_subjects = (0, import_index_62ca9411.b)(import_user_843637aa.s, (value) => $subjects = value);
  let qInput;
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
    $$rendered = `${(0, import_index_62ca9411.v)(import_app_0d80de54.M, "Modal").$$render($$result, { open: $editQuestionModal }, {
      open: ($$value) => {
        $editQuestionModal = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-1a8qe8"}"><header class="${"svelte-1a8qe8"}"><h3>Edit Question</h3></header>
		<div class="${"form svelte-1a8qe8"}"><label class="${"svelte-1a8qe8"}">Question:
				<input type="${"text"}" placeholder="${"Write the question here"}" required class="${"svelte-1a8qe8"}"${(0, import_index_62ca9411.d)("this", qInput, 0)}${(0, import_index_62ca9411.d)("value", text, 0)}></label>
			<label class="${"svelte-1a8qe8"}">Subject:
				<select required class="${"svelte-1a8qe8"}">${(0, import_index_62ca9411.f)($subjects, (subject2) => {
          return `<option${(0, import_index_62ca9411.d)("value", subject2.name, 0)}>${(0, import_index_62ca9411.g)(subject2.name)}
						</option>`;
        })}</select></label>
			${subject ? `<label class="${"svelte-1a8qe8"}">Chapter:
					<select required class="${"svelte-1a8qe8"}">${(0, import_index_62ca9411.f)($subjects.find((s) => s.name === subject).chapters, (chapter) => {
          return `<option${(0, import_index_62ca9411.d)("value", chapter, 0)}>${(0, import_index_62ca9411.g)(chapter)}
							</option>`;
        })}</select></label>` : ``}
			<label class="${"svelte-1a8qe8"}">Image:
				<input id="${"image-input"}" type="${"file"}" placeholder="${"Write the question here"}"></label>
			<label class="${"svelte-1a8qe8"}">Keep Image:
				<input type="${"checkbox"}"${(0, import_index_62ca9411.d)("checked", keepImage, 1)}></label>
			<p>Options <em>(Choose the correct one):</em></p>
			<ul class="${"options svelte-1a8qe8"}">${(0, import_index_62ca9411.f)(options, (option) => {
          return `<li class="${"svelte-1a8qe8"}"><label class="${"svelte-1a8qe8"}"><input name="${"option"}" type="${"radio"}"${(0, import_index_62ca9411.d)("value", option.id, 0)} required${option.id === selected ? (0, import_index_62ca9411.d)("checked", true, 1) : ""}>
							${(option == null ? void 0 : option.text) ? `${(0, import_index_62ca9411.g)(option.text)}` : ``}
							${(option == null ? void 0 : option.image) ? `<img${(0, import_index_62ca9411.d)("src", option.image, 0)} alt="${"option " + (0, import_index_62ca9411.g)(option.id)}" class="${"svelte-1a8qe8"}">` : ``}</label>
						${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button" }, {}, {
            default: () => {
              return `${(0, import_index_62ca9411.v)(import_trash_aec85db4.T, "IconTrash").$$render($$result, {}, {}, {})}
						`;
            }
          })}
					</li>`;
        })}
				${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { inverted: true, type: "button" }, {}, {
          default: () => {
            return `Add Option`;
          }
        })}</ul></div>
		<div class="${"actions svelte-1a8qe8"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `OK`;
          }
        })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button" }, {}, {
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
  $$unsubscribe_editQuestionModal();
  $$unsubscribe_subjects();
  return $$rendered;
});
const css = {
  code: "form.svelte-1hpciba.svelte-1hpciba.svelte-1hpciba{max-width:95%;background-color:var(--background)}form.svelte-1hpciba header.svelte-1hpciba.svelte-1hpciba{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-1hpciba div.form.svelte-1hpciba.svelte-1hpciba{padding:1rem;display:grid;gap:1rem}form.svelte-1hpciba div.form.svelte-1hpciba>label.svelte-1hpciba{display:flex;gap:0.5rem;flex-direction:column}form.svelte-1hpciba div.actions.svelte-1hpciba.svelte-1hpciba{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-1hpciba input[type=number].svelte-1hpciba.svelte-1hpciba{padding:0.3rem}",
  map: null
};
const StartPaperModal = (0, import_index_62ca9411.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_results;
  let $$unsubscribe_activePaper;
  let $startPaperModal, $$unsubscribe_startPaperModal;
  $$unsubscribe_results = (0, import_index_62ca9411.b)(import_user_843637aa.r, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_62ca9411.b)(import_app_0d80de54.a, (value) => value);
  $$unsubscribe_startPaperModal = (0, import_index_62ca9411.b)(import_app_0d80de54.s, (value) => $startPaperModal = value);
  let qInput;
  let time = 180;
  let cmarks = 4;
  let imarks = -1;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_62ca9411.v)(import_app_0d80de54.M, "Modal").$$render($$result, { open: $startPaperModal }, {
      open: ($$value) => {
        $startPaperModal = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-1hpciba"}"><header class="${"svelte-1hpciba"}"><h3>Configure Paper</h3></header>
		<div class="${"form svelte-1hpciba"}"><label class="${"svelte-1hpciba"}"><span>Time Limit <em>(in minutes) </em>:
				</span>
				<input type="${"number"}" required class="${"svelte-1hpciba"}"${(0, import_index_62ca9411.d)("this", qInput, 0)}${(0, import_index_62ca9411.d)("value", time, 0)}></label>
			<label class="${"svelte-1hpciba"}">Marks for correct answers:
				<input type="${"number"}" min="${"1"}" required class="${"svelte-1hpciba"}"${(0, import_index_62ca9411.d)("this", qInput, 0)}${(0, import_index_62ca9411.d)("value", cmarks, 0)}></label>
			<label class="${"svelte-1hpciba"}">Marks for incorrect answers:
				<input type="${"number"}" max="${"0"}" required class="${"svelte-1hpciba"}"${(0, import_index_62ca9411.d)("this", qInput, 0)}${(0, import_index_62ca9411.d)("value", imarks, 0)}></label></div>
		<div class="${"actions svelte-1hpciba"}">${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `Start`;
          }
        })}
			${(0, import_index_62ca9411.v)(import_Button_2086bf86.B, "Button").$$render($$result, { type: "button" }, {}, {
          default: () => {
            return `Cancel`;
          }
        })}</div></form>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_results();
  $$unsubscribe_activePaper();
  $$unsubscribe_startPaperModal();
  return $$rendered;
});
