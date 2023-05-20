export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["undefined1raven-devLogo.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.c4dd6948.js","app":"_app/immutable/entry/app.7034061b.js","imports":["_app/immutable/entry/start.c4dd6948.js","_app/immutable/chunks/index.e196c4ed.js","_app/immutable/chunks/singletons.ba924065.js","_app/immutable/entry/app.7034061b.js","_app/immutable/chunks/index.e196c4ed.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
