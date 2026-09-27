import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Cache Lab Overview | Next.js SSR Lab",
  description: "Overview of Next.js caching layers and revalidation strategies.",
};

export default function CacheLabPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Next.js Cache & Revalidation Lab"
        description="Comprehensive study of the 4 distinct caching mechanisms in Next.js App Router: Request Memoization, Data Cache, Full Route Cache, and Client Router Cache."
        renderingType="STATIC"
        category="Caching Architecture"
      />

      <RenderingInfo
        renderingType="STATIC"
        executionTarget="Build-time Pre-render / Server Cache"
        cachingStrategy="Multi-tier Caching (Full Route + Data Cache)"
        dynamicApis="None (Static default)"
        description="Next.js defaults to caching as much as possible for maximum performance and low latency. Understanding how to configure or bypass each cache layer is key to mastering Next.js."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li><strong className="text-slate-100">Request Memoization:</strong> Deduplicating identical fetch requests within a single render pass.</li>
            <li><strong className="text-slate-100">Data Cache:</strong> Persisting fetch data across incoming requests and deployments.</li>
            <li><strong className="text-slate-100">Full Route Cache:</strong> Caching HTML and React Server Component payload at build time.</li>
            <li><strong className="text-slate-100">Router Cache:</strong> In-memory client-side route caching during user navigation.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Cache Architecture Matrix" icon="⚡">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-emerald-400 font-bold">1. Static SSG</span>
              <span className="text-slate-300">force-cache</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-purple-400 font-bold">2. Dynamic SSR</span>
              <span className="text-slate-300">no-store</span>
            </div>
            <div className="flex justify-between">
              <span className="text-teal-400 font-bold">3. Revalidated ISR</span>
              <span className="text-slate-300">next: &#123; revalidate: 60 &#125;</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Explore Cache Strategies" icon="🧪">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Static Caching (SSG)"
            description="Build-time pre-rendering with persistent data caching."
            renderingType="STATIC"
            href="/cache-lab/static"
          />
          <ModuleCard
            title="Dynamic Bypass (SSR)"
            description="Bypassing data cache for 100% fresh request hits."
            renderingType="DYNAMIC"
            href="/cache-lab/dynamic"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Time & tag based incremental static regeneration."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
        </div>
      </SectionCard>
    </div>
  );
}
