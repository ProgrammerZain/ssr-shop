import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Cache & Revalidation Lab | Next.js SSR Lab",
  description:
    "Learn the difference between Rendering, Data Caching, and Revalidation in Next.js.",
};

export default function CacheLabPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Next.js Caching & Revalidation Lab"
        description="Master the 3 pillars of web performance in Next.js App Router: Rendering, Data Caching, and Incremental Revalidation."
        renderingType="STATIC"
        category="Cache Lab Architecture"
      />

      {/* Prominent Educational Banner */}
      <div className="p-6 rounded-xl border border-amber-500/30 bg-amber-500/10 text-slate-200 space-y-3 shadow-lg">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-lg">
          <span>💡</span> Core Architectural Principle
        </div>
        <p className="text-base font-semibold text-slate-100 italic leading-relaxed">
          &ldquo;Server rendering does not automatically mean fresh data is generated on every request.&rdquo;
        </p>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          In Next.js App Router, <strong>Rendering</strong> (executing Server Components to generate HTML) is decoupled from <strong>Data Caching</strong> (storing API fetch results across requests). A component can be rendered on the server while serving cached, static data.
        </p>
      </div>

      <RenderingInfo
        renderingType="STATIC"
        executionTarget="Build-time Pre-render / Node.js Server"
        cachingStrategy="Multi-Tier (Data Cache, Route Cache, Request Memoization)"
        dynamicApis="Configured per endpoint ({ cache: 'force-cache' | 'no-store' | revalidate: N })"
        description="Explore how altering fetch options modifies Next.js Data Cache behavior without changing your component UI code."
      />

      {/* Cache Strategy Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ModuleCard
          title="1. Static Cache (SSG)"
          description="Pre-rendered at build time. Fetch data is cached indefinitely until explicit revalidation."
          renderingType="STATIC"
          status="force-cache"
          href="/cache-lab/static"
        />

        <ModuleCard
          title="2. Dynamic Bypass (SSR)"
          description="Rendered dynamically per request. Data Cache is completely bypassed for 100% fresh data."
          renderingType="DYNAMIC"
          status="no-store"
          href="/cache-lab/dynamic"
        />

        <ModuleCard
          title="3. Revalidation (ISR)"
          description="Pre-rendered statically with background Stale-While-Revalidate updates every N seconds."
          renderingType="REVALIDATED"
          status="revalidate: 10s"
          href="/cache-lab/revalidate"
        />
      </div>

      {/* Comprehensive Comparison Table */}
      <SectionCard
        title="Rendering vs. Caching vs. Revalidation Comparison Matrix"
        icon="📊"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-sans uppercase text-[11px]">
                <th className="p-3">Strategy</th>
                <th className="p-3">Fetch Config</th>
                <th className="p-3">Rendering Mode</th>
                <th className="p-3">When Data Fetched</th>
                <th className="p-3">Data Freshness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-300">
              <tr className="hover:bg-slate-900/40">
                <td className="p-3 font-bold text-emerald-400">
                  Static (SSG)
                </td>
                <td className="p-3 text-slate-200">
                  <code className="bg-slate-900 px-1 py-0.5 rounded text-emerald-300">
                    cache: &apos;force-cache&apos;
                  </code>
                </td>
                <td className="p-3 font-sans">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px]">
                    STATIC
                  </span>
                </td>
                <td className="p-3">Build time (or first request)</td>
                <td className="p-3 text-slate-400">Cached indefinitely</td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-3 font-bold text-purple-400">
                  Dynamic (SSR)
                </td>
                <td className="p-3 text-slate-200">
                  <code className="bg-slate-900 px-1 py-0.5 rounded text-purple-300">
                    cache: &apos;no-store&apos;
                  </code>
                </td>
                <td className="p-3 font-sans">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono text-[10px]">
                    DYNAMIC
                  </span>
                </td>
                <td className="p-3">Every incoming HTTP request</td>
                <td className="p-3 text-emerald-400 font-bold">
                  100% Fresh per request
                </td>
              </tr>
              <tr className="hover:bg-slate-900/40">
                <td className="p-3 font-bold text-teal-400">
                  Revalidated (ISR)
                </td>
                <td className="p-3 text-slate-200">
                  <code className="bg-slate-900 px-1 py-0.5 rounded text-teal-300">
                    next: &#123; revalidate: 10 &#125;
                  </code>
                </td>
                <td className="p-3 font-sans">
                  <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 font-mono text-[10px]">
                    REVALIDATED
                  </span>
                </td>
                <td className="p-3">Background refresh every 10s</td>
                <td className="p-3 text-teal-300">
                  Stale-While-Revalidate (10s)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
