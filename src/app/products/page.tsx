import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Product Catalog | Next.js SSR Lab",
  description: "Dynamic product store module evaluating SSR data fetching.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Product Catalog Lab"
        description="This module demonstrates fetching dynamic product listings on demand using Server-Side Rendering (SSR) from a mock e-commerce API."
        renderingType="DYNAMIC"
        category="Products Module"
      />

      <RenderingInfo
        renderingType="DYNAMIC"
        executionTarget="Node.js Server"
        cachingStrategy="cache: 'no-store' (Fresh on each request)"
        dynamicApis="searchParams / headers"
        description="When a user navigates to this catalog, Next.js executes the Server Component on the Node.js runtime per HTTP request, fetching fresh product lists without client-side waterfalls."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Fetching async data directly inside Server Components.</li>
            <li>Eliminating client-side loading spinners and layout shift.</li>
            <li>Passing server-fetched data seamlessly down to child UI components.</li>
            <li>Handling loading fallbacks with route-level <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">loading.tsx</code>.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Catalog Visualizer Preview" icon="📦">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 text-center">
            <div className="text-3xl">🛒</div>
            <h3 className="font-semibold text-slate-200 text-sm">Product Grid Demo Placeholder</h3>
            <p className="text-slate-400 text-xs">
              Mock product cards (e.g. Headphones, Laptops, Keyboards) will render dynamically here once the API layer is wired up.
            </p>
            <Link
              href="/products/1"
              className="inline-block text-xs font-mono text-blue-400 hover:underline pt-1"
            >
              Test Dynamic Route: /products/1 &rarr;
            </Link>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Product Detail Page"
            description="Dynamic segment routing with /products/[id]."
            renderingType="DYNAMIC"
            href="/products/1"
          />
          <ModuleCard
            title="Catalog Search"
            description="Client-side filtering with URL search params."
            renderingType="CLIENT"
            href="/search"
          />
          <ModuleCard
            title="Cache Lab"
            description="Comparing static vs dynamic caching strategies."
            renderingType="STATIC"
            href="/cache-lab"
          />
        </div>
      </SectionCard>
    </div>
  );
}
