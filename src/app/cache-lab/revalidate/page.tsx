import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Revalidation (ISR) | Cache Lab",
  description: "Time-based and tag-based Incremental Static Regeneration.",
};

export default function RevalidateCachePage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Time & Tag Revalidation (ISR)"
        description="Demonstrates Incremental Static Regeneration (ISR), allowing static pages to be updated in the background without rebuilding the entire application."
        renderingType="REVALIDATED"
        category="Cache Lab / Revalidation"
      />

      <RenderingInfo
        renderingType="REVALIDATED"
        executionTarget="Build-time Pre-render + Background Revalidation"
        cachingStrategy="next: { revalidate: 60, tags: ['products'] }"
        dynamicApis="revalidatePath() / revalidateTag()"
        description="ISR provides the speed of static pre-rendering while periodically updating stale data in the background upon new user requests or explicit cache invalidation tags."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Setting time-based revalidation via <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">next: &#123; revalidate: 60 &#125;</code> or <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">export const revalidate = 60</code>.</li>
            <li>On-demand revalidation using <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">revalidatePath(&apos;/products&apos;)</code>.</li>
            <li>Tag-based cache invalidation using <code className="text-teal-400 bg-slate-900 px-1 py-0.5 rounded">revalidateTag(&apos;products&apos;)</code>.</li>
            <li>Serving stale content instantly while triggering background page updates (Stale-While-Revalidate pattern).</li>
          </ul>
        </SectionCard>

        <SectionCard title="Stale-While-Revalidate Cycle" icon="⏱️">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Request within 60s:</span>
              <span className="text-emerald-400 font-bold">Fast Static HIT</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Request after 60s:</span>
              <span className="text-teal-400 font-semibold">Serve STALE + Revalidate BG</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Subsequent Hits:</span>
              <span className="text-emerald-400 font-bold">Fresh Static HIT Served</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Static Cache (SSG)"
            description="Explore build-time pre-rendering."
            renderingType="STATIC"
            href="/cache-lab/static"
          />
          <ModuleCard
            title="Dynamic Cache (SSR)"
            description="Explore fresh server hits per request."
            renderingType="DYNAMIC"
            href="/cache-lab/dynamic"
          />
          <ModuleCard
            title="Server Actions Lab"
            description="Triggering revalidateTag inside Server Actions."
            renderingType="SERVER"
            href="/actions-lab"
          />
        </div>
      </SectionCard>
    </div>
  );
}
