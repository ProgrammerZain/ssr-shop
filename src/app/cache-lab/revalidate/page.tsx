import Link from "next/link";
import { getProducts } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { ProductCard } from "@/components/ProductCard";

export const metadata = {
  title: "Revalidation (ISR) | Cache Lab",
  description:
    "Time-based Incremental Static Regeneration with 10-second revalidation.",
};

// Set time-based revalidation to 10 seconds
export const revalidate = 10;

export default async function RevalidateCachePage() {
  const currentRenderTimestamp = new Date().toISOString();

  // Fetch product data with 10-second revalidation window
  const data = await getProducts({ next: { revalidate: 10 } });
  const products = data.products.slice(0, 3);

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Time-Based Revalidation (ISR)"
        description="Demonstrates Incremental Static Regeneration. Data is pre-rendered statically and automatically revalidated in the background every 10 seconds."
        renderingType="REVALIDATED"
        category="Cache Lab / Revalidation"
      />

      {/* Core Principle Banner */}
      <div className="p-4 rounded-xl border border-teal-500/30 bg-teal-500/10 text-slate-200 text-xs sm:text-sm font-mono">
        <span className="text-teal-400 font-bold">Fetch Config: </span>
        <code className="bg-slate-900 px-2 py-0.5 rounded text-slate-100">
          fetch(&apos;https://dummyjson.com/products&apos;, &#123; next: &#123;
          revalidate: 10 &#125; &#125;)
        </code>
      </div>

      <RenderingInfo
        renderingType="REVALIDATED"
        executionTarget="Build-time Pre-render + Background Revalidation"
        cachingStrategy="Stale-While-Revalidate (10 Seconds)"
        dynamicApis={`Render Timestamp: ${currentRenderTimestamp} | Revalidate Window: 10s`}
        description="Refreshing within 10 seconds serves the cached static page instantly. Refreshing after 10 seconds triggers a background revalidation update."
      />

      {/* Diagnostics Panel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
          <div className="text-slate-400 font-sans text-xs">
            Current Server Render Timestamp
          </div>
          <div className="text-teal-400 font-bold text-sm truncate">
            {currentRenderTimestamp}
          </div>
          <p className="text-[11px] text-slate-500 font-sans pt-1">
            Updates when revalidation window expires (10s).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
          <div className="text-slate-400 font-sans text-xs">
            Data Revalidation Strategy
          </div>
          <div className="text-emerald-400 font-bold text-sm">
            STALE-WHILE-REVALIDATE (10s)
          </div>
          <p className="text-[11px] text-slate-500 font-sans pt-1">
            Serves cached content fast while updating BG.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
          <span>📦</span> Revalidated Products ({products.length} Items)
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
          href="/cache-lab/dynamic"
          className="text-xs text-slate-400 hover:text-white underline font-mono"
        >
          &larr; Back to Dynamic Bypass
        </Link>
        <Link
          href="/cache-lab"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
        >
          Return to Cache Lab Overview &rarr;
        </Link>
      </div>
    </div>
  );
}
