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
var import_app_bcd30bb6 = require("../../chunks/app-bcd30bb6.js");
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
var Navbar_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".back-arrow{cursor:pointer}.back-arrow:hover{color:red}nav.svelte-1wahz2v.svelte-1wahz2v{display:flex;gap:1rem;align-items:center;padding:0.5rem 1rem;background:var(--foreground);color:var(--background)}nav.svelte-1wahz2v h1.svelte-1wahz2v{font-size:x-large;text-transform:uppercase;letter-spacing:0.1rem;margin:0;padding:0}",
  map: null
};
const Navbar = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_1696507a.b)(import_app_bcd30bb6.p, (value) => $page = value);
  $$result.css.add(css$6);
  $$unsubscribe_page();
  return `<nav class="${"svelte-1wahz2v"}">${$page.url.pathname !== "/" ? `<span>${(0, import_index_1696507a.v)(Arrow_back, "IconBack").$$render($$result, { class: "back-arrow" }, {}, {})}</span>` : ``}
	<h1 class="${"brand svelte-1wahz2v"}">JustLearn</h1>
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
  code: "form.svelte-oceu9x.svelte-oceu9x.svelte-oceu9x{min-width:400px;max-width:95%;background-color:var(--background)}form.svelte-oceu9x header.svelte-oceu9x.svelte-oceu9x{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-oceu9x div.form.svelte-oceu9x.svelte-oceu9x{padding:1rem;display:grid;gap:1rem}form.svelte-oceu9x div.form.svelte-oceu9x>label.svelte-oceu9x{display:flex;gap:0.5rem;flex-direction:column}form.svelte-oceu9x div.form div.options.svelte-oceu9x.svelte-oceu9x{display:grid;align-items:start;gap:1rem}form.svelte-oceu9x div.form div.options label.svelte-oceu9x.svelte-oceu9x{display:flex;align-items:center;gap:1rem}form.svelte-oceu9x div.form div.options label img.svelte-oceu9x.svelte-oceu9x{max-height:5rem}form.svelte-oceu9x div.actions.svelte-oceu9x.svelte-oceu9x{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-oceu9x input[type=text].svelte-oceu9x.svelte-oceu9x{padding:0.3rem}",
  map: null
};
const AddQuestionModal = (0, import_index_1696507a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_papers;
  let $$unsubscribe_activePaper;
  let $addQuestionModalOpen, $$unsubscribe_addQuestionModalOpen;
  let $subjects, $$unsubscribe_subjects;
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => value);
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_bcd30bb6.a, (value) => value);
  $$unsubscribe_addQuestionModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.b, (value) => $addQuestionModalOpen = value);
  $$unsubscribe_subjects = (0, import_index_1696507a.b)(import_user_ef559a82.s, (value) => $subjects = value);
  let text = "";
  let options = [];
  let selected = -1;
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      console.log(options);
    }
    $$rendered = `${(0, import_index_1696507a.v)(Modal, "Modal").$$render($$result, { open: $addQuestionModalOpen }, {
      open: ($$value) => {
        $addQuestionModalOpen = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<form class="${"svelte-oceu9x"}"><header class="${"svelte-oceu9x"}"><h3>Add Question</h3></header>
		<div class="${"form svelte-oceu9x"}"><label class="${"svelte-oceu9x"}">Question:
				<input type="${"text"}" placeholder="${"Write the question here"}" required class="${"svelte-oceu9x"}"${(0, import_index_1696507a.f)("value", text, 0)}></label>
			<label class="${"svelte-oceu9x"}">Subject:
				<select required>${(0, import_index_1696507a.g)($subjects, (subject) => {
          return `<option${(0, import_index_1696507a.f)("value", subject.name, 0)}>${(0, import_index_1696507a.h)(subject.name)}
						</option>`;
        })}</select>
				</label>
			${``}
			<label class="${"svelte-oceu9x"}">Image:
				<input id="${"image-input"}" type="${"file"}" placeholder="${"Write the question here"}"></label>
			<p>Options <em>(Choose the correct one):</em></p>
			<div class="${"options svelte-oceu9x"}">${(0, import_index_1696507a.g)(options, (option) => {
          return `<label class="${"svelte-oceu9x"}"><input name="${"option"}" type="${"radio"}"${(0, import_index_1696507a.f)("value", option.id, 0)} required${option.id === selected ? (0, import_index_1696507a.f)("checked", true, 1) : ""}>
						${(option == null ? void 0 : option.text) ? `${(0, import_index_1696507a.h)(option.text)}` : ``}
						${(option == null ? void 0 : option.image) ? `<img${(0, import_index_1696507a.f)("src", option.image, 0)} alt="${"option " + (0, import_index_1696507a.h)(option.id)}" class="${"svelte-oceu9x"}">` : ``}
					</label>`;
        })}
				${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `Add Option`;
          }
        })}</div></div>
		<div class="${"actions svelte-oceu9x"}">${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `OK`;
          }
        })}
			${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, {}, {}, {
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
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_bcd30bb6.a, (value) => $activePaper = value);
  $$unsubscribe_papers = (0, import_index_1696507a.b)(import_user_ef559a82.p, (value) => value);
  $$unsubscribe_deletePaperModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.d, (value) => $deletePaperModalOpen = value);
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
		<div class="${"actions svelte-d7dvu"}">${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `DELETE`;
          }
        })}
			${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, {}, {}, {
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
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_bcd30bb6.a, (value) => $activePaper = value);
  $$unsubscribe_activeQuestion = (0, import_index_1696507a.b)(import_app_bcd30bb6.c, (value) => $activeQuestion = value);
  $$unsubscribe_deleteQuestionModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.e, (value) => $deleteQuestionModalOpen = value);
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
		<div class="${"actions svelte-d7dvu"}">${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `DELETE`;
          }
        })}
			${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, {}, {}, {
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
  code: "form.svelte-1whn5sy.svelte-1whn5sy.svelte-1whn5sy{min-width:400px;max-width:95%;background-color:var(--background)}form.svelte-1whn5sy header.svelte-1whn5sy.svelte-1whn5sy{background-color:var(--foreground);color:var(--background);padding:0.5rem 1rem;font-size:large}form.svelte-1whn5sy div.form.svelte-1whn5sy.svelte-1whn5sy{padding:1rem;display:grid;gap:1rem}form.svelte-1whn5sy div.form.svelte-1whn5sy>label.svelte-1whn5sy{display:flex;gap:0.5rem;flex-direction:column}form.svelte-1whn5sy div.form div.options.svelte-1whn5sy.svelte-1whn5sy{display:grid;align-items:start;gap:1rem}form.svelte-1whn5sy div.actions.svelte-1whn5sy.svelte-1whn5sy{display:grid;grid-template-columns:1fr 1fr;width:100%}form.svelte-1whn5sy input[type=text].svelte-1whn5sy.svelte-1whn5sy{padding:0.3rem}",
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
  $$unsubscribe_activePaper = (0, import_index_1696507a.b)(import_app_bcd30bb6.a, (value) => value);
  $$unsubscribe_activeQuestion = (0, import_index_1696507a.b)(import_app_bcd30bb6.c, (value) => $activeQuestion = value);
  $$unsubscribe_editQuestionModalOpen = (0, import_index_1696507a.b)(import_app_bcd30bb6.f, (value) => $editQuestionModalOpen = value);
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
        return `<form class="${"svelte-1whn5sy"}"><header class="${"svelte-1whn5sy"}"><h3>Edit Question</h3></header>
		<div class="${"form svelte-1whn5sy"}"><label class="${"svelte-1whn5sy"}">Question:
				<input type="${"text"}" placeholder="${"Write the question here"}" required class="${"svelte-1whn5sy"}"${(0, import_index_1696507a.f)("value", text, 0)}></label>
			<label class="${"svelte-1whn5sy"}">Subject:
				<select required>${(0, import_index_1696507a.g)($subjects, (subject2) => {
          return `<option${(0, import_index_1696507a.f)("value", subject2.name, 0)}>${(0, import_index_1696507a.h)(subject2.name)}
						</option>`;
        })}</select>
				</label>
			${subject ? `<label class="${"svelte-1whn5sy"}">Chapter:
					<select required>${(0, import_index_1696507a.g)($subjects.find((s) => s.name === subject).chapters, (chapter) => {
          return `<option${(0, import_index_1696507a.f)("value", chapter, 0)}>${(0, import_index_1696507a.h)(chapter)}
							</option>`;
        })}</select>
					</label>` : ``}
			<label class="${"svelte-1whn5sy"}">Image:
				<input id="${"image-input"}" type="${"file"}" placeholder="${"Write the question here"}"></label>
			<label class="${"svelte-1whn5sy"}">Keep Image:
				<input type="${"checkbox"}"${(0, import_index_1696507a.f)("checked", keepImage, 1)}></label>
			<p>Options <em>(Choose the correct one):</em></p>
			<div class="${"options svelte-1whn5sy"}">${(0, import_index_1696507a.g)(options, (option) => {
          return `<label><input name="${"option"}" type="${"radio"}"${(0, import_index_1696507a.f)("value", option.id, 0)} required${option.id === selected ? (0, import_index_1696507a.f)("checked", true, 1) : ""}>
						${(0, import_index_1696507a.h)(option.text)}
						${(option == null ? void 0 : option.image) ? `<img${(0, import_index_1696507a.f)("src", option.image, 0)} alt="${"option " + (0, import_index_1696507a.h)(option.id)}">` : ``}
					</label>`;
        })}
				${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { inverted: true }, {}, {
          default: () => {
            return `Add Option`;
          }
        })}</div></div>
		<div class="${"actions svelte-1whn5sy"}">${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, { type: "submit", inverted: true }, {}, {
          default: () => {
            return `OK`;
          }
        })}
			${(0, import_index_1696507a.v)(import_app_bcd30bb6.B, "Button").$$render($$result, {}, {}, {
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
