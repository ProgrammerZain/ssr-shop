import Link from "next/link";
import { getProducts } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { ProductCard } from "@/components/ProductCard";

export const metadata = {
  title: "Static Caching (SSG) | Cache Lab",
  description: "Static pre-rendering with persistent force-cache Data Cache.",
};

// Explicit static route configuration
export const dynamic = "force-static";

export default async function StaticCachePage() {
  const currentRenderTimestamp = new Date().toISOString();

  // Fetch product data with persistent caching
  const data = await getProducts({ cache: "force-cache" });
  const products = data.products.slice(0, 3);
  const dataTimestamp =
    products[0]?.meta?.updatedAt || currentRenderTimestamp;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Static Data Caching (SSG)"
        description="Demonstrates persistent Data Cache. Data fetched with { cache: 'force-cache' } is cached indefinitely at build time."
        renderingType="STATIC"
        category="Cache Lab / Static"
      />

      {/* Core Principle Banner */}
      <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-slate-200 text-xs sm:text-sm font-mono">
        <span className="text-emerald-400 font-bold">Fetch Config: </span>
        <code className="bg-slate-900 px-2 py-0.5 rounded text-slate-100">
          fetch(&apos;https://dummyjson.com/products&apos;, &#123; cache:
          &apos;force-cache&apos; &#125;)
        </code>
      </div>

      <RenderingInfo
        renderingType="STATIC"
        executionTarget="Build-time Pre-render"
        cachingStrategy="force-cache (Cached Indefinitely)"
        dynamicApis={`Current Render: ${currentRenderTimestamp} | Data Timestamp: ${dataTimestamp}`}
        description="Refreshing this page will NOT trigger new API requests or update the current render timestamp, because the output is statically served from cache."
      />

      {/* Diagnostics Panel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
          <div className="text-slate-400 font-sans text-xs">
            Current Server Render Timestamp
          </div>
          <div className="text-emerald-400 font-bold text-sm truncate">
            {currentRenderTimestamp}
          </div>
          <p className="text-[11px] text-slate-500 font-sans pt-1">
            Fixed at build time / static generation pass.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
          <div className="text-slate-400 font-sans text-xs">
            Data Cache Status
          </div>
          <div className="text-blue-400 font-bold text-sm">
            HIT (Persistent Storage)
          </div>
          <p className="text-[11px] text-slate-500 font-sans pt-1">
            Bypasses external network API calls.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
          <span>📦</span> Statically Cached Products ({products.length} Items)
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
          href="/cache-lab"
          className="text-xs text-slate-400 hover:text-white underline font-mono"
        >
          &larr; Back to Cache Lab Overview
        </Link>
        <Link
          href="/cache-lab/dynamic"
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
        >
          Compare with Dynamic Bypass &rarr;
        </Link>
      </div>
    </div>
  );
}
