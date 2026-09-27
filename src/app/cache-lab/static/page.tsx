import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Static Caching (SSG) | Cache Lab",
  description: "Static Site Generation and Data Cache persistence demonstration.",
};

export default function StaticCachePage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Static Pre-rendering & Caching (SSG)"
        description="Demonstrates how Next.js pre-renders pages at build time and caches data responses indefinitely via fetch(url, { cache: 'force-cache' })."
        renderingType="STATIC"
        category="Cache Lab / Static"
      />

      <RenderingInfo
        renderingType="STATIC"
        executionTarget="Build-time Pre-render"
        cachingStrategy="force-cache (Cached indefinitely)"
        dynamicApis="None"
        description="Static routes are rendered once at build time. The resulting HTML and RSC payload are stored in the Full Route Cache and served instantly via CDN edge servers."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>How Next.js automatically detects static routes at build time.</li>
            <li>Configuring <code className="text-emerald-400 bg-slate-900 px-1 py-0.5 rounded">cache: &apos;force-cache&apos;</code> on fetch requests.</li>
            <li>Achieving sub-10ms response times by serving static HTML assets.</li>
            <li>When static caching is appropriate (marketing pages, docs, fixed catalog pages).</li>
          </ul>
        </SectionCard>

        <SectionCard title="Static Cache Flow Visualizer" icon="⚡">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Build Time:</span>
              <span className="text-emerald-400 font-bold">HTML Generated</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">CDN Storage:</span>
              <span className="text-slate-200">Full Route Cache (HIT)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Latency:</span>
              <span className="text-emerald-400 font-bold">~ 5ms</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Dynamic Cache (SSR)"
            description="Bypassing data cache for live server hits."
            renderingType="DYNAMIC"
            href="/cache-lab/dynamic"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Updating static cache in background."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
          <ModuleCard
            title="Cache Overview"
            description="Return to Cache Lab overview."
            renderingType="STATIC"
            href="/cache-lab"
          />
        </div>
      </SectionCard>
    </div>
  );
}
