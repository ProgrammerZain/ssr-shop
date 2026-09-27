import { ModuleCard } from "@/components/ModuleCard";
import { RenderingBadge } from "@/components/RenderingBadge";

export default function HomePage() {
  return (
    <div className="space-y-12 max-w-6xl mx-auto py-2">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Interactive Learning Lab Foundation
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Next.js SSR Lab
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mt-2">
            Dynamic Product Store
          </span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
          Explore Server-Side Rendering (SSR), Client-Side Rendering (CSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), Server Actions, and Caching strategies in Next.js App Router.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <RenderingBadge type="SERVER" />
          <RenderingBadge type="CLIENT" />
          <RenderingBadge type="STATIC" />
          <RenderingBadge type="DYNAMIC" />
          <RenderingBadge type="REVALIDATED" />
        </div>
      </section>

      {/* Primary Module Roadmaps */}
      <section className="space-y-8">
        {/* Category 1: Products & Rendering Modes */}
        <div className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>🛍️</span> Products & Rendering Strategies
            </h2>
            <p className="text-slate-400 text-xs">
              Comparing dynamic server fetching with dynamic routing and client search
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModuleCard
              title="Product Catalog"
              description="Dynamic Server-Side Rendered (SSR) product listing hub."
              renderingType="DYNAMIC"
              status="Module 1"
              href="/products"
            />
            <ModuleCard
              title="Product Detail Page"
              description="Dynamic route parameter extraction (/products/[id])."
              renderingType="DYNAMIC"
              status="Module 2"
              href="/products/1"
            />
            <ModuleCard
              title="Catalog Search"
              description="Client-side filtering with URL query searchParams."
              renderingType="CLIENT"
              status="Module 3"
              href="/search"
            />
          </div>
        </div>

        {/* Category 2: SSR vs CSR Comparisons */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>⚡</span> SSR vs. CSR Deep Dives
            </h2>
            <p className="text-slate-400 text-xs">
              Comparing server-side HTML streaming vs client-side hydration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ModuleCard
              title="SSR Deep Dive"
              description="On-demand server rendering per HTTP request."
              renderingType="DYNAMIC"
              status="Module 4"
              href="/ssr-demo"
            />
            <ModuleCard
              title="CSR Comparison"
              description="Client Components ('use client') & React state hydration."
              renderingType="CLIENT"
              status="Module 5"
              href="/csr-demo"
            />
            <ModuleCard
              title="Request Inspector"
              description="Inspecting HTTP headers & cookies on the Node.js server."
              renderingType="SERVER"
              status="Module 6"
              href="/request-inspector"
            />
          </div>
        </div>

        {/* Category 3: Caching & Server Actions */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span>🧪</span> Caching, ISR & Server Actions
            </h2>
            <p className="text-slate-400 text-xs">
              Understanding Next.js cache layers, static pre-rendering, and mutations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard
              title="Cache Lab Overview"
              description="Understanding Request Memoization, Data Cache & Route Cache."
              renderingType="STATIC"
              status="Module 7"
              href="/cache-lab"
            />
            <ModuleCard
              title="Static Cache (SSG)"
              description="Build-time pre-rendering with force-cache."
              renderingType="STATIC"
              status="Module 8"
              href="/cache-lab/static"
            />
            <ModuleCard
              title="Dynamic Bypass"
              description="Bypassing data cache with no-store."
              renderingType="DYNAMIC"
              status="Module 9"
              href="/cache-lab/dynamic"
            />
            <ModuleCard
              title="Revalidation (ISR)"
              description="Time & tag based incremental regeneration."
              renderingType="REVALIDATED"
              status="Module 10"
              href="/cache-lab/revalidate"
            />
          </div>

          <div className="pt-2">
            <ModuleCard
              title="Server Actions & Form Mutations"
              description="Executing secure server functions ('use server') for mutations and instant cache revalidation."
              renderingType="SERVER"
              status="Module 11"
              href="/actions-lab"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
