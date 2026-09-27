import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Search & Filtering | Next.js SSR Lab",
  description: "Client component search and filter module using URL search params.",
};

export default function SearchPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Live Catalog Search & Filtering"
        description="Demonstrates integrating Client Components with URL search parameters (useSearchParams) for instant, shareable UI state."
        renderingType="CLIENT"
        category="Interactive Search"
      />

      <RenderingInfo
        renderingType="CLIENT"
        executionTarget="Browser Client"
        cachingStrategy="URL Query String State (searchParams)"
        dynamicApis="useSearchParams() / useRouter()"
        description="Search input fields and filters mandate client-side event listeners (onChange, onClick) and instant URL synchronization via useSearchParams."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Syncing interactive input values with URL query parameters.</li>
            <li>Wrapping <code className="text-amber-400 bg-slate-900 px-1 py-0.5 rounded">useSearchParams()</code> inside <code className="text-amber-400 bg-slate-900 px-1 py-0.5 rounded">Suspense</code> boundaries for static build compatibility.</li>
            <li>Debouncing search inputs to reduce redundant URL updates.</li>
            <li>Combining Server Component data rendering with Client Component controls.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Search UI Interactive Mock" icon="🔎">
          <div className="p-5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 uppercase">
                Search Query Input Placeholder
              </label>
              <input
                type="text"
                disabled
                placeholder="Type to filter products..."
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-400 cursor-not-allowed"
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">Category: All</span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">Price: &lt; $200</span>
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">Sort: Price Low-High</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="CSR Demo Lab"
            description="Explore Client Components and client-side rendering."
            renderingType="CLIENT"
            href="/csr-demo"
          />
          <ModuleCard
            title="SSR Demo Lab"
            description="Compare Client search with Server-side rendering."
            renderingType="DYNAMIC"
            href="/ssr-demo"
          />
          <ModuleCard
            title="Product Catalog"
            description="View full server-rendered product listing."
            renderingType="DYNAMIC"
            href="/products"
          />
        </div>
      </SectionCard>
    </div>
  );
}
