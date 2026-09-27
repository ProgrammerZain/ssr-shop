import Link from "next/link";
import { getProducts } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { ProductCard } from "@/components/ProductCard";

export const metadata = {
  title: "Dynamic Caching Bypass | Cache Lab",
  description: "Dynamic server-side rendering with no-store Data Cache bypass.",
};

// Force dynamic server rendering per request
export const dynamic = "force-dynamic";

export default async function DynamicCachePage() {
  const currentRenderTimestamp = new Date().toISOString();

  // Fetch product data bypassing Data Cache
  const data = await getProducts({ cache: "no-store" });
  const products = data.products.slice(0, 3);

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Dynamic Cache Bypass (no-store)"
        description="Demonstrates 100% fresh dynamic execution. Data fetched with { cache: 'no-store' } bypasses Data Cache on every HTTP hit."
        renderingType="DYNAMIC"
        category="Cache Lab / Dynamic"
      />

      {/* Core Principle Banner */}
      <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/10 text-slate-200 text-xs sm:text-sm font-mono">
        <span className="text-purple-400 font-bold">Fetch Config: </span>
        <code className="bg-slate-900 px-2 py-0.5 rounded text-slate-100">
          fetch(&apos;https://dummyjson.com/products&apos;, &#123; cache:
          &apos;no-store&apos; &#125;)
        </code>
      </div>

      <RenderingInfo
        renderingType="DYNAMIC"
        executionTarget="Node.js Server Runtime"
        cachingStrategy="cache: 'no-store' (Bypassed)"
        dynamicApis={`Current Render: ${currentRenderTimestamp}`}
        description="Refreshing this page WILL generate a new render timestamp and re-fetch fresh product data directly from the API on every single request hit."
      />

      {/* Diagnostics Panel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
          <div className="text-slate-400 font-sans text-xs">
            Current Server Render Timestamp
          </div>
          <div className="text-purple-400 font-bold text-sm truncate">
            {currentRenderTimestamp}
          </div>
          <p className="text-[11px] text-slate-500 font-sans pt-1">
            Generates fresh value on every refresh.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
          <div className="text-slate-400 font-sans text-xs">
            Data Cache Status
          </div>
          <div className="text-amber-400 font-bold text-sm">BYPASSED (MISS)</div>
          <p className="text-[11px] text-slate-500 font-sans pt-1">
            Forces live HTTP request to DummyJSON.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
          <span>📦</span> Fresh Dynamically Fetched Products ({products.length} Items)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <Link
          href="/cache-lab/static"
          className="text-xs text-slate-400 hover:text-white underline font-mono"
        >
          &larr; Back to Static Cache
        </Link>
        <Link
          href="/cache-lab/revalidate"
          className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors"
        >
          Compare with Revalidation (ISR) &rarr;
        </Link>
      </div>
    </div>
  );
}
