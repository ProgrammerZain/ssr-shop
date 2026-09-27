import { headers } from "next/headers";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Server Request Inspector | Next.js SSR Lab",
  description:
    "Inspect HTTP headers, search parameters, and request context on the Node.js server.",
};

// Force dynamic server rendering on every request to inspect live HTTP headers
export const dynamic = "force-dynamic";

interface RequestInspectorPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RequestInspectorPage({
  searchParams,
}: RequestInspectorPageProps) {
  const resolvedSearchParams = await searchParams;
  const headerList = await headers();

  const host = headerList.get("host") || "localhost:3000";
  const userAgent = headerList.get("user-agent") || "Unknown User-Agent";
  const acceptLanguage = headerList.get("accept-language") || "N/A";
  const referer = headerList.get("referer") || "Direct Navigation";
  const forwardedFor =
    headerList.get("x-forwarded-for") || "127.0.0.1 (Local Loopback)";

  const requestId = `req_${crypto.randomUUID().slice(0, 8)}`;
  const timestamp = new Date().toISOString();
  const searchParamsEntries = Object.entries(resolvedSearchParams);

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Server Request Inspector"
        description="Inspect incoming HTTP headers, URL search parameters, execution runtime, and request metadata directly on the Node.js server."
        renderingType="SERVER"
        category="Request Diagnostics"
      />

      {/* Visual Request Lifecycle Diagram */}
      <SectionCard title="HTTP Request Lifecycle Architecture" icon="🔄">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center py-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              Browser Request
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
              Next.js Server
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              Server Component
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              API Request
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold">
              HTML Response
            </span>
          </div>
        </div>
      </SectionCard>

      {/* Diagnostics */}
      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server Runtime"
        cachingStrategy="Dynamic (Opted out via next/headers)"
        dynamicApis={`headers() & searchParams | Request ID: ${requestId}`}
        description="Reading HTTP request headers opts this route into dynamic server-side execution. Next.js extracts server context before streaming pre-rendered HTML to the browser."
      />

      {/* Live Request Metadata Panel */}
      <SectionCard title="Live Server Request Inspection Panel" icon="🕵️">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase text-[10px] font-sans">Request ID</span>
            <div className="text-blue-400 font-bold text-sm">{requestId}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase text-[10px] font-sans">Timestamp (ISO)</span>
            <div className="text-emerald-400 font-bold text-sm">{timestamp}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase text-[10px] font-sans">Pathname</span>
            <div className="text-purple-400 font-semibold text-sm">/request-inspector</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase text-[10px] font-sans">HTTP Host Header</span>
            <div className="text-slate-200 font-semibold">{host}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1 md:col-span-2">
            <span className="text-slate-500 uppercase text-[10px] font-sans">User-Agent Header</span>
            <div className="text-slate-300 truncate">{userAgent}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase text-[10px] font-sans">Accept-Language</span>
            <div className="text-slate-300">{acceptLanguage}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
            <span className="text-slate-500 uppercase text-[10px] font-sans">Client IP (x-forwarded-for)</span>
            <div className="text-slate-300">{forwardedFor}</div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1 md:col-span-2">
            <span className="text-slate-500 uppercase text-[10px] font-sans">Referer Header</span>
            <div className="text-slate-300 truncate">{referer}</div>
          </div>
        </div>
      </SectionCard>

      {/* Search Parameters Section */}
      <SectionCard title="Active Search Parameters (searchParams)" icon="🔍">
        {searchParamsEntries.length === 0 ? (
          <div className="p-4 rounded-lg bg-slate-950/40 border border-slate-800 text-slate-400 text-sm flex items-center justify-between">
            <span>No query parameters present in current URL.</span>
            <div className="flex gap-2">
              <Link
                href="/request-inspector?topic=ssr&level=beginner"
                className="px-3 py-1 rounded bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 text-xs font-mono transition-colors"
              >
                + Test Params 1
              </Link>
              <Link
                href="/request-inspector?filter=active&sort=desc"
                className="px-3 py-1 rounded bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 text-xs font-mono transition-colors"
              >
                + Test Params 2
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-3 font-mono text-xs">
            <div className="text-xs text-slate-400 font-sans">
              Found {searchParamsEntries.length} URL query parameter(s):
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {searchParamsEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between"
                >
                  <span className="text-blue-400 font-bold">{key}</span>
                  <span className="text-slate-200">{String(value)}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/request-inspector"
                className="text-xs text-slate-400 hover:underline font-sans"
              >
                Clear Query Parameters
              </Link>
            </div>
          </div>
        )}
      </SectionCard>

      {/* Server vs Client Available Context Explanation */}
      <SectionCard title="Server vs. Client Context Capabilities" icon="🔒">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 space-y-3">
            <h3 className="font-bold text-blue-400 flex items-center gap-2">
              <span>🖥️</span> Available ONLY on Server
            </h3>
            <ul className="space-y-1.5 text-slate-300 text-xs list-disc list-inside">
              <li>Raw incoming HTTP headers via <code className="text-blue-300">headers()</code> (User-Agent, Accept-Language, Referer).</li>
              <li>Server cookies via <code className="text-blue-300">cookies()</code> without exposing them to client JavaScript.</li>
              <li>Internal network IP addresses and reverse proxy headers (<code className="text-blue-300">x-forwarded-for</code>).</li>
              <li>Server environment variables (database credentials, private API tokens).</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-3">
            <h3 className="font-bold text-amber-400 flex items-center gap-2">
              <span>⚛️</span> Available ONLY on Client
            </h3>
            <ul className="space-y-1.5 text-slate-300 text-xs list-disc list-inside">
              <li>DOM window and document APIs (<code className="text-amber-300">window.innerWidth</code>, <code className="text-amber-300">localStorage</code>).</li>
              <li>Browser event listeners (<code className="text-amber-300">onClick</code>, <code className="text-amber-300">onScroll</code>, <code className="text-amber-300">onKeyDown</code>).</li>
              <li>Interactive state hooks (<code className="text-amber-300">useState</code>, <code className="text-amber-300">useEffect</code>, <code className="text-amber-300">useRef</code>).</li>
              <li>Real-time browser media query detection (<code className="text-amber-300">matchMedia</code>).</li>
            </ul>
          </div>
        </div>
      </SectionCard>

      {/* Related Modules */}
      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="SSR Deep Dive"
            description="Explore Server Component rendering lifecycle."
            renderingType="DYNAMIC"
            href="/ssr-demo"
          />
          <ModuleCard
            title="Catalog Search"
            description="Dynamic query parameters with Client search."
            renderingType="CLIENT"
            href="/search"
          />
          <ModuleCard
            title="Server Actions Lab"
            description="Mutate data securely using Server Actions."
            renderingType="SERVER"
            href="/actions-lab"
          />
        </div>
      </SectionCard>
    </div>
  );
}
