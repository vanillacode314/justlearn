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
  assets: /* @__PURE__ */ new Set(["bg.jpg", "favicon.svg", "manifest.json"]),
  mimeTypes: { ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".json": "application/json" },
  _: {
    entry: { "file": "start-e0c58888.js", "js": ["start-e0c58888.js", "chunks/index-cde6f13c.js", "chunks/index-7c40fde7.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/16.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/14.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/15.js")))
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
        id: "app",
        pattern: /^\/app\/?$/,
        names: [],
        types: [],
        path: "/app",
        shadow: null,
        a: [0, 4, 5],
        b: [1]
      },
      {
        type: "page",
        id: "results",
        pattern: /^\/results\/?$/,
        names: [],
        types: [],
        path: "/results",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/uploadimage",
        pattern: /^\/api\/uploadimage\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/uploadimage.ts.js")))
      },
      {
        type: "page",
        id: "app/admin",
        pattern: /^\/app\/admin\/?$/,
        names: [],
        types: [],
        path: "/app/admin",
        shadow: null,
        a: [0, 4, 7],
        b: [1]
      },
      {
        type: "page",
        id: "app/results",
        pattern: /^\/app\/results\/?$/,
        names: [],
        types: [],
        path: "/app/results",
        shadow: null,
        a: [0, 4, 8],
        b: [1]
      },
      {
        type: "page",
        id: "app/admin/paper/[pid]",
        pattern: /^\/app\/admin\/paper\/([^/]+?)\/?$/,
        names: ["pid"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 4, 9],
        b: [1]
      },
      {
        type: "page",
        id: "app/admin/paper/[pid]/question/[qid]",
        pattern: /^\/app\/admin\/paper\/([^/]+?)\/question\/([^/]+?)\/?$/,
        names: ["pid", "qid"],
        types: [null, null],
        path: null,
        shadow: null,
        a: [0, 4, 10],
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
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        id: "app/paper/[id]",
        pattern: /^\/app\/paper\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 4, 12],
        b: [1]
      },
      {
        type: "page",
        id: "app/result/[id]",
        pattern: /^\/app\/result\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 4, 13],
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
        a: [0, 14],
        b: [1]
      },
      {
        type: "page",
        id: "paper/[id]",
        pattern: /^\/paper\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 15],
        b: [1]
      },
      {
        type: "page",
        id: "result/[id]",
        pattern: /^\/result\/([^/]+?)\/?$/,
        names: ["id"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 16],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
