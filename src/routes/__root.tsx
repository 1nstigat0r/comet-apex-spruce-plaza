import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "דסק מלחמה — תימן";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: APP_NAME },
      { name: "theme-color", content: "#070b10" },
      { name: "description", content: "דסק מלחמה חי לתימן — מפת שליטה, דיווחים רציפים ותקיפות לפי מודיעין גלוי." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/vendor/leaflet/leaflet.css" },
      { rel: "stylesheet", href: "/desk.css?v=desk-19sep-e" },
      { rel: "preload", href: "/vendor/leaflet/leaflet.js", as: "script" },
      { rel: "preload", href: "/app.js?v=desk-19sep-e", as: "script" },
      { rel: "preload", href: "/data.json", as: "fetch", crossOrigin: "anonymous" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <script id="leaflet-js" src="/vendor/leaflet/leaflet.js" />
        <script id="yemen-app-js" src="/app.js?v=desk-19sep-e" />
        <Scripts />
      </body>
    </html>
  );
}
