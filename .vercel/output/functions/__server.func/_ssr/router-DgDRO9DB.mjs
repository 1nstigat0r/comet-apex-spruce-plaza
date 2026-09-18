import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, _ as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { join } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DgDRO9DB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-48lav73z.css";
var APP_NAME = "דסק מלחמה — תימן";
var Route$2 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#070b10"
			},
			{
				name: "description",
				content: "דסק מלחמה חי לתימן — מפת שליטה, דיווחים רציפים ותקיפות לפי מודיעין גלוי."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;500;600;700&display=swap"
			},
			{
				rel: "stylesheet",
				href: "/vendor/leaflet/leaflet.css"
			},
			{
				rel: "stylesheet",
				href: "/desk.css?v=desk-19sep-a"
			},
			{
				rel: "preload",
				href: "/vendor/leaflet/leaflet.js",
				as: "script"
			},
			{
				rel: "preload",
				href: "/app.js?v=desk-19sep-a",
				as: "script"
			},
			{
				rel: "preload",
				href: "/data.json",
				as: "fetch",
				crossOrigin: "anonymous"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "he",
		dir: "rtl",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				id: "leaflet-js",
				src: "/vendor/leaflet/leaflet.js"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
				id: "yemen-app-js",
				src: "/app.js?v=desk-19sep-a"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter = () => import("./routes-zoPUP2jf.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
/** Server-only live source scanner for the Yemen desk. Never import from client. */
var TG = [
	{
		id: "Alibk3",
		name: "Ali Bk",
		lean: "houthi"
	},
	{
		id: "SabrenNews22",
		name: "Sabereen News",
		lean: "houthi"
	},
	{
		id: "Sabren_News1",
		name: "Sabereen Plus",
		lean: "houthi"
	},
	{
		id: "naya_saberin",
		name: "Naya Sabereen",
		lean: "houthi"
	},
	{
		id: "Alomhoar",
		name: "Al-Mihwar",
		lean: "houthi"
	},
	{
		id: "hezamalasad21",
		name: "Hazam al-Asad",
		lean: "houthi"
	},
	{
		id: "almasirah",
		name: "Al-Masirah",
		lean: "houthi"
	},
	{
		id: "saree_ye",
		name: "Yahya Saree",
		lean: "houthi"
	},
	{
		id: "yemenpressagency",
		name: "YPA",
		lean: "houthi"
	},
	{
		id: "AlMayadeenChannel",
		name: "Al-Mayadeen",
		lean: "houthi"
	},
	{
		id: "alhadath",
		name: "Al Hadath",
		lean: "gov"
	},
	{
		id: "AlArabiya_alhadath",
		name: "Al Arabiya al-Hadath",
		lean: "gov"
	},
	{
		id: "AlHadath_Brk",
		name: "Al Hadath",
		lean: "gov"
	},
	{
		id: "AlArabiya",
		name: "Al Arabiya",
		lean: "gov"
	},
	{
		id: "AsharqNews",
		name: "Asharq News",
		lean: "gov"
	},
	{
		id: "barranpress",
		name: "Barran Press",
		lean: "intl"
	},
	{
		id: "cratersky",
		name: "Crater Sky",
		lean: "south"
	},
	{
		id: "south24net",
		name: "South24",
		lean: "south"
	},
	{
		id: "AlJazeera",
		name: "Al Jazeera",
		lean: "intl"
	},
	{
		id: "baghdadtoday",
		name: "Baghdad Today",
		lean: "houthi"
	},
	{
		id: "RapidResponse",
		name: "Rapid Response",
		lean: "intl"
	},
	{
		id: "APnews",
		name: "AP",
		lean: "intl"
	},
	{
		id: "AlArabyAlJadeed",
		name: "Al-Araby Al-Jadeed",
		lean: "intl"
	},
	{
		id: "AlQaheraNews",
		name: "Al Qahera News",
		lean: "intl"
	},
	{
		id: "AlMamlakaTV",
		name: "Al-Mamlaka",
		lean: "intl"
	},
	{
		id: "abdulsalamsalah",
		name: "Mohammed Abdulsalam",
		lean: "houthi"
	},
	{
		id: "Mohammadlhouthi",
		name: "Mohammed Ali al-Houthi",
		lean: "houthi"
	},
	{
		id: "ansarollah1",
		name: "Ansarollah",
		lean: "houthi"
	},
	{
		id: "saba_agency",
		name: "Saba",
		lean: "houthi"
	},
	{
		id: "EremNews",
		name: "Erem News",
		lean: "intl"
	}
];
var X_USERS = [
	{
		handle: "Alsakaniali",
		name: "Ali Al-Sakani",
		lean: "gov"
	},
	{
		handle: "abdulqadermortd",
		name: "Abdulqader al-Murtada",
		lean: "houthi"
	},
	{
		handle: "hezamalasad",
		name: "Hazam al-Asad",
		lean: "houthi"
	},
	{
		handle: "Moh_Alhouthi",
		name: "Mohammed Ali al-Houthi",
		lean: "houthi"
	}
];
var RSS = [
	{
		url: "https://www.almashhad.news/feed",
		name: "Almashhad"
	},
	{
		url: "https://www.yemenmonitor.com/rss",
		name: "Yemen Monitor"
	},
	{
		url: "https://alsahwa-yemen.net/rss",
		name: "Alsahwa"
	},
	{
		url: "https://www.ypagency.net/feed",
		name: "YPA"
	},
	{
		url: "https://www.adenobserver.com/feed",
		name: "Aden Observer"
	},
	{
		url: "https://www.yemenat.net/feed",
		name: "Yemenat"
	},
	{
		url: "https://www.aljazeera.com/xml/rss/all.xml",
		name: "Al Jazeera"
	},
	{
		url: "https://www.aljazeera.net/aljazeerarss/a7c186be-1baa-4bd4-9d80-a84db769f779/73d0e1b4-532f-45ef-b135-bfdff8b8cab9",
		name: "Al Jazeera"
	},
	{
		url: "https://feeds.bbci.co.uk/news/world/middle_east/rss.xml",
		name: "BBC"
	},
	{
		url: "https://www.theguardian.com/world/yemen/rss",
		name: "Guardian"
	},
	{
		url: "https://www.france24.com/en/middle-east/rss",
		name: "France 24"
	},
	{
		url: "https://www.aa.com.tr/en/rss/default?cat=middle-east",
		name: "Anadolu"
	},
	{
		url: "https://www.aa.com.tr/en/rss/default?cat=world",
		name: "Anadolu"
	},
	{
		url: "https://www.arabnews.com/rss.xml",
		name: "Arab News"
	},
	{
		url: "https://www.al-monitor.com/rss",
		name: "Al-Monitor"
	},
	{
		url: "https://www.thenationalnews.com/arc/outboundfeeds/rss/?outputType=xml",
		name: "The National"
	},
	{
		url: "https://www.middleeasteye.net/rss",
		name: "Middle East Eye"
	},
	{
		url: "https://rss.politico.com/politics-news.xml",
		name: "Politico"
	},
	{
		url: "https://news.google.com/rss/search?q=site:foxnews.com+(Yemen+OR+Houthi+OR+Houthis)&hl=en-US&gl=US&ceid=US:en",
		name: "Fox News"
	},
	{
		url: "https://news.google.com/rss/search?q=site:alaraby.co.uk+(%D8%A7%D9%84%D9%8A%D9%85%D9%86+OR+%D8%A7%D9%84%D8%AD%D9%88%D8%AB)+OR+site:newarab.com+Yemen&hl=ar&gl=YE&ceid=YE:ar",
		name: "Al-Araby Al-Jadeed"
	},
	{
		url: "https://news.google.com/rss/search?q=site:al-akhbar.com+(%D8%A7%D9%84%D9%8A%D9%85%D9%86+OR+%D8%A7%D9%84%D8%AD%D9%88%D8%AB)&hl=ar&gl=LB&ceid=LB:ar",
		name: "Al-Akhbar"
	},
	{
		url: "https://news.google.com/rss/search?q=Trump+(Houthi+OR+Houthis+OR+Yemen)+when:2d&hl=en-US&gl=US&ceid=US:en",
		name: "US media"
	},
	{
		url: "https://news.google.com/rss/search?q=site:aawsat.com+(%D8%A7%D9%84%D9%8A%D9%85%D9%86+OR+%D8%A7%D9%84%D8%AD%D9%88%D8%AB)&hl=ar&gl=SA&ceid=SA:ar",
		name: "Asharq Al-Awsat"
	},
	{
		url: "https://news.google.com/rss/search?q=site:alhurra.com+(%D8%A7%D9%84%D9%8A%D9%85%D9%86+OR+Houthi+OR+%D8%A7%D9%84%D8%AD%D9%88%D8%AB)&hl=ar&gl=US&ceid=US:ar",
		name: "Alhurra"
	},
	{
		url: "https://news.google.com/rss/search?q=site:eremnews.com+(%D8%A7%D9%84%D9%8A%D9%85%D9%86+OR+%D8%A7%D9%84%D8%AD%D9%88%D8%AB)&hl=ar&gl=AE&ceid=AE:ar",
		name: "Erem News"
	},
	{
		url: "https://news.google.com/rss/search?q=site:okaz.com.sa+(%D8%A7%D9%84%D8%AD%D9%88%D8%AB+OR+%D8%A7%D9%84%D9%8A%D9%85%D9%86)&hl=ar&gl=SA&ceid=SA:ar",
		name: "Okaz"
	},
	{
		url: "https://news.google.com/rss/search?q=site:alwatan.com.sa+(%D8%A7%D9%84%D8%AD%D9%88%D8%AB+OR+%D8%A8%D8%A7%D8%A8+%D8%A7%D9%84%D9%85%D9%86%D8%AF%D8%A8)&hl=ar&gl=SA&ceid=SA:ar",
		name: "Al-Watan"
	},
	{
		url: "https://news.google.com/rss/search?q=(Saudi+OR+Aramco+OR+Yanbu)+(oil+OR+crude+OR+pipeline)+Houthi+when:2d&hl=en-US&gl=US&ceid=US:en",
		name: "Energy press"
	},
	{
		url: "https://news.google.com/rss/search?q=(Suez+OR+%22Red+Sea%22+OR+%22Bab+el-Mandeb%22)+(shipping+OR+tanker+OR+freight)+Houthi+when:2d&hl=en-US&gl=US&ceid=US:en",
		name: "Shipping press"
	},
	{
		url: "https://news.google.com/rss/search?q=(Trump+OR+Washington+OR+Egypt+OR+Gulf)+Houthi+(Yemen+OR+%22Red+Sea%22)+when:2d&hl=en-US&gl=US&ceid=US:en",
		name: "US media"
	}
];
var YEMEN_RE = /yemen|houthi|sanaa|sana'a|marib|taiz|mocha|mokha|hudaydah|hodeidah|bab al-?mand|mayun|mayyun|perim|lahj|dhalea|jawf|ibb\b|red sea|suez|aramco|yanbu|brent|crude oil|tanker|shipping lane|اليمن|اليمني|الحوث|صنعاء|مأرب|تعز|المخا|الحديدة|باب المندب|ميون|صعدة|الجوف|الضالع|لحج|عدن|أنصار الله|قوات صنعاء|الوازعية|كحبوب|ذباب|السعود|ابن سلمان|حزام الأسد|hezamalasad|المرتضى|السكن|نפט|ארמקו|תעלת סואץ|ים סוף|ים האדום/i;
var NOT_YEMEN_ONLY = /هرمز|hormuz|pakistan fuel|إغلاق جميع الأسواق|ناقلات نفط عملاقة اليوم في ميناء البصرة|دير.?الزور|خيبر بباكستان|الجافورة|يونيفيل|جنوب لبنان|دير ميماس/i;
var SOURCE_HE = {
	"Ali Bk": "עלי בכר",
	"Sabereen News": "צאברין",
	"Sabereen Plus": "צאברין פלוס",
	"Naya Sabereen": "נאיא־צאברין",
	"Al-Mihwar": "אלמחור",
	"Hazam al-Asad": "חזאם אלאסד",
	"Al-Masirah": "אלמסירה",
	"Yahya Saree": "יחיא סריע",
	YPA: "YPA",
	"Al Hadath": "אלחדת׳",
	"Al Arabiya al-Hadath": "אלערביה אלחדת׳",
	"Al Arabiya": "אלערביה",
	"Al Jazeera": "אלג׳זירה",
	BBC: "BBC",
	ReliefWeb: "ReliefWeb",
	Almashhad: "אלמשהד",
	"Yemen Monitor": "ימן מוניטור",
	Alsahwa: "אלצחוה",
	"Aden Observer": "עדן אובזרבר",
	Guardian: "גרדיאן",
	"France 24": "פראנס 24",
	Anadolu: "אנאדולו",
	"Arab News": "ערב ניוז",
	"Al-Monitor": "אלמוניטור",
	"The National": "דה נשיונל",
	"Barran Press": "בראן פרס",
	"Crater Sky": "קרייטר סקיי",
	"Al-Mayadeen": "אלמייאדין",
	"Baghdad Today": "בגדאד טודיי",
	"Rapid Response": "רפיד רספונס",
	"Fox News": "פוקס ניוז",
	"Al-Araby Al-Jadeed": "אלערבי אלגדיד",
	"Al-Akhbar": "אל־אחבאר",
	"South24": "סאות24",
	"Asharq News": "אשארק",
	AP: "AP",
	"Al Qahera News": "אלקאהרה",
	"Al-Mamlaka": "אלממלכה",
	Politico: "פוליטיקו",
	"Middle East Eye": "מידל איסט איי",
	Yemenat: "ימנת",
	Reuters: "רויטרס",
	CNBC: "CNBC",
	WSJ: "WSJ",
	"US media": "תקשורת אמריקנית",
	"Mohammed Abdulsalam": "מוחמד עבדאלסלאם",
	"Mohammed Ali al-Houthi": "מוחמד עלי אלחות׳י",
	Ansarollah: "אנצאראללה",
	Saba: "סבא",
	"Erem News": "ארם ניוז",
	"Energy press": "Energy press",
	"Shipping press": "Shipping press",
	"Ali Al-Sakani": "עלי אלסכאני",
	"Abdulqader al-Murtada": "עבדאלקאדר אלמרתצ׳א",
	"Asharq Al-Awsat": "אלשרק אלאוסט",
	Alhurra: "אלחרה",
	Okaz: "עוכאט׳",
	"Al-Watan": "אלותן"
};
var PLACE_AR = [
	[/باب المندب/g, "באב אלמַנדב"],
	[/الحديدة/g, "אלחודיידה"],
	[/الوازعية/g, "אלואזעיה"],
	[/المخا|المخاء/g, "אלמח׳א"],
	[/الحزم/g, "אלחַזְם"],
	[/الضالع/g, "אלדאלע"],
	[/الجوف/g, "אלג׳וף"],
	[/صنعاء/g, "צנעאא׳"],
	[/صعدة/g, "סעדה"],
	[/مأرب|مارب/g, "מאריב"],
	[/تعز/g, "תעז"],
	[/لحج/g, "לחג׳"],
	[/عدن/g, "עדן"],
	[/(?:^|[^\u0600-\u06FF])إب(?:$|[^\u0600-\u06FF])/g, "איב"],
	[/ذباب/g, "ד׳ובאב"],
	[/ميون/g, "מַיוּן"],
	[/حنيش/g, "חַניש"],
	[/كحبوب|كهبوب/g, "כַּהבּוּב"],
	[/حريب/g, "חריב"],
	[/مريس/g, "מֻרַיְס"],
	[/الخوخة/g, "אלח׳וחה"],
	[/حيس/g, "חֵיס"],
	[/البيضاء/g, "אלביידא"],
	[/شبوة/g, "שבְּוה"],
	[/حضرموت/g, "חצרמוות"],
	[/حجة/g, "חג׳ה"],
	[/الأغبرة|الاغبره|الأغبره|الاغبرة/g, "אלאע׳ברה"],
	[/المضاربه|المضاربة/g, "אלמצ׳ארבה"],
	[/الجبل الأسود/g, "אלג׳בל אלאסוד"],
	[/قحازة|قحازه/g, "קחאזה"],
	[/وادي عبيدة/g, "ואדי עבידה"],
	[/وادي ذَ?ن[هة]/g, "ואדי ד׳נה"],
	[/البلق الشرقي/g, "בַּלְק המזרחי"],
	[/مديرية الوادي/g, "נפת אלואדי"],
	[/الضريفة|مفرق الضريفة/g, "מפרק אלצ׳ריפה"],
	[/الحزمة/g, "אלחַזמה"],
	[/العلقمة/g, "אלעלקמה"],
	[/شريرة|شريره/g, "שרירה"],
	[/المنصورة/g, "אלמנצורה"],
	[/البوكرة|البوكره/g, "אלבּוכרה"],
	[/كمران/g, "כמראן"]
];
var PLACE_EN = [
	[/Bab al-?Mandab/gi, "באב אלמַנדב"],
	[/Hodeidah|Hudaydah/gi, "אלחודיידה"],
	[/Waziyah|al-?Wazia/gi, "אלואזעיה"],
	[/Mocha|Mokha|al-?Makha/gi, "אלמח׳א"],
	[/al-?Hazm/gi, "אלחַזְם"],
	[/Dhalea|al-?Dhale/gi, "אלדאלע"],
	[/Jawf|al-?Jawf/gi, "אלג׳וף"],
	[/Sana['’]?a/gi, "צנעאא׳"],
	[/Saada|Sa'dah/gi, "סעדה"],
	[/Marib|Ma'rib/gi, "מאריב"],
	[/Taiz/gi, "תעז"],
	[/Lahj/gi, "לחג׳"],
	[/Aden/gi, "עדן"],
	[/\bIbb\b/gi, "איב"],
	[/Mayun|Mayyun|Perim/gi, "מַיוּן"],
	[/Hanish/gi, "חַניש"],
	[/Harib/gi, "חריב"],
	[/Houthis?/gi, "החות׳ים"]
];
var SAUDI_TARGET_AR = [
	[/الرياض/g, "ריאד"],
	[/جدة/g, "גִ׳דַּה"],
	[/جازان|جيزان/g, "ג׳אזאן"],
	[/نجران/g, "נג׳ראן"],
	[/خميس مشيط/g, "ח׳מיס מושייט"],
	[/أبها/g, "עַבְּהַא"],
	[/ينبع/g, "יַנְבּוּע"],
	[/مكة|مكه/g, "מכה"],
	[/الطائف/g, "טאיף"],
	[/شرورة/g, "שרורה"]
];
var SAUDI_TARGET_EN = [
	[/Riyadh/gi, "ריאד"],
	[/Jeddah/gi, "גִ׳דַּה"],
	[/Jazan|Jizan/gi, "ג׳אזאן"],
	[/Najran/gi, "נג׳ראן"],
	[/Khamis Mushait|Khamis/gi, "ח׳מיס מושייט"],
	[/Abha/gi, "עַבְּהַא"],
	[/Yanbu/gi, "יַנְבּוּע"],
	[/Mecca|Makkah/gi, "מכה"],
	[/Taif|al-?Taif/gi, "טאיף"],
	[/Sharurah/gi, "שרורה"]
];
var PLACE_LL = {
	"באב אלמַנדב": [12.7, 43.47],
	"אלחודיידה": [14.8, 42.95],
	"אלואזעיה": [13.35, 43.55],
	"אלמח׳א": [13.32, 43.25],
	"אלחַזְם": [16.16, 44.78],
	"אלדאלע": [13.7, 44.73],
	"אלג׳וף": [16.72, 44.76],
	"צנעאא׳": [15.3694, 44.191],
	"סעדה": [16.94, 43.76],
	"מאריב": [15.47, 45.32],
	"תעז": [13.58, 44.02],
	"לחג׳": [13.05, 44.88],
	"עדן": [12.79, 45.02],
	"איב": [13.97, 44.18],
	"ד׳ובאב": [12.94, 43.41],
	"מַיוּן": [12.65, 43.414],
	"חַניש": [13.706, 42.724],
	"כַּהבּוּב": [12.85, 43.55],
	"אלאע׳ברה": [13.4, 43.48],
	"חריב": [14.93, 45.5],
	"מֻרַיְס": [13.85, 44.7],
	"אלח׳וחה": [13.81, 43.25],
	"חֵיס": [13.98, 43.33],
	"אלביידא": [13.99, 45.57],
	"שבְּוה": [14.55, 46.83],
	"חצרמוות": [15.55, 48.5],
	"חג׳ה": [15.69, 43.6],
	"אלאע׳ברה": [13.4, 43.48],
	"אלמצ׳ארבה": [13.15, 43.9],
	"אלג׳בל אלאסוד": [13.22, 43.92],
	"קחאזה": [13.18, 43.88],
	"ואדי ד׳נה": [15.42, 45.25],
	"בַּלְק המזרחי": [15.35, 45.22],
	"נפת אלואדי": [15.55, 45.35],
	"מפרק אלצ׳ריפה": [13.38, 43.52],
	"אלחַזמה": [15.48, 45.38],
	"אלעלקמה": [13.36, 43.5],
	"שרירה": [13.38, 43.52],
	"אלמנצורה": [13.28, 43.45],
	"אלבּוכרה": [13.3, 43.47],
	"כמראן": [15.35, 42.59],
	"מכה": [21.3891, 39.8579],
	"ג׳אזאן": [16.8892, 42.5511],
	"נג׳ראן": [17.4917, 44.1322],
	"ח׳מיס מושייט": [18.3, 42.73],
	"טאיף": [21.2703, 40.4158],
	"עַבְּהַא": [18.2164, 42.5053],
	"גִ׳דַּה": [21.4858, 39.1925],
	"יַנְבּוּע": [24.0231, 38.1899],
	"שרורה": [17.48, 47.12],
	"ריאד": [24.7136, 46.6753]
};
function uniq(arr) {
	const out = [];
	for (const x of arr) if (x && !out.includes(x)) out.push(x);
	return out;
}
function collectPlaces(pairs, text) {
	const found = [];
	for (const [re, he] of pairs) {
		re.lastIndex = 0;
		if (re.test(text) && he !== "החות׳ים") found.push(he);
	}
	return found;
}
function hePrep(prep, noun) {
	const n = String(noun || "").trim();
	if (!n) return prep;
	if ((prep === "ל" || prep === "ב" || prep === "כ") && n.startsWith("ה")) return prep + n.slice(1);
	if (prep === "מ" && n.startsWith("ה")) return "מ" + n;
	return prep + n;
}
function tidyDeskHe(s) {
	return String(s || "").replace(/להחות['׳]ים/g, "לחות׳ים").replace(/בהים האדום/g, "בים האדום").replace(/להים האדום/g, "לים האדום").replace(/בהים הערבי/g, "בים הערבי").replace(/להים הערבי/g, "לים הערבי").replace(/ההים האדום/g, "הים האדום").replace(/ההים הערבי/g, "הים הערבי").replace(/אלעמאליק(?:ה)?/g, "חטיבות הענקים").replace(/אלעמאלק(?:ה)?/g, "חטיבות הענקים").replace(/\s{2,}/g, " ").trim();
}
function yemenPlacesOf(text) {
	const stripped = text.replace(/(?:قوات|حكومة|سيطرة)\s*صنعاء/g, "الحوثيون").replace(/مأرب الجيش/g, " ");
	return uniq([...collectPlaces(PLACE_AR, stripped), ...collectPlaces(PLACE_EN, stripped)]).filter((p) => {
		if (p === "צנעאא׳" && /الأغبرة|لحج|المضاربه|تعز|الوازعية|كهبوب/.test(stripped)) return false;
		return true;
	});
}
function saudiTargetsOf(text) {
	if (!(/صاروخ|باليست|مسيّر|مسيرة|drone|missile|استهدف|قصف|غارة|שיגור|כטב|טיל|airstrike|strike|launch/i.test(text) && /على|نحو|باتجاه|target|towards|hit|struck|against|על |לעבר /i.test(text)) && !/מכה|Mecca|Makkah|ينبع|Yanbu|جازان|Jazan/i.test(text)) {
		if (!/صاروخ|باليست|مسيّر|مسيرة|drone|missile|استهدف|غارة|قصف/.test(text)) return [];
	}
	return uniq([...collectPlaces(SAUDI_TARGET_AR, text), ...collectPlaces(SAUDI_TARGET_EN, text)]);
}
function locate(places) {
	const seaish = /^(באב|מַיוּן|חַניש|הים)/;
	const land = places.filter((p) => !seaish.test(p));
	for (const p of land.length ? land : places) {
		const ll = PLACE_LL[p];
		if (ll) return {
			place: p,
			lat: ll[0],
			lng: ll[1]
		};
	}
	return null;
}
function countHits(text) {
	const killed = text.match(/(\d+)\s*(?:قتيلا?|شهيد|قتلى|killed|dead)/i) || text.match(/(?:قتل|استشهاد|מقتل)\s*(\d+)/i);
	const wounded = text.match(/(\d+)\s*(?:جريح|جرحى|wounded|injured)/i);
	const downed = text.match(/(?:أسقط|اسقاط|إسقاط|הפיל|downed|shot down)\s*(?:.*?(\d+))?/i) || text.match(/(\d+)\s*(?:مسيّر|مسيرة|drone)/i);
	return {
		killed: killed ? killed[1] : "",
		wounded: wounded ? wounded[1] : "",
		downed: downed && downed[1] ? downed[1] : ""
	};
}
var PHRASES = [
	[/اشتباكات دامية/g, "התכתשויות עקובות מדם"],
	[/اشتباكات عنيفة/g, "קרבות עזים"],
	[/اشتباكات/g, "התכתשויות"],
	[/هجوم حوثي مباغت/g, "התקפה חות׳ית פתאומית"],
	[/هجوم حوثي/g, "התקפה חות׳ית"],
	[/خطوط التماس/g, "קווי המגע"],
	[/افشال مؤامرة|إفشال مؤامرة/g, "הכשלת מזימה"],
	[/افشال محاولات|إفشال محاولات/g, "הכשלת ניסיונות"],
	[/افشال|إفشال/g, "הכשלה"],
	[/العميد سريع|يحيى السريع|يحيى سريع/g, "יחיא סריע"],
	[/قوات صنعاء/g, "כוחות החות׳ים"],
	[/الحوثيين|الحوثي|حوثي/g, "חות׳ים"],
	[/ألوية العمالقة|العمالقة الجنوبية|العمالقة/g, "חטיבות הענקים"],
	[/درع الوطن/g, "מגן המולדת"],
	[/حراس الجمهورية/g, "שומרי הרפובליקה"],
	[/المقاومة الوطنية/g, "ההתנגדות הלאומית"],
	[/طارق صالح/g, "טארק צאלח"],
	[/المجلس الانتقالي الجنوبي|المجلس الانتقالي/g, "המועצה המעברית הדרומית"],
	[/الجيش اليمني/g, "הצבא התימני"],
	[/القوات الموالية للسعودية/g, "כוחות נאמנים לסעודיה"],
	[/يستعيد مواقع/g, "משתלט מחדש על עמדות"],
	[/الطيران الحربي/g, "חיל האוויר"],
	[/يستهدف/g, "תוקף"],
	[/دبور السماء/g, "הכטב״ם «דבור אלסמא»"],
	[/يدخل المعركة/g, "נכנס ללחימה"],
	[/يضرب دفاعات/g, "פוגע בהגנות"],
	[/العاصمة المحتلة/g, "הבירה"],
	[/مسيرات جماهيرية|مسيرات/g, "עצרות"],
	[/ينھبون|ينهبون|نهب/g, "בוזזים"],
	[/منشآت طبية/g, "מתקנים רפואיים"],
	[/النازحين اليمنيين/g, "עקורים תימנים"],
	[/جيبوتي/g, "ג׳יבוטי"],
	[/الأمم المتحدة تطالب/g, "האו״ם דורש"],
	[/مليون دولار/g, "מיליון דולר"],
	[/لدعم/g, "לתמיכה ב"],
	[/صفقة تسليح/g, "עסקת נשק"],
	[/تنسيق سعودي/g, "תיאום סעודי"],
	[/برعاية أمريكية/g, "בחסות אמריקאית"],
	[/مساعد وزير الدفاع/g, "סגן שר ההגנה"],
	[/قائد عسكري/g, "מפקד צבאי"],
	[/نداء استغاثة/g, "קריאת מצוקה"],
	[/التحالف/g, "הקואליציה"],
	[/الرئاسي/g, "מועצת הראשות"]
];
function glossHead(text) {
	let s = String(text || "").replace(/\s+/g, " ").split(/https?:\/\//i)[0].slice(0, 280);
	if (s.length < 28) return null;
	let hits = 0;
	for (const [re, he] of PHRASES) {
		re.lastIndex = 0;
		if (!re.test(s)) continue;
		hits += 1;
		re.lastIndex = 0;
		s = s.replace(re, he);
	}
	if (hits < 1) return null;
	for (const [re, he] of PLACE_AR) {
		re.lastIndex = 0;
		s = s.replace(re, he);
	}
	s = s.replace(/[\u0600-\u06FF\u064B-\u065F]+/g, " ");
	s = s.replace(/[#_/*|]+/g, " ").replace(/\s+/g, " ").trim();
	s = s.split(/[.!?؟]/)[0].trim();
	if ((s.match(/[\u0590-\u05FF׳״]{2,}/g) || []).length < 4 || s.length < 22 || s.length > 180) return null;
	if (/^\d/.test(s) || /^תוקף/.test(s)) return null;
	if (s && !/[.!?]$/.test(s)) s += ".";
	return s;
}
function detectAction(text) {
	const t = text;
	if (/cancel(?:led|s)? (?:some )?(?:oil|crude)|oil shipments|נפט.{0,40}ביטל|ביטול משלוחי נפט|Yanbu.{0,40}(?:suspend|halt)|East-West Pipeline|צינור מזרח.?מערב|Aramco.{0,50}(?:cancel|halt|reroute)|Brent.{0,20}\$|Suez Canal.{0,40}(?:oil|tanker)|תעלת סואץ|loadings cut|shipping.{0,30}Bab/i.test(t) && !/صاروخ|باليست|اشتباكات عنيفة|غارة جوية/.test(t.slice(0, 80))) return "economy";
	if (/نازح|displaced|فروا إلى جيبوتي|112,?000/.test(t) && !/غارة|صاروخ|اشتباكات عنيفة/.test(t.slice(0, 80))) return "statement";
	if (/أكذوبة|فضح أكذوبة|شקר הפגיעה|أكذوبة استهداف/.test(t) && /مكة|מכה/.test(t)) return "statement";
	if (/مساعد وزير الدفاع|إلقاء السلاح/.test(t) && !/جبهة|غارة/.test(t)) return "statement";
	if (/حادثة.{0,40}ميل.{0,20}بحري|حادثة بحرية|UKMTO|vessel incident|tanker|سفينة|ناقلة/.test(t) && /عدن|بحر|red sea|miles/i.test(t)) return "vessel";
	if (/ميناء|port|ينبع|أرامكو/.test(t) && /استهدف|صاروخ|مسيّر|قصف|hit|struck/.test(t)) return "port";
	if (/أسقط|اسقاط|إسقاط|הפיל|intercept|shot down|downed/.test(t) && /مسيّر|مسيرة|درون|drone|صاروخ|כטב/.test(t)) return "intercept";
	if (/دبور السماء|SKYWASP|شيبا إنتل|شيبا انتل/.test(t)) return "drone";
	const ground = /اشتباكات|معارك|مواجهات|هجوم حوثي/.test(t);
	const air = /غارة|غارات|قصف جوي|الطيران الحربي|airstrike/.test(t);
	if (ground && air) return "clash";
	if (air) return "airstrike";
	if (/صاروخ|باليست|missile|ballistic/.test(t)) return "missile";
	if (/مسيّر|مسيرة|درون|drone|UAV|כטב|أبو صقر/.test(t)) return "drone";
	if (/يستعيد مواقع|تستعيد مواقع|استعاد.? مواقع|recapture|retake|שחזר עמדות|השתלטות מחדש/.test(t)) return "recapture";
	if (ground || /جبهة .{0,18}|clash|battles?|fighting|קרבות/.test(t)) return "clash";
	if (/سيطرة .+ على|سيطرت? (?:صنعاء|الحوث)|after seizing|השתלט/.test(t) && !ground) return "capture";
	if (/إفشال محاول|إفشال|افشال|foiled|أحبط|הכשיל/.test(t)) return "foil";
	if (/ينهب|نهب|loot|שדד/.test(t)) return "loot";
	if (/مسيرات جماهيرية|حشود|rally|התכנסות/.test(t)) return "rally";
	if (/صفقة|هدنة|مفاوض|deal|talks|ceasefire|הפוגה|דיפלומ|استقدام مقاتلين|طلبا إلى سوريا|50 مليون/.test(t)) return "diplomacy";
	return "statement";
}
function actionToType(a) {
	if (a === "clash" || a === "capture" || a === "recapture") return "combat";
	if (a === "airstrike" || a === "missile" || a === "drone" || a === "intercept") return "strike";
	if (a === "port") return "port";
	if (a === "vessel") return "vessel";
	if (a === "economy") return "economy";
	return "statement";
}
function detectSpeaker(text) {
	if (/حزام الأسד|حزام الاسد|Hezam al-?Asad|Hazam al-?Asad|hezamalasad/i.test(text)) return "חזאם אלאסד";
	if (/عبدالقادر المرتضى|عبد القادر المرتضى|Al-?Murtad/i.test(text)) return "עבדאלקאדר אלמרתצ׳א";
	if (/يحيى السريع|يحيى سريع|العميد سريع|Yahya Saree/i.test(text)) return "יחיא סריע";
	if (/عبد الملك الحوثي|عبدالملك/i.test(text)) return "עבד אלמלכ אלחות׳י";
	if (/محمد عبد السلام|محمد عبدالسلام/i.test(text)) return "מוחמד עבדאלסלאם";
	if (/محمد علي الحوثي/i.test(text)) return "מוחמד עלי אלחות׳י";
	if (/نبيل شمسان/i.test(text)) return "נביל שמסאן";
	if (/أبوراس|أبو راس|Aburas/i.test(text)) return "עבד אלוואחד אבוראס";
	if (/ترامب|Trump/i.test(text)) return "טראמפ";
	return "";
}
function detectUnits(text) {
	const u = [];
	if (/درع الوطن|Homeland Shield/i.test(text)) u.push("מגן המולדת");
	if (/عمالقة|العمالقة|Giant Brigades/i.test(text)) u.push("חטיבות הענקים");
	if (/المقاومة الشعبية/.test(text)) u.push("ההתנגדות העממית");
	if (/حراس الجمهورية|Republican Guard/i.test(text)) u.push("שומרי הרפובליקה");
	if (/المقاومة الوطنية|طارق صالح|Tareq Saleh/i.test(text)) u.push("כוחות טארק צאלח");
	if (/الانتقالي|STC\b/.test(text)) u.push("המועצה המעברית הדרומית");
	if (/القبائل|مسلحين قبلي/.test(text)) u.push("לוחמים שבטיים");
	return u;
}
function sides(source, text, lean) {
	const houthiSrc = /Ali Bk|Sabereen|Mihwar|Masirah|Saree|^YPA$|Mayadeen|Baghdad|Hazam|Murtada|Abdulsalam|Ansarollah|^Saba$|al-Houthi/i.test(source) || lean === "houthi";
	const govSrc = /Hadath|Arabiya|Arab News|SPA|September|Asharq|Sakani|Okaz|Al-Watan/i.test(source) || lean === "gov";
	return {
		houthiSrc,
		govSrc,
		houthis: /الحوث|حوثي|أنصار الله|قوات صنعاء|houthi|חות׳/i.test(text) || houthiSrc,
		gov: /الموالية|الحكومة الشرعي|الجيش الوطني|الجيش اليمني|plc|forces loyal/i.test(text) || !houthiSrc && govSrc && /army|military|forces/i.test(text),
		saudiAsEnemy: /العدو السعودي|السعود|سعود|للسعودية|Saudi/i.test(text)
	};
}
function wherePhrase(places, saudi) {
	const all = uniq([...places, ...saudi]).filter((p) => p !== "תימן" && p !== "סעודיה");
	if (!all.length) return "";
	if (all.length === 1) return all[0];
	if (all.length === 2) return `${all[0]} ו${all[1]}`;
	return `${all.slice(0, -1).join(", ")} ו${all[all.length - 1]}`;
}
function zoneOf(places) {
	const b = places.join(" ");
	if (/לחג׳|אלדאלע|עדן|אלאע׳ברה|אלמצ׳ארבה|אלג׳בל|קחאזה/.test(b)) return "שבדרום המדינה";
	if (/תעז|אלואזעיה|אלמח׳א|כַּהבּוּב|באב|ד׳ובאב|מפרק|שרירה|אלעלקמה/.test(b)) return "שבדרום־מערב המדינה";
	if (/אלחודיידה|אלח׳וחה|חֵיס|כמראן/.test(b)) return "בחוף הים האדום";
	if (/מאריב|אלחַזְם|ואדי|בַּלְק|אלחַזמה|נפת אלואדי/.test(b)) return "שבצפון־מזרח המדינה";
	if (/סעדה|אלג׳וף|חג׳ה/.test(b)) return "שבצפון המדינה";
	if (/צנעאא׳/.test(b)) return "במרכז המדינה";
	return "";
}
function inMarhav(places) {
	const named = places.filter((p) => p && p !== "תימן");
	if (!named.length) return "בתימן";
	const zone = zoneOf(named);
	const mar = named.length === 1 ? `במרחב ${named[0]}` : named.length === 2 ? `במרחבי ${named[0]} ו${named[1]}` : `במרחבי ${named.slice(0, 2).join(", ")} ו${named[2]}`;
	return zone ? `${mar} ${zone}` : mar;
}
function destZoneOf(place) {
	if (/ריאד/.test(place)) return "שבמרכז סעודיה";
	if (/ג׳אזאן|נג׳ראן|שרורה/.test(place)) return "שבדרום סעודיה";
	if (/ח׳מיס|עַבְּהַא|טאיף/.test(place)) return "שבדרום־מערב סעודיה";
	if (/יַנְבּוּע|גִ׳דַּה|מכה/.test(place)) return "שבמערב סעודיה";
	return zoneOf([place]);
}
function launchWeapon(action, text) {
	if (action === "drone") return "כטב״ם";
	if (/باليست|ballistic|בליסט/.test(text)) return "טיל בליסטי";
	return "טיל";
}
function launchOrigin(text, yPlaces, dests) {
	const cands = yPlaces.filter((p) => !dests.includes(p));
	if (!cands.length) return "";
	if (/من |from /i.test(text)) return cands[0];
	const site = cands.find((p) => /אלמח׳א|אלחודיידה|סעדה|ד׳ובאב|כַּהבּוּב/.test(p));
	if (site) return site;
	if (dests.some((d) => /סעודיה/.test(destZoneOf(d)))) return cands.find((x) => x !== "צנעאא׳") || "";
	return "";
}
function launchLine(weapon, origin, dests, bit) {
	const dest = dests[0] || "";
	const extra = dests.length === 2 ? ` ו${dests[1]}` : dests.length > 2 ? `, ${dests[1]} ו${dests[2]}` : "";
	const zone = dest ? destZoneOf(dest) : "";
	const toward = dest ? `לעבר ${dest}${extra}${zone ? ` ${zone}` : ""}` : "";
	const from = origin ? `מ${origin} ` : "";
	return `${toward ? `דווח על שיגור ${weapon} ${from}${toward}` : origin ? `דווח על שיגור ${weapon} מ${origin}` : `דווח על שיגור ${weapon}`}${bit}.`.replace(/\s{2,}/g, " ");
}
function quoteLine(speaker, words) {
	const w = words.replace(/^[\s:־–—]+/, "").trim();
	if (!speaker) return w;
	if (w.startsWith(speaker)) return w;
	return `${speaker}: ${w}`;
}
function whenHe(text) {
	if (/فجر|قبل الفجر/.test(text)) return "עם שחר";
	if (/صباح اليوم|هذا الصباح/.test(text)) return "בבוקר";
	if (/خلال الـ?\s*24|الـ24 ساعة/.test(text)) return "ביממה האחרונה";
	if (/الساعات (?:القليلة )?الماضية/.test(text)) return "בשעות האחרונות";
	return "";
}
function isOffTopic(text) {
	const t = text;
	if (/سجين|قصاص|جنبية|مفتي|أولياء الدم|كرة القدم|مباراة/.test(t) && !/جبهة|صاروخ|غارة|اشتباك|مسيّر/.test(t)) return true;
	if (/مسيرات جماهيرية|مسيرات|تظاهرات|مليونية|خروج شعبي|مسيرة حاشدة/.test(t) && !/صاروخ|غارة|جبهة|مسيّر|استهدف|اشتباك|قصف/.test(t)) return true;
	return false;
}
function isVagueHe(summary) {
	return /בלי פירוט קינטי|בלי תיאור קינטי ברור|עדכון מדיני או הצהרתי על תימן|^מהלך מדיני סביב תימן|על יעדים בתימן\.?$|כוחות בשטח\.?$|^דיווח על כטב״ם בתימן|^קרבות עזים בתימן/.test(summary);
}
function isGarbageHe(summary) {
	const s = summary.trim();
	if (!s) return true;
	if (/^[:\s«»־–—]+/.test(s)) return true;
	if (/«\s*»/.test(s)) return true;
	if (/^מהלך מדיני/.test(s)) return true;
	if (/קרבות בהשתתפות החות׳ים\.?$/.test(s)) return true;
	if (/^תימן: /.test(s) && s.length < 40) return true;
	if (/עצרות/.test(s) && !/ירי|תקיפה|הרוג|טיל/.test(s)) return true;
	if ((s.match(/חות׳ים/g) || []).length >= 3) return true;
	const words = s.match(/[\u0590-\u05FF׳״]{2,}/g) || [];
	const uniqw = new Set(words);
	if (words.length >= 3 && uniqw.size <= 2) return true;
	if (words.length >= 5 && uniqw.size <= 3) return true;
	if (s.length < 28) return true;
	return false;
}
function trySpecial(text, heSrc, source = "") {
	const when = whenHe(text);
	const isHazam = /Hazam|חזאם|hezam|حزام/.test(source + heSrc) || /حزام الأسد|حزام الاسد/.test(text);
	if (isHazam && /لن تمر دون رد/.test(text)) return {
		summary: quoteLine("חזאם אלאסד", "לא יעבור בלי תגובה. על התוקפן יוחזר הגלגל."),
		body: `לפי ${heSrc}: חזאם אלאסד, חבר הלשכה המדינית של אנצאר אללה, מצטט את אזהרת יחיא סריע אחרי הטענה על הכשלת ניסיונות סעודיים בצנעאא׳.`,
		places: ["צנעאא׳"],
		type: "statement"
	};
	if (isHazam && /أكذوبة استهداف مكة|البهتان السعودي|معادلة الحصار/.test(text)) return {
		summary: quoteLine("חזאם אלאסד", "עצרת בצנעאא׳ נגד הטענה הסעודית על ירי למכה, וקריאה ל«מצור מול מצור»."),
		body: `לפי ${heSrc}: חזאם אלאסד מפרסם מהעצרת במדאן אלסבעין בצנעאא׳ — תמיכה בכוחות, דחיית הטענה הסעודית על ירי למכה, וסיסמת «מצור מול מצור».`,
		places: ["צנעאא׳"],
		type: "statement"
	};
	if (isHazam && /ترليون|صفقات.{0,40}السعود/.test(text)) return {
		summary: quoteLine("חזאם אלאסד", "העסקאות הסעודיות עם ארה״ב הן מס־חסות, לא קניות נשק."),
		body: `לפי ${heSrc}: חזאם אלאסד טוען שהטריליונים שריאד משלמת לוושינגטון הם «ג׳זיה» של חסות, לא עסקאות נשק אמיתיות — ומנגיד לכך ייצור עצמי של טילים וכטב״מים בתימן.`,
		places: [],
		type: "statement"
	};
	if (isHazam && /المخا/.test(text) && /غزة|محررة/.test(text)) return {
		summary: quoteLine("חזאם אלאסד", "אלמח׳א «המשוחררת» — אחרי שנים שסעודיה השתיקה גם הזדהות עם עזה."),
		body: `לפי ${heSrc}: חזאם אלאסד מפרסם מאלמח׳א ואומר שאחרי שליטה סעודית ארוכה אפשר שוב להזדהות פומבית עם עזה.`,
		places: ["אלמח׳א"],
		type: "statement"
	};
	if (isHazam && /إنتاج.{0,30}أسلح|صواريخ بالستية/.test(text) && /ترليون|أمريك/.test(text)) return {
		summary: quoteLine("חזאם אלאסד", "הכוחות בתימן מייצרים טילים, כטב״מים ונ״מ — בלי טריליונים לאמריקה."),
		body: `לפי ${heSrc}: חזאם אלאסד טוען לייצור עצמי של בליסטיים, שיוט, היפר־סוניים, כטב״מים, נ״מ ואמצעי ים, בניגוד לרכש הסעודי מארה״ב.`,
		places: [],
		type: "statement"
	};
	if (/دبور السماء|SKYWASP|شيبا/.test(text) && /صنعاء/.test(text)) return {
		summary: `${when || "עם שחר"}: כוחות ממשלתיים טוענים שתקפו הגנות ומחסני חות׳ים בהרים סביב צנעאא׳. לפי שיבא זה כנראה כטב״ם SKYWASP («דבור אלסמא») בשימוש קרבי ראשון — לא תקיפה של הערב.`,
		body: `לפי ${heSrc}: פיצוצים ותנועת כטב״מים דווחו בצנעאא׳ ${when || "עם שחר יום שישי"}. מקור צבאי לשיבא טוען לסדרת מהלומות על נ״מ, מחסנים ויכולות טילים/כטב״ם בהרים סביב הבירה. שיבא מזהה את הכלי כ־SKYWASP («דבור אלסמא»), כטב״ם תקיפה ארוך־טווח בשותפות סעודית־אמריקאית, ואומרת שזו כנראה כניסתו הראשונה ללחימה.`,
		places: ["צנעאא׳"],
		type: "strike"
	};
	if (/أبو صقر|ابو صقر/.test(text) && /كهبوب|كحبوب/.test(text)) return {
		summary: `כטב״ם ממשלתי הרג לפי מקורות שדה את המפקד החות׳י אבו צקר אלקפר ושישה ממלוויו בחזית כַּהבּוּב במערב תעז.`,
		body: `לפי ${heSrc}: מקורות שדה טוענים שמפקד חות׳י המכונה אבו צקר אלקפר ושישה ממלוויו נהרגו בפגיעת כטב״ם ממשלתי בחזית כַּהבּוּב, המשקיפה על באב אלמַנדב במערב תעז. הגופות הועברו לפי אותה ידיעה לבית החולים בת׳ורה באיב.`,
		places: ["כַּהבּוּב"],
		type: "strike"
	};
	if (/(?:أكثر من\s*)?9\d\s*(?:حوث|عنصر)/.test(text) && /الوازعية|تعز/.test(text)) {
		const k = text.match(/مصرع\s*(\d+)/) || text.match(/(\d+)\s*عنصراً?\s*حوث/);
		const w = text.match(/إصابة أكثر من\s*(\d+)/) || text.match(/أكثر من\s*(\d+)\s*آخر/);
		const killed = k ? k[1] : "30";
		const wounded = w ? w[1] : "60";
		return {
			summary: `מקור צבאי בתעז טוען: ביממה האחרונה נהרגו ${killed} לוחמים חות׳ים ונפצעו יותר מ־${wounded} באלואזעיה, עם הפצצות סביב מפרק אלצ׳ריפה.`,
			body: `לפי ${heSrc}: מקור בגיזרת תעז טוען שלחימה והפצצות באלואזעיה, בעיקר סביב מפרק אלצ׳ריפה, הסבו לחות׳ים כ־${killed} הרוגים ויותר מ־${wounded} פצועים ביממה. לפי אותה טענה הושמדו גם כלים משוריינים.`,
			places: ["אלואזעיה"],
			type: "combat"
		};
	}
	if (/نداء استغاثة|الأسلحة الشخصية/.test(text) && /تعز|الحجرية/.test(text)) return {
		summary: `מפקד גזרת אלחֻגַ׳ריה בתעז קורא לראשות ולקואליציה לציוד כבד — לדבריו הלוחמים בחזיתות אלכדחה, שרירה וכַּהבּוּב נלחמים בעיקר בנשק אישי.`,
		body: `לפי ${heSrc}: תא״ל אמין אלאכחלי, מפקד גזרת אלחֻגַ׳ריה, פנה לרשאד אלעלימי, לקואליציה ולפיקוד הזירה הרביעית בבקשה לתותחים, טנקים וציוד כבד. לדבריו החזיתות אלכַּדְחַה, גִ׳רדאד בני עמר, אלע׳יל, שרירה, כַּהבּוּב ומַקְבַּנַה נלחמות מול החות׳ים כמעט רק בנשק אישי.`,
		places: ["תעז"],
		type: "statement"
	};
	if (/مساعد وزير الدفاع|سمير الحاج/.test(text) && /إلقاء السلاح|التعايش/.test(text)) return {
		summary: `סגן שר ההגנה סמיר אלחאג׳ אלצַבּרי: לחות׳ים נותר רק להניח נשק ולהיכנס לפוליטיקה.`,
		body: `לפי ${heSrc}: בריאיון לאינדפנדנט ערביה אמר תא״ל סמיר אלחאג׳ אלצַבּרי, סגן שר ההגנה לשיתוף פעולה בין־לאומי, שהדרך היחידה לחות׳ים היא להניח נשק ולהשתלב כמפלגה. לדבריו ההחלטות מתקבלות בטהראן.`,
		places: [],
		type: "statement"
	};
	if (/112,?000|أكثر من 112/.test(text) && /نازح|displaced/.test(text)) return {
		summary: `יותר מ־112 אלף עקורים מהלחימה בתימן; אלפים הגיעו לג׳יבוטי.`,
		body: `לפי ${heSrc}: דיווח הומניטרי על יותר מ־112 אלף עקורים פנימיים מהלחימה הנוכחית, ועל אלפים שהגיעו לג׳יבוטי.`,
		places: [],
		type: "statement"
	};
	if (/50 مليون/.test(text) && /نازح|جيبوتي|أمم/.test(text)) return {
		summary: `האו״ם מבקש 50 מיליון דולר לסיוע לעקורים תימנים בג׳יבוטי.`,
		body: `לפי ${heSrc}: האו״ם קורא לגיוס כ־50 מיליון דולר לתמיכה בעקורים תימנים שהגיעו לג׳יבוטי.`,
		places: [],
		type: "statement"
	};
	if (/ترامب|Trump/.test(text) && /صفقة|محادثات|deal|talks/.test(text)) return {
		summary: `טראמפ: החות׳ים רוצים עסקה — ויש שיחות איתם.`,
		body: `לפי ${heSrc}: טראמפ אמר שהחות׳ים מעוניינים בעסקה ושמתנהלות איתם שיחות.`,
		places: [],
		type: "statement"
	};
	if (/وادي ذَ?ن[هة]|البلق الشرقي/.test(text) && /مأرب/.test(text)) return {
		summary: `דווח על עימותים בין כוחות ממשלתיים לחות׳ים במרחבי ואדי ד׳נה ובַּלְק המזרחי שבצפון־מזרח המדינה, ובמקביל התכתשות שבטית־ביטחונית בנפת אלואדי עם שני הרוגים.`,
		body: `לפי ${heSrc}: שני מוקדים במאריב. בשטח — התקפות חות׳ים על ואדי ד׳נה ובַּלְק המזרחי שכוחות ממשלתיים טוענים שהדפו, עם ירי ארטילרי והפצצות על ריכוזים. במקביל התכתשות בין ביטחון למזוינים שבטיים בנפת אלואדי אחרי פגיעות בציר האספקה באלחַזמה — שני הרוגים ופצועים, ואז רגיעה חלקית אחרי תיווך.`,
		places: ["מאריב"],
		type: "combat"
	};
	if (/العميد سريع|يحيى السريع|يحيى سريع/.test(text) && /افشال|إفشال/.test(text)) {
		const daesh = /داعش|ايسيس|ISIS/.test(text);
		return {
			summary: quoteLine("יחיא סריע", `הכשלנו ניסיונות סעודיים בצנעאא׳${daesh ? " — בסגנון דאעשי" : ""}. זה לא יעבור בלי תגובה.`),
			body: `לפי ${heSrc}: תא״ל יחיא סריע, דובר כוחות צנעאא׳, מסר שהכשילו ניסיונות שמיוחסים לסעודיה בבירה${daesh ? ", וכינה אותם בסגנון דאעשי" : ""}. לא פורסמו יעדים, שיטה או נפגעים.`,
			places: ["צנעאא׳"],
			type: "statement"
		};
	}
	return null;
}
/** Essence in the teaser; full desk formulation in the body. Never dump source language. */
function heDigest(source, text, lean = "") {
	const heSrc = SOURCE_HE[source] || source;
	const special = trySpecial(text, heSrc, source);
	if (special) return special;
	const action = detectAction(text);
	const type = actionToType(action);
	const yPlaces = yemenPlacesOf(text).slice(0, 3);
	const sTargets = saudiTargetsOf(text);
	const speaker = detectSpeaker(text) || (/Hazam/i.test(source) ? "חזאם אלאסד" : "") || (/Murtada/i.test(source) ? "עבדאלקאדר אלמרתצ׳א" : "") || (/Sakani/i.test(source) ? "עלי אלסכאני" : "") || (/Abdulsalam/i.test(source) ? "מוחמד עבדאלסלאם" : "") || (/al-Houthi/i.test(source) ? "מוחמד עלי אלחות׳י" : "") || (/Yahya Saree/i.test(source) ? "יחיא סריע" : "");
	const units = detectUnits(text);
	const { houthiSrc, houthis, gov, saudiAsEnemy } = sides(source, text, lean);
	const counts = countHits(text);
	const loc = wherePhrase(yPlaces, sTargets) || "תימן";
	let actor = "";
	if (action === "recapture") actor = "כוחות הממשלה הלגיטימית";
	else if (units.length && (action === "clash" || action === "capture")) actor = units.join(" ו");
	else if (speaker && action !== "clash") actor = speaker;
	else if (houthiSrc || houthis) actor = "החות׳ים";
	else if (gov) actor = "כוחות הממשלה הלגיטימית";
	const vs = units.some((u) => /ענקים|מגן המולדת|התנגדות|שבטי|טארק/.test(u)) && /قوات صنعاء|الحوث|Houthi/.test(text) ? " מול החות׳ים" : (action === "clash" || action === "capture" || action === "recapture") && (houthis || houthiSrc) && (gov || saudiAsEnemy) ? " מול כוחות נאמנים לסעודיה" : "";
	const countBit = [
		counts.killed ? `${counts.killed} הרוגים` : "",
		counts.wounded ? `${counts.wounded} פצועים` : "",
		counts.downed ? `${counts.downed} כטב״מים שהופלו` : ""
	].filter(Boolean).join(", ");
	let summary = "";
	let bodyCore = "";
	switch (action) {
		case "clash": {
			const where = inMarhav(yPlaces);
			const bit = countBit ? ` (${countBit})` : "";
			const houthiPush = /هجوم حوثي|هجوم مباغت/.test(text);
			const other = vs.replace(/^ מול /, "") || "כוחות ממשלתיים";
			const left = actor && actor !== "החות׳ים" ? actor : "החות׳ים";
			const right = left === "החות׳ים" ? other : "החות׳ים";
			if (houthiPush) {
				summary = `דווח על התקפה חות׳ית על קווי מגע ${where}${bit}; כוחות ממשלתיים טוענים שהדפו.`;
				bodyCore = `דווח על התקפה חות׳ית על קווי המגע ${where}${bit}.`;
			} else {
				summary = `דווח על עימותים בין ${left} ${hePrep("ל", right)} ${where}${bit}.`;
				bodyCore = `דווח על לחימה בין ${left} ${hePrep("ל", right)} ${where}${bit}.`;
			}
			break;
		}
		case "capture":
			summary = `דווח על השתלטות ${actor || "כוחות"} על שטח ${inMarhav(yPlaces)}${countBit ? ` (${countBit})` : ""}.`;
			bodyCore = `לפי המקור ${actor || "הכוחות"} השתלטו על אזורים ${inMarhav(yPlaces)}${countBit ? `; ${countBit}` : ""}.`;
			break;
		case "recapture":
			summary = `דווח על השתלטות מחדש של כוחות ממשלתיים על שטח ${inMarhav(yPlaces)}.`;
			bodyCore = `נטען שכוחות ממשלתיים השתלטו מחדש על שטח ${inMarhav(yPlaces)}.`;
			break;
		case "airstrike": {
			const againstHouthis = /للحوث|على الحوث|ضد الحوث|against (?:the )?Houthis|يستهدف.{0,40}حوث/.test(text);
			const bit = countBit ? ` (${countBit})` : "";
			const where = inMarhav(uniq([...yPlaces, ...sTargets]));
			summary = againstHouthis ? `דווח על תקיפה אווירית על מוצבי חות׳ים ${where}${bit}.` : `דווח על תקיפה אווירית ${where}${bit}.`;
			bodyCore = summary;
			break;
		}
		case "missile":
		case "drone": {
			const weapon = launchWeapon(action, text);
			const destList = sTargets.slice(0, 3);
			const yemenDest = !destList.length ? yPlaces.slice(0, 2) : [];
			const allDest = destList.length ? destList : yemenDest;
			summary = launchLine(weapon, launchOrigin(text, yPlaces, allDest), allDest, countBit ? ` (${countBit})` : "");
			bodyCore = summary;
			break;
		}
		case "intercept":
			summary = quoteLine(speaker || actor || "הגנה אווירית", `הופל כטב״ם${yPlaces.length ? ` ${inMarhav(yPlaces)}` : ""}${countBit ? ` (${countBit})` : ""}.`);
			bodyCore = `נטען שהופל כטב״ם${yPlaces.length ? ` ${inMarhav(yPlaces)}` : ""}${countBit ? ` (${countBit})` : ""}.`;
			break;
		case "port":
			summary = `דווח על פגיעה בנמל ${inMarhav(yPlaces)}${countBit ? ` (${countBit})` : ""}.`;
			bodyCore = summary;
			break;
		case "vessel":
			summary = `דווח על תקרית ימית ${yPlaces.length ? inMarhav(yPlaces) : "בים האדום"}${countBit ? ` (${countBit})` : ""}.`;
			bodyCore = summary;
			break;
		case "foil": {
			const daesh = /داعش|ايسيس|داعشي/.test(text);
			summary = speaker ? quoteLine(speaker, `הכשלנו ניסיונות${saudiAsEnemy ? " סעודיים" : ""} ${inMarhav(yPlaces)}${daesh ? " — בסגנון דאעשי" : ""}. זה לא יעבור בלי תגובה.`) : `דווח על טענה חות׳ית להכשלת ניסיונות${saudiAsEnemy ? " סעודיים" : ""} ${inMarhav(yPlaces)} — בלי יעדים או שיטה.`;
			bodyCore = speaker ? `${speaker} מסר שהכשילו ניסיונות${saudiAsEnemy ? " שמיוחסים לסעודיה" : ""} ב${loc}, בלי פירוט על טיב הפעולה או היעדים.` : `נטען שהוכשל ניסיון ב${loc}; המקור לא פירט יעדים או שיטה.`;
			break;
		}
		case "loot":
			summary = `דווח על ביזה או השתלטות חות׳ית על מתקנים ${inMarhav(yPlaces)}.`;
			bodyCore = `המקור מייחס לחות׳ים ביזה או השתלטות על מתקנים ${inMarhav(yPlaces)}.`;
			break;
		case "rally":
			summary = `עצרת חות׳ית ב${loc}${/مكة/.test(text) ? " — דחיית הטענה הסעודית על ירי למכה" : " בתמיכה בכוחות"}.`;
			bodyCore = `דווח על עצרות ב${loc} בתמיכה בכוחות צנעאא׳.`;
			break;
		case "diplomacy":
			if (/استقدام مقاتلين|مقاتلين للقتال|fighters from Syria|طلب.{0,30}سوريا/.test(text)) {
				const refused = /رفض|רفضت|refused|סירב/.test(text);
				summary = `נטען שסעודיה ביקשה לוחמים מסוריה נגד החות׳ים${refused ? " — וסוריה סירבה" : ""}.`;
				bodyCore = `לפי המקור סעודיה פנתה לסוריה בבקשה ללוחמים לחזית מול החות׳ים${refused ? ", וסוריה דחתה" : ""}.`;
				break;
			}
			if (speaker) {
				summary = quoteLine(speaker, loc && loc !== "תימן" ? `התייחסות מדינית ללחימה ב${loc}.` : "התייחסות מדינית ללחימה בתימן.");
				bodyCore = `${speaker} מסר התייחסות מדינית לתימן.`;
				break;
			}
			summary = "";
			bodyCore = "";
			break;
		case "economy":
			if (/cancel|ביטל|ביטול|cancell/i.test(text) && /oil|crude|נפט|shipment|משלוח/i.test(text)) {
				summary = "סעודיה ביטלה משלוחי נפט לאירופה אחרי שיבושים בים האדום וביַנְבּוּע.";
				bodyCore = "סעודיה הודיעה ללקוחות באירופה על ביטול חלק ממשלוחי הנפט המתוכננים, על רקע פגיעות בצינור מזרח־מערב, עצירת טעינות ביַנְבּוּע ולחץ חות׳י על נתיב באב אלמַנדב.";
			} else if (/pipeline|צינור|East-West/i.test(text)) {
				summary = "פגיעות בצינור מזרח־מערב ובנתיב יַנְבּוּע מצמצמות את יצוא הנפט הסעודי.";
				bodyCore = "דיווחים על פגיעה בצינור מזרח־מערב ועל עצירת טעינות ביַנְבּוּע — נתיב היצוא הסעודי לים האדום — עם השפעה על מחירים ועל משלוחים לאירופה ולאסיה.";
			} else if (/Suez|תעלת סואץ|shipping|tanker|מכלית|ספנות|Bab el-?Mand/i.test(text)) {
				summary = "השיט בים האדום ובבאב אלמַנדב ממשיך להיפגע — נפט, מכלית ותעלת סואץ.";
				bodyCore = "דיווח על השפעת הלחימה על נתיבי השיט: באב אלמַנדב, הים האדום ותעלת סואץ, כולל ירידה בטעינות נפט סעודיות והסטת מכלית.";
			} else if (/Trump|Washington|ארה״ב|US |America/i.test(text)) {
				summary = "וושינגטון והעימות בתימן: דיווח מדיני־אנרגטי חדש.";
				bodyCore = "דיווח על מעורבות או עמדה אמריקאית סביב הלחימה בתימן, נתיבי הים האדום או יצוא הנפט הסעודי.";
			} else if (/Egypt|מצרים|Suez/i.test(text)) {
				summary = "מצרים ותעלת סואץ ברקע הלחימה בים האדום.";
				bodyCore = "דיווח על השפעת העימות בתימן על מצרים, תעלת סואץ או השיט בים האדום.";
			} else {
				summary = "דיווח כלכלי־אנרגטי על השפעת הלחימה בתימן על נפט ושיט.";
				bodyCore = "דיווח על השלכות העימות — נפט סעודי, יצוא, שיט בים האדום או תעלת סואץ.";
			}
			break;
		default: {
			const glossed = glossHead(text);
			if (glossed && !isVagueHe(glossed)) {
				summary = glossed;
				bodyCore = glossed;
			} else {
				summary = "";
				bodyCore = "";
			}
		}
	}
	summary = tidyDeskHe(summary.replace(/\s{2,}/g, " ").replace(/בתימן — /, "").trim());
	if (summary.length > 260) summary = summary.slice(0, 257).replace(/\s+\S*$/, "") + ".";
	if (!summary) return {
		summary: "",
		body: "",
		places: [],
		type: "statement"
	};
	const body = tidyDeskHe(bodyCore.startsWith("לפי ") ? bodyCore.replace(/\s{2,}/g, " ").trim() : `לפי ${heSrc}: ${bodyCore}`.replace(/\s{2,}/g, " ").trim());
	const pinPlaces = action === "missile" || action === "drone" || action === "port" || action === "airstrike" || action === "clash" || action === "capture" || action === "recapture" ? uniq([...sTargets, ...yPlaces]) : yPlaces;
	return {
		summary,
		body,
		places: pinPlaces,
		type
	};
}
function yemenish(text) {
	if (!YEMEN_RE.test(text)) return false;
	if (NOT_YEMEN_ONLY.test(text) && !/اليمن|الحوث|yemen|houthi/i.test(text)) return false;
	return true;
}
var cache = null;
var CACHE_MS = 24e4;
function jerusalemIso(d = /* @__PURE__ */ new Date()) {
	const fmt = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Asia/Jerusalem",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false
	});
	const p = Object.fromEntries(fmt.formatToParts(d).map((x) => [x.type, x.value]));
	return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}:${p.second}+03:00`;
}
function decodeEntities(s) {
	return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/"/g, "\"").replace(/&#39;|'/g, "'").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
function fpOf(url, title) {
	return "live-" + (url || title).toLowerCase().replace(/https?:\/\//, "").replace(/[^a-z0-9\u0600-\u06ff]+/g, "-").slice(0, 72);
}
function guessConfidence(source, type, lean) {
	if (/Reuters|AFP|AP|BBC|Al Jazeera|Guardian/i.test(source)) return 3.5;
	if (type === "statement") return 2.5;
	if (lean === "houthi" || lean === "gov") return 2.5;
	return 3;
}
function isIsraeliSource(source, url) {
	return /israel|jpost|haaretz|ynet|walla\.co|maariv|kan\.org|\.inn\.co|israelnationalnews|timesofisrael|i24news|hebrew university/i.test(`${source} ${url}`);
}
function toLiveReport(source, url, titleOrText, at, fpSeed, lean = "") {
	if (isIsraeliSource(source, url)) return null;
	if (isOffTopic(titleOrText)) return null;
	const he = heDigest(source, titleOrText, lean);
	if (!he.summary || isVagueHe(he.summary) || isGarbageHe(he.summary)) return null;
	if (he.type === "rally") return null;
	const loc = locate(he.places.length ? he.places : yemenPlacesOf(titleOrText));
	const kinetic = he.type === "strike" || he.type === "combat" || he.type === "port" || he.type === "vessel";
	const row = {
		fp: fpOf(url, fpSeed),
		at,
		source,
		url,
		type: he.type,
		summary: he.summary,
		text: he.body,
		live: true,
		confidence: guessConfidence(source, he.type, lean)
	};
	if (kinetic && loc && loc.place !== "תימן") {
		row.place = loc.place;
		row.lat = loc.lat;
		row.lng = loc.lng;
	}
	return row;
}
async function fetchText(url, ms = 8e3) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), ms);
	try {
		const res = await fetch(url, {
			signal: ctrl.signal,
			headers: {
				"user-agent": "YemenDesk/1.0 (+https://grok.com; OSINT desk)",
				accept: "text/html,application/rss+xml,application/xml,text/xml,*/*",
				"accept-language": "ar,en;q=0.8,he;q=0.5"
			}
		});
		if (!res.ok) return null;
		return await res.text();
	} catch {
		return null;
	} finally {
		clearTimeout(t);
	}
}
function extractLead(html) {
	const og = (html.match(/property=["']og:description["'][^>]*content=["']([^"']{40,})["']/i) || [])[1] || (html.match(/content=["']([^"']{40,})["'][^>]*property=["']og:description["']/i) || [])[1] || "";
	const paras = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((m) => decodeEntities(m[1])).filter((p) => p.length > 50 && !/copyright|subscribe|cookie|javascript/i.test(p));
	const parts = [];
	if (og) parts.push(decodeEntities(og));
	for (const p of paras.slice(0, 5)) if (!parts.some((x) => x.includes(p.slice(0, 50)))) parts.push(p);
	return parts.join(" ").replace(/\s+/g, " ").trim().slice(0, 2200);
}
function outletFromGoogleTitle(title, fallback) {
	const m = title.match(/^(.*)\s[-–—]\s+(.{3,48})$/);
	if (!m) return {
		title,
		source: fallback
	};
	const outlet = m[2].trim();
	const mapped = /fox news/i.test(outlet) ? "Fox News" : /alaraby|new arab|العربي الجديد/i.test(outlet) ? "Al-Araby Al-Jadeed" : /al[- ]?akhbar|الأخبار/i.test(outlet) ? "Al-Akhbar" : /aawsat|الشرق الأوسط|asharq al-awsat/i.test(outlet) ? "Asharq Al-Awsat" : /alhurra|الحرة/i.test(outlet) ? "Alhurra" : /erem|إرم/i.test(outlet) ? "Erem News" : /okaz|عكاظ/i.test(outlet) ? "Okaz" : /al-?watan|الوطن/i.test(outlet) ? "Al-Watan" : /reuters/i.test(outlet) ? "Reuters" : /associated press|^AP$/i.test(outlet) ? "AP" : /politico/i.test(outlet) ? "Politico" : /cnbc/i.test(outlet) ? "CNBC" : /wsj|wall street/i.test(outlet) ? "WSJ" : fallback === "US media" ? outlet.replace(/\s+/g, " ").slice(0, 28) : fallback;
	return {
		title: m[1].trim(),
		source: mapped
	};
}
function parseRss(xml, source) {
	const items = [];
	const blocks = xml.split(/<item[\s>]/i).slice(1);
	const cap = /news\.google\.com/i.test(xml) ? 6 : 8;
	for (const b of blocks.slice(0, cap)) {
		let title = decodeEntities((b.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "");
		const desc = decodeEntities((b.match(/<description[^>]*>([\s\S]*?)<\/description>/i) || [])[1] || "");
		const linkRaw = (b.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1] || (b.match(/<link[^>]+href=["']([^"']+)["']/i) || [])[1] || "";
		const guid = decodeEntities((b.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i) || [])[1] || "");
		const dateRaw = (b.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || [])[1] || "";
		let url = decodeEntities(linkRaw || guid).replace(/&/g, "&").trim();
		if (!title || !url || !/^https?:\/\//i.test(url)) continue;
		let src = source;
		if (/news\.google\.com/i.test(url)) {
			const g = outletFromGoogleTitle(title, source);
			title = g.title;
			src = g.source;
			const srcUrl = (b.match(/<source[^>]+url=["']([^"']+)["']/i) || [])[1];
			if (srcUrl && /^https?:\/\//i.test(srcUrl) && !/news\.google\.com/i.test(srcUrl)) url = srcUrl;
		}
		if (title.length < 18) continue;
		if (isIsraeliSource(src, url)) continue;
		const blob = `${title} ${desc}`.slice(0, 1200);
		if (!yemenish(blob) && !/trump|פוטوس|white house/i.test(blob)) continue;
		if (!yemenish(blob) && /trump|white house/i.test(blob) && !/houthi|yemen|saudi|red sea|باب/i.test(blob)) continue;
		let at = jerusalemIso();
		const parsed = Date.parse(dateRaw);
		if (Number.isFinite(parsed)) at = jerusalemIso(new Date(parsed));
		items.push({
			source: src,
			url,
			text: blob,
			at,
			lean: "",
			fromTg: false
		});
	}
	return items;
}
function parseTelegram(html, ch) {
	const items = [];
	const parts = html.split("tgme_widget_message_wrap");
	for (const p of parts.slice(1, 16)) {
		const hrefs = [...p.matchAll(new RegExp(`href="(https://t\\.me/${ch.id}/\\d+)"`, "gi"))].map((m) => m[1]);
		const textHtml = (p.match(/class="tgme_widget_message_text[^"]*"[^>]*>([\s\S]*?)<\/div>/) || [])[1] || "";
		const datetime = (p.match(/datetime="([^"]+)"/) || [])[1] || "";
		const text = decodeEntities(textHtml);
		if (!text || text.length < 20) continue;
		if (!(ch.id === "hezamalasad21" ? /السعود|اليمن|صنعاء|الحصار|مكة|المسلح|حوث|أنصار|المخا|ترليون|لن تمر/.test(text) : ch.id === "RapidResponse" ? /houthi|yemen|saudi|red sea|bab al/i.test(text) : yemenish(text))) continue;
		const url = (hrefs[0] || "").split("?")[0];
		if (!url) continue;
		let at = jerusalemIso();
		const parsed = Date.parse(datetime);
		if (Number.isFinite(parsed)) at = jerusalemIso(new Date(parsed));
		items.push({
			source: ch.name,
			url,
			text,
			at,
			lean: ch.lean,
			fromTg: true
		});
	}
	return items;
}
function parseXTimeline(html, acc) {
	const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
	if (!m) return [];
	let data;
	try {
		data = JSON.parse(m[1]);
	} catch {
		return [];
	}
	const entries = data.props?.pageProps?.timeline?.entries || [];
	const cutoff = Date.now() - 3456e5;
	const items = [];
	for (const e of entries) {
		const tw = e.content?.tweet;
		const text = (tw?.full_text || "").trim();
		if (text.length < 40) continue;
		const created = tw?.created_at ? Date.parse(tw.created_at) : NaN;
		if (!Number.isFinite(created) || created < cutoff) continue;
		if (!yemenish(text) && !/السعود|ابن سلمان|مكة|الحصار/.test(text)) continue;
		const id = tw?.id_str;
		if (!id) continue;
		items.push({
			source: acc.name,
			url: `https://x.com/${acc.handle}/status/${id}`,
			text,
			at: jerusalemIso(new Date(created)),
			lean: acc.lean,
			fromTg: true
		});
	}
	return items;
}
function frontBucket(r) {
	const s = `${r.place || ""} ${r.summary || ""} ${r.text || ""}`.replace(/[\u0591-\u05C7]/g, "").replace(/[׳'״"]/g, "");
	if (/כהבוב|באב אלמנדב|מיון|דובאב/.test(s)) return "bab";
	if (/אלואזעיה|אלצריפה|שרירה|אלעלקמה/.test(s)) return "waziyah";
	if (/מאריב|ואדי דנה|ואדי עבידה|בלק/.test(s)) return "marib";
	if (/אלגוף|אלחזם|אללבנ/.test(s)) return "jawf";
	if (/אלחודיידה|אלחוחה|חיס/.test(s) && !/לחג/.test(s)) return "hudaydah";
	if (/לחג|אלאעברה|אלמצארבה|עדן/.test(s)) return "lahj-south";
	if (/צנעא/.test(s)) return "sanaa";
	if (/ינבוע|גדה|ארמקו|נפט|סואץ/.test(s) || r.type === "economy") return "energy";
	if (/גאזאן|נגראן|חמיס|עבהא|טאיף|מכה|ריאד/.test(s)) return "ksa-strike";
	return (r.type || "x") + "-other";
}
function storyKey(r) {
	const s = r.summary;
	if (/חזאם|מס־חסות|מצור מול מצור/.test(s)) return "hazam-saudi";
	if (/אלמרתצ׳א|מרתצ/.test(s)) return "murtada-saudi";
	if (/סריע|הוכשל.*ניסיונות|הכשיל ניסיונות/.test(s)) return "saree-foil";
	if (/טראמפ/.test(s)) return "trump-talks";
	if (/ביזה|אלח׳וחה/.test(s) && /אלחודיידה/.test(s)) return "khokha-loot";
	if (/שחזרו עמדות|השתלטות מחדש/.test(s) && /תעז/.test(s)) return "taiz-recapture";
	if (/דבור אלסמא|SKYWASP/.test(s)) return "skywasp-sanaa";
	if (/אבו צקר|כַּהבּוּב/.test(s) && /הרג/.test(s)) return "kahbub-kill";
	if (/112 אלף עקורים/.test(s)) return "displaced-112k";
	if (/50 מיליון/.test(s)) return "un-50m";
	if (/סמיר אלחאג׳/.test(s)) return "sabri-politics";
	if (/אלחֻגַ׳ריה|נשק אישי/.test(s)) return "hujariya-plea";
	if (/30 לוחמים חות׳ים|אלואזעיה.*60/.test(s)) return "waziyah-90";
	if (/לוחמים מסוריה|סוריה.*לוחמים/.test(s)) return "syria-fighters";
	if (/ביטל.*נפט|משלוחי נפט|Yanbu|יַנְבּוּע.*נפט/.test(s)) return "oil-cancel";
	const ymd = String(r.at || "").slice(0, 10);
	const bucket = frontBucket(r);
	if (r.type === "combat" || r.type === "strike" || r.type === "economy") return `${ymd}|${r.type}|${bucket}`;
	return r.url.split("?")[0];
}
function scoreReport(x) {
	return String(x.summary || "").length + (String(x.summary).match(/\d/g) || []).length * 12 + (x.place ? 25 : 0) + (/חטיבות הענקים|מגן המולדת|טארק/.test(x.summary) ? 40 : 0);
}
var DATA_FILE = join(process.cwd(), "public", "data.json");
async function persistKineticToDesk(reports) {
	try {
		const raw = await readFile(DATA_FILE, "utf8");
		const data = JSON.parse(raw);
		data.reports = Array.isArray(data.reports) ? data.reports : [];
		data.events = Array.isArray(data.events) ? data.events : [];
		const haveFp = new Set(data.events.map((e) => String(e.fp || "")));
		const haveUrl = /* @__PURE__ */ new Set([...data.reports.map((r) => String(r.url || "")), ...data.events.map((e) => String(e.url || ""))]);
		let added = 0;
		for (const r of reports) {
			if (!r.url || haveUrl.has(r.url) || haveFp.has(r.fp)) continue;
			const kinetic = r.type === "combat" || r.type === "strike" || r.type === "port" || r.type === "vessel";
			if (!(kinetic || r.type === "economy")) continue;
			const row = {
				fp: r.fp,
				priority: r.type === "economy" ? 2 : 1,
				at: r.at,
				source: r.source,
				url: r.url,
				type: r.type,
				summary: r.summary,
				text: r.text,
				live: true,
				confidence: r.confidence || 3,
				...r.place ? { place: r.place } : {},
				...r.lat != null ? {
					lat: r.lat,
					lng: r.lng
				} : {}
			};
			data.reports.unshift(row);
			haveUrl.add(r.url);
			haveFp.add(r.fp);
			added += 1;
			if (kinetic && r.lat != null && r.lng != null) data.events.unshift({
				fp: r.fp,
				at: r.at,
				type: r.type,
				lat: r.lat,
				lng: r.lng,
				place: r.place,
				labelHe: r.summary,
				text: r.text,
				source: r.source,
				url: r.url,
				mapOnly: false
			});
		}
		if (!added) return;
		data.updatedAt = jerusalemIso();
		await writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
	} catch {}
}
async function scanOnce() {
	let sourcesOk = 0;
	const hits = [];
	const jobs = [];
	const xIds = /* @__PURE__ */ new Set();
	for (const ch of TG) jobs.push((async () => {
		const html = await fetchText(`https://t.me/s/${ch.id}`);
		if (!html || !html.includes("tgme_widget_message")) return;
		sourcesOk += 1;
		hits.push(...parseTelegram(html, ch));
		for (const m of html.matchAll(/(?:x\.com|twitter\.com)\/(hezamalasad|Alsakaniali|abdulqadermortd|Moh_Alhouthi)\/status\/(\d+)/gi)) xIds.add(`${m[1].toLowerCase()}|${m[2]}`);
	})());
	for (const feed of RSS) jobs.push((async () => {
		const xml = await fetchText(feed.url);
		if (!xml || !/<item[\s>]/i.test(xml)) return;
		sourcesOk += 1;
		hits.push(...parseRss(xml, feed.name));
	})());
	for (const acc of X_USERS) jobs.push((async () => {
		const html = await fetchText(`https://syndication.twitter.com/srv/timeline-profile/screen-name/${acc.handle}`, 8e3);
		if (!html || !html.includes("__NEXT_DATA__")) return;
		const rows = parseXTimeline(html, acc);
		if (!rows.length) return;
		sourcesOk += 1;
		hits.push(...rows);
	})());
	await Promise.allSettled(jobs);
	if (xIds.size) await Promise.allSettled([...xIds].slice(0, 10).map(async (pair) => {
		const [handle, id] = pair.includes("|") ? pair.split("|") : ["hezamalasad", pair];
		const acc = X_USERS.find((a) => a.handle.toLowerCase() === handle.toLowerCase());
		const name = acc?.name || "Hazam al-Asad";
		const lean = acc?.lean || "houthi";
		const raw = await fetchText(`https://api.fxtwitter.com/${handle}/status/${id}`, 6e3);
		if (!raw) return;
		try {
			const j = JSON.parse(raw);
			const text = j.tweet?.text || "";
			if (text.length < 20) return;
			const at = j.tweet?.created_at ? jerusalemIso(new Date(j.tweet.created_at)) : jerusalemIso();
			hits.push({
				source: name,
				url: `https://x.com/${handle}/status/${id}`,
				text,
				at,
				lean,
				fromTg: true
			});
		} catch {}
	}));
	const needFetch = hits.filter((h) => !h.fromTg && h.text.length < 500).slice(0, 12);
	await Promise.allSettled(needFetch.map(async (h) => {
		const html = await fetchText(h.url, 6e3);
		if (!html) return;
		const lead = extractLead(html);
		if (lead.length > 80) h.text = `${h.text}\n${lead}`.slice(0, 2800);
	}));
	const reports = [];
	for (const h of hits) {
		const row = toLiveReport(h.source, h.url, h.text, h.at, h.text.slice(0, 80), h.lean);
		if (row) reports.push(row);
	}
	const seenUrl = /* @__PURE__ */ new Set();
	const byStory = /* @__PURE__ */ new Map();
	reports.sort((a, b) => Date.parse(b.at) - Date.parse(a.at) || b.summary.length - a.summary.length).forEach((r) => {
		const u = r.url.split("?")[0];
		if (seenUrl.has(u) || seenUrl.has(r.fp)) return;
		seenUrl.add(u);
		seenUrl.add(r.fp);
		const sk = storyKey(r);
		const prev = byStory.get(sk);
		if (!prev || scoreReport(r) > scoreReport(prev)) byStory.set(sk, r);
	});
	const uniqReports = [...byStory.values()].sort((a, b) => Date.parse(b.at) - Date.parse(a.at));
	persistKineticToDesk(uniqReports);
	return {
		ok: true,
		scannedAt: jerusalemIso(),
		reports: uniqReports.slice(0, 40),
		sourcesTried: TG.length + RSS.length + X_USERS.length,
		sourcesOk
	};
}
var LIVE_FILES = [join(process.cwd(), "public", "live-reports.json"), join(process.cwd(), ".vercel", "output", "static", "live-reports.json")];
async function readDiskCache() {
	for (const p of LIVE_FILES) try {
		const raw = await readFile(p, "utf8");
		const parsed = JSON.parse(raw);
		if (parsed && Array.isArray(parsed.reports) && parsed.scannedAt) return parsed;
	} catch {}
	return null;
}
async function writeDiskCache(payload) {
	const body = JSON.stringify(payload);
	await Promise.allSettled(LIVE_FILES.map((p) => writeFile(p, body, "utf8")));
}
async function scanYemenSources(opts) {
	const now = Date.now();
	if (!opts?.fresh && cache && now - cache.at < CACHE_MS) return cache.payload;
	if (!opts?.fresh) {
		const disk = await readDiskCache();
		if (disk && disk.reports.length) {
			const diskAt = Date.parse(disk.scannedAt);
			cache = {
				at: Number.isFinite(diskAt) ? diskAt : now,
				payload: disk
			};
			if (!Number.isFinite(diskAt) || now - diskAt >= CACHE_MS) scanOnce().then((payload) => {
				cache = {
					at: Date.now(),
					payload
				};
				writeDiskCache(payload);
			});
			return disk;
		}
	}
	const payload = await scanOnce();
	cache = {
		at: now,
		payload
	};
	writeDiskCache(payload);
	return payload;
}
TG.length + RSS.length + X_USERS.length;
var Route = createFileRoute("/api/scan")({ server: { handlers: { GET: async ({ request }) => {
	try {
		const payload = await scanYemenSources({ fresh: new URL(request.url).searchParams.has("fresh") });
		return new Response(JSON.stringify(payload), { headers: {
			"content-type": "application/json; charset=utf-8",
			"cache-control": "public, max-age=60"
		} });
	} catch (err) {
		const msg = err instanceof Error ? err.message : "scan failed";
		return new Response(JSON.stringify({
			ok: false,
			error: msg,
			reports: []
		}), {
			status: 500,
			headers: { "content-type": "application/json; charset=utf-8" }
		});
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	ApiScanRoute: Route.update({
		id: "/api/scan",
		path: "/api/scan",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { getRouter };
