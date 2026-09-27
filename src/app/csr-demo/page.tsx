"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Product, ProductsResponse } from "@/types/product";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductCardSkeleton } from "@/components/skeletons/ProductCardSkeleton";
import { InspectionGuide } from "@/components/InspectionGuide";

export default function CsrDemoPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [clientTimestamp, setClientTimestamp] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProductsFromBrowser() {
      setIsLoading(true);
      try {
        // Artificial client-side delay of 1.5s to observe client spinner & DevTools network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await fetch("https://dummyjson.com/products?limit=6");
        if (!response.ok) {
          throw new Error(`Client fetch failed with status ${response.status}`);
        }

        const data = (await response.json()) as ProductsResponse;

        if (isMounted) {
          setProducts(data.products);
          setClientTimestamp(new Date().toISOString());
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Client network error");
          setIsLoading(false);
        }
      }
    }

    fetchProductsFromBrowser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Client-Side Rendering (CSR) Live Demonstration"
        description="This page starts with empty markup from the server. React executes in the browser, triggers a client-side fetch(), and updates the DOM dynamically."
        renderingType="CLIENT"
        category="Rendering Comparison / CSR"
      />

      {/* Visual Architectural Diagram */}
      <SectionCard title="CSR Execution Sequence" icon="⚛️">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center py-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              Browser Request
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              HTML / JS Bundle
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
              React executes (useEffect)
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              API Request
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold">
              UI updates
            </span>
          </div>
        </div>
      </SectionCard>

      {/* Diagnostics */}
      <RenderingInfo
        renderingType="CLIENT"
        executionTarget="Browser Client"
        cachingStrategy="useEffect() + fetch('https://dummyjson.com/products')"
        dynamicApis={`Client Timestamp: ${clientTimestamp || "Fetching in browser..."}`}
        description="The product data on this page is fetched by the user's browser. Inspecting the Network tab in DevTools will show a direct request to dummyjson.com."
      />

      {/* Side-by-Side Comparison Navigation Bar */}
      <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-amber-400">
            Compare with Server-Side Rendering
          </h3>
          <p className="text-slate-300 text-xs mt-0.5">
            Switch to the SSR demo page to see how server-rendered HTML eliminates client-side loading spinners.
          </p>
        </div>
        <Link
          href="/ssr-demo"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shrink-0"
        >
          View SSR Demo &rarr;
        </Link>
      </div>

      {/* Product Content Grid & Client States */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <span>⚛️</span> Client-Fetched Product Grid
          </h2>
          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            {isLoading ? "Client Loading..." : `${products.length} Products Loaded`}
          </span>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        )}

        {error && (
          <div className="p-6 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-sm font-mono space-y-2">
            <div className="font-bold text-base">⚠️ Client Fetch Error</div>
            <div>{error}</div>
          </div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Educational Inspection Guide */}
      <InspectionGuide
        questions={{
          executionLocation: "Browser Client Runtime",
          apiRequestTime: "After page mounts in browser (useEffect)",
          isHtmlServerGenerated: false,
          browserReceives: "Minimal HTML wrapper shell + React JavaScript bundle",
          networkTabOutput: "GET https://dummyjson.com/products?limit=6 (200 OK)",
          jsRequiredInBrowser: true,
          isResultCached: "No (Client SWR/fetch state)",
          dataRegenerationTime: "Whenever component mounts or state resets",
        }}
        inspectionSteps={{
          viewSourceTip:
            "Press Ctrl+U or View Source. Notice that the initial HTML does NOT contain the product titles. The container is empty until JS runs.",
          networkTabTip:
            "Open Network tab and filter by 'Fetch/XHR'. Reload the page. You will see an explicit GET request to dummyjson.com dispatched by the browser!",
          devToolsTip:
            "Observe the DOM during load: it starts with loading skeletons, then mutates once React receives the JSON response.",
          serverTerminalTip:
            "Check your server logs. The Node.js server only served the static client shell; it did NOT touch dummyjson.com.",
        }}
      />
    </div>
  );
}
