import { createFileRoute } from "@tanstack/react-router";
import { scanYemenSources } from "@/lib/yemen-scan.server";

export const Route = createFileRoute("/api/scan")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const fresh = new URL(request.url).searchParams.has("fresh");
          const payload = await scanYemenSources({ fresh });
          return new Response(JSON.stringify(payload), {
            headers: {
              "content-type": "application/json; charset=utf-8",
              "cache-control": "public, max-age=60",
            },
          });
        } catch (err) {
          const msg = err instanceof Error ? err.message : "scan failed";
          return new Response(JSON.stringify({ ok: false, error: msg, reports: [] }), {
            status: 500,
            headers: { "content-type": "application/json; charset=utf-8" },
          });
        }
      },
    },
  },
});
