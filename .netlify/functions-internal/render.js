const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		entry: {"file":"start-dc033f6b.js","js":["start-dc033f6b.js","chunks/index-c527663a.js","chunks/index-48d9e608.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "admin",
				pattern: /^\/admin\/?$/,
				names: [],
				types: [],
				path: "/admin",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "admin/paper/[pid]",
				pattern: /^\/admin\/paper\/([^/]+?)\/?$/,
				names: ["pid"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "admin/paper/[pid]/question/[qid]",
				pattern: /^\/admin\/paper\/([^/]+?)\/question\/([^/]+?)\/?$/,
				names: ["pid","qid"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "paper/[pid]",
				pattern: /^\/paper\/([^/]+?)\/?$/,
				names: ["pid"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "paper/[pid]/question/[qid]",
				pattern: /^\/paper\/([^/]+?)\/question\/([^/]+?)\/?$/,
				names: ["pid","qid"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/uploadimage",
				pattern: /^\/api\/uploadimage\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/uploadimage.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
