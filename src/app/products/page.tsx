import { getProducts } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ProductCard } from "@/components/ProductCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Product Catalog (SSR) | Next.js SSR Lab",
  description:
    "Live Server-Side Rendered product catalog fetched from DummyJSON API.",
};

// Force dynamic server rendering on every request to demonstrate SSR
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const renderTimestamp = new Date().toISOString();

  // Artificial server delay of ~2 seconds to clearly observe server rendering & loading.tsx
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Fetch product data on the server runtime
  const data = await getProducts();
  const products = data.products;

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-4">
      <PageHeader
        title="Server-Rendered Product Catalog"
        description="This page fetches live product data directly on the Node.js server from DummyJSON before rendering full HTML to the browser."
        renderingType="DYNAMIC"
        category="Live SSR Demonstration"
      />

      {/* Visual Architectural Explanation */}
      <SectionCard title="Server-Side Rendering (SSR) Execution Flow" icon="⚡">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center py-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              Request
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
              Next.js Server
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              Fetch Product API
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              Generate HTML
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold">
              Browser
            </span>
          </div>
        </div>
      </SectionCard>

      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server"
        cachingStrategy="DummyJSON (https://dummyjson.com/products)"
        dynamicApis={`Rendered at: ${renderTimestamp} | Route: /products`}
        description="The products below were fetched on the Node.js server runtime during this request. No client-side fetch, SWR, or useEffect was used."
      />

      {/* Live Product Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span>📦</span> Live Product Listings ({products.length} Products Loaded)
          </h2>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            Data Source: DummyJSON API
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Product Detail Page"
            description="Dynamic segment SSR for individual product IDs."
            renderingType="DYNAMIC"
            href="/products/1"
          />
          <ModuleCard
            title="Catalog Search"
            description="Interactive client-side filtering via searchParams."
            renderingType="CLIENT"
            href="/search"
          />
          <ModuleCard
            title="SSR Deep Dive"
            description="Learn more about Next.js SSR architecture."
            renderingType="DYNAMIC"
            href="/ssr-demo"
          />
        </div>
      </SectionCard>
    </div>
  );
}
