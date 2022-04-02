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
  a: () => activePaper,
  b: () => addQuestionModalOpen,
  c: () => activeQuestion,
  d: () => deletePaperModalOpen,
  e: () => deleteQuestionModalOpen,
  f: () => editQuestionModalOpen,
  p: () => page
});
module.exports = __toCommonJS(stdin_exports);
var import_index_1696507a = require("./index-1696507a.js");
var import_user_ef559a82 = require("./user-ef559a82.js");
const getStores = () => {
  const stores = (0, import_index_1696507a.i)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const activePaper = (0, import_user_ef559a82.w)(null);
const activeQuestion = (0, import_user_ef559a82.w)(null);
const addQuestionModalOpen = (0, import_user_ef559a82.w)(false);
const editQuestionModalOpen = (0, import_user_ef559a82.w)(false);
const deletePaperModalOpen = (0, import_user_ef559a82.w)(false);
const deleteQuestionModalOpen = (0, import_user_ef559a82.w)(false);
