import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Dynamic Caching Bypass | Cache Lab",
  description: "Bypassing Next.js Data Cache using no-store or dynamic functions.",
};

export default function DynamicCachePage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Dynamic Cache Bypass (No-Store)"
        description="Demonstrates explicit data cache bypass using fetch(url, { cache: 'no-store' }) or export const dynamic = 'force-dynamic'."
        renderingType="DYNAMIC"
        category="Cache Lab / Dynamic"
      />

      <RenderingInfo
        renderingType="DYNAMIC"
        executionTarget="Node.js Server"
        cachingStrategy="cache: 'no-store' (Cache Bypassed)"
        dynamicApis="Opt-in via dynamic config or fetch options"
        description="Bypassing the Data Cache forces Next.js to fetch fresh data directly from the upstream data provider on every request hit."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Using <code className="text-purple-400 bg-slate-900 px-1 py-0.5 rounded">cache: &apos;no-store&apos;</code> to bypass Data Cache.</li>
            <li>Setting route segment options: <code className="text-purple-400 bg-slate-900 px-1 py-0.5 rounded">export const dynamic = &apos;force-dynamic&apos;</code>.</li>
            <li>Preventing stale data issues in dynamic applications (e.g. stock levels, checkout balances).</li>
            <li>Comparing performance tradeoffs between dynamic server execution vs cached responses.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Dynamic Cache Bypass Flow" icon="🔄">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Incoming Hit:</span>
              <span className="text-purple-400 font-bold">Request #1042</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Data Cache:</span>
              <span className="text-amber-400 font-semibold">BYPASSED (MISS)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Upstream Fetch:</span>
              <span className="text-emerald-400 font-bold">Fresh Data Fetched</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Static Cache (SSG)"
            description="Explore build-time static pre-rendering."
            renderingType="STATIC"
            href="/cache-lab/static"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Background data revalidation strategies."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
          <ModuleCard
            title="Request Inspector"
            description="Inspect server-side request context."
            renderingType="SERVER"
            href="/request-inspector"
          />
        </div>
      </SectionCard>
    </div>
  );
}
