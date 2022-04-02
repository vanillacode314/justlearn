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
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "manifest.json", "service-worker.js"]),
  mimeTypes: { ".png": "image/png", ".json": "application/json" },
  _: {
    entry: { "file": "start-dc033f6b.js", "js": ["start-dc033f6b.js", "chunks/index-c527663a.js", "chunks/index-48d9e608.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "admin",
        pattern: /^\/admin\/?$/,
        names: [],
        types: [],
        path: "/admin",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "admin/paper/[pid]",
        pattern: /^\/admin\/paper\/([^/]+?)\/?$/,
        names: ["pid"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "admin/paper/[pid]/question/[qid]",
        pattern: /^\/admin\/paper\/([^/]+?)\/question\/([^/]+?)\/?$/,
        names: ["pid", "qid"],
        types: [null, null],
        path: null,
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "paper/[pid]",
        pattern: /^\/paper\/([^/]+?)\/?$/,
        names: ["pid"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "paper/[pid]/question/[qid]",
        pattern: /^\/paper\/([^/]+?)\/question\/([^/]+?)\/?$/,
        names: ["pid", "qid"],
        types: [null, null],
        path: null,
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/uploadimage",
        pattern: /^\/api\/uploadimage\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/uploadimage.ts.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
