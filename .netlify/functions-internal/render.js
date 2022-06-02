const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["bg.jpg","favicon.svg","manifest.json"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		entry: {"file":"start-e0c58888.js","js":["start-e0c58888.js","chunks/index-cde6f13c.js","chunks/index-7c40fde7.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/13.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/16.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/12.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/10.js')),
			() => Promise.resolve().then(() => require('../server/nodes/11.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/14.js')),
			() => Promise.resolve().then(() => require('../server/nodes/15.js'))
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
				id: "app",
				pattern: /^\/app\/?$/,
				names: [],
				types: [],
				path: "/app",
				shadow: null,
				a: [0,4,5],
				b: [1]
			},
			{
				type: 'page',
				id: "results",
				pattern: /^\/results\/?$/,
				names: [],
				types: [],
				path: "/results",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/uploadimage",
				pattern: /^\/api\/uploadimage\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/uploadimage.ts.js'))
			},
			{
				type: 'page',
				id: "app/admin",
				pattern: /^\/app\/admin\/?$/,
				names: [],
				types: [],
				path: "/app/admin",
				shadow: null,
				a: [0,4,7],
				b: [1]
			},
			{
				type: 'page',
				id: "app/results",
				pattern: /^\/app\/results\/?$/,
				names: [],
				types: [],
				path: "/app/results",
				shadow: null,
				a: [0,4,8],
				b: [1]
			},
			{
				type: 'page',
				id: "app/admin/paper/[pid]",
				pattern: /^\/app\/admin\/paper\/([^/]+?)\/?$/,
				names: ["pid"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4,9],
				b: [1]
			},
			{
				type: 'page',
				id: "app/admin/paper/[pid]/question/[qid]",
				pattern: /^\/app\/admin\/paper\/([^/]+?)\/question\/([^/]+?)\/?$/,
				names: ["pid","qid"],
				types: [null,null],
				path: null,
				shadow: null,
				a: [0,4,10],
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
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "app/paper/[id]",
				pattern: /^\/app\/paper\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4,12],
				b: [1]
			},
			{
				type: 'page',
				id: "app/result/[id]",
				pattern: /^\/app\/result\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4,13],
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
				a: [0,14],
				b: [1]
			},
			{
				type: 'page',
				id: "paper/[id]",
				pattern: /^\/paper\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,15],
				b: [1]
			},
			{
				type: 'page',
				id: "result/[id]",
				pattern: /^\/result\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,16],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
