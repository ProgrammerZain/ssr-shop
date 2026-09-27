import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "CSR Demonstration Lab | Next.js SSR Lab",
  description: "Comparing Client-Side Rendering (CSR) with React Server Components.",
};

export default function CsrDemoPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Client-Side Rendering (CSR) Comparison"
        description="Examines how traditional Client Components ('use client') hydrate in the browser, execute client hooks (useEffect, useState), and manage local state."
        renderingType="CLIENT"
        category="CSR Architecture"
      />

      <RenderingInfo
        renderingType="CLIENT"
        executionTarget="Browser Client"
        cachingStrategy="Client-side React State / SWR / React Query"
        dynamicApis="useEffect() / useState() / window APIs"
        description="Client Components send JavaScript bundles to the browser for hydration. They enable rich interactive widgets, stateful forms, and real-time event listeners."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>When and why to add the <code className="text-amber-400 bg-slate-900 px-1 py-0.5 rounded">&apos;use client&apos;</code> directive.</li>
            <li>Understanding React hydration: matching server HTML with client DOM trees.</li>
            <li>Avoiding common hydration mismatches (e.g. date formatting, window object access).</li>
            <li>Keeping client bundle sizes minimal by pushing interactivity down the component tree.</li>
          </ul>
        </SectionCard>

        <SectionCard title="CSR Lifecycle Architecture" icon="⚛️">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <span>1. Download JS Bundle</span>
              <span>&rarr;</span>
              <span>Browser receives React runtime</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400 font-bold">
              <span>2. Hydration Phase</span>
              <span>&rarr;</span>
              <span>Attaching event listeners to DOM</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold">
              <span>3. Interactive State</span>
              <span>&rarr;</span>
              <span>useEffect & useState active</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="SSR Demo Lab"
            description="Compare Client Rendering with Server Components."
            renderingType="DYNAMIC"
            href="/ssr-demo"
          />
          <ModuleCard
            title="Catalog Search"
            description="Practical Client Component search filtering."
            renderingType="CLIENT"
            href="/search"
          />
          <ModuleCard
            title="Server Actions Lab"
            description="Combining Client Forms with Server Actions."
            renderingType="SERVER"
            href="/actions-lab"
          />
        </div>
      </SectionCard>
    </div>
  );
}
