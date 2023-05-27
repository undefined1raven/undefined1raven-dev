export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["undefined1raven-devLogo.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.3d169e6e.js","app":"_app/immutable/entry/app.0015308c.js","imports":["_app/immutable/entry/start.3d169e6e.js","_app/immutable/chunks/index.e6eae6c9.js","_app/immutable/chunks/singletons.666f41db.js","_app/immutable/chunks/index.aaa42010.js","_app/immutable/entry/app.0015308c.js","_app/immutable/chunks/index.e6eae6c9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
