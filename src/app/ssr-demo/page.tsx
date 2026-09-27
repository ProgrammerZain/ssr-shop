import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "SSR Demonstration Lab | Next.js SSR Lab",
  description: "Deep dive into Server-Side Rendering (SSR) mechanics.",
};

export default function SsrDemoPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Server-Side Rendering (SSR) Deep Dive"
        description="Explore how Next.js executes Server Components on the server runtime per request, generating ready-to-display HTML before transmitting it to the client."
        renderingType="DYNAMIC"
        category="SSR Architecture"
      />

      <RenderingInfo
        renderingType="DYNAMIC"
        executionTarget="Node.js Server"
        cachingStrategy="revalidate = 0 / cache: 'no-store'"
        dynamicApis="cookies() / headers() / searchParams"
        description="Server-Side Rendering evaluates dynamic requests on every single incoming HTTP hit. It ensures 100% fresh data for dynamic dashboards, user carts, and inventory levels."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>The step-by-step lifecycle of an SSR request in Next.js App Router.</li>
            <li>How Server Components send HTML streams to the browser without client hydration overhead.</li>
            <li>When to choose SSR vs SSG (Static Site Generation) or ISR.</li>
            <li>Inspecting server execution timestamps and headers.</li>
          </ul>
        </SectionCard>

        <SectionCard title="SSR Execution Flow" icon="⚙️">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <span>1. Client Request</span>
              <span>&rarr;</span>
              <span>HTTP GET /ssr-demo</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400 font-bold">
              <span>2. Server Execution</span>
              <span>&rarr;</span>
              <span>Fetch API / Render React Tree</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span>3. HTML Stream</span>
              <span>&rarr;</span>
              <span>Streamed Response to Browser</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="CSR Demo Lab"
            description="Compare Server-side rendering with Client rendering."
            renderingType="CLIENT"
            href="/csr-demo"
          />
          <ModuleCard
            title="Request Inspector"
            description="Inspect server-side HTTP headers and cookies."
            renderingType="SERVER"
            href="/request-inspector"
          />
          <ModuleCard
            title="Dynamic Cache Lab"
            description="Bypassing Data Cache for fresh SSR hits."
            renderingType="DYNAMIC"
            href="/cache-lab/dynamic"
          />
        </div>
      </SectionCard>
    </div>
  );
}
