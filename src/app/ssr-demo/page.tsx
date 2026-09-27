import Link from "next/link";
import { getProducts } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ProductCard } from "@/components/ProductCard";
import { InspectionGuide } from "@/components/InspectionGuide";

export const metadata = {
  title: "Server-Side Rendering (SSR) Demo | Next.js SSR Lab",
  description:
    "Live demonstration of Server-Side Rendering (SSR) in Next.js App Router.",
};

// Force dynamic server rendering per request
export const dynamic = "force-dynamic";

export default async function SsrDemoPage() {
  const serverTimestamp = new Date().toISOString();

  // Artificial delay so server execution & loading state can be observed
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Fetch product data directly on the Node.js server
  const data = await getProducts();
  const products = data.products.slice(0, 6);

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Server-Side Rendering (SSR) Live Demonstration"
        description="Data fetching and HTML generation occur entirely on the Node.js server before any bytes are transmitted to the browser."
        renderingType="DYNAMIC"
        category="Rendering Comparison / SSR"
      />

      {/* Visual Architectural Diagram */}
      <SectionCard title="SSR Execution Sequence" icon="🖥️">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center py-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              Browser Request
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
              Next.js Server
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              Fetch API (DummyJSON)
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              Generate HTML Payload
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold">
              Browser Render
            </span>
          </div>
        </div>
      </SectionCard>

      {/* Diagnostics */}
      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server"
        cachingStrategy="cache: 'no-store' (Server Execution)"
        dynamicApis={`Server Render Timestamp: ${serverTimestamp}`}
        description="The product cards below were rendered into full HTML on the server. Viewing Page Source (Ctrl+U) reveals full product HTML directly in the initial document."
      />

      {/* Side-by-Side Comparison Navigation Bar */}
      <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-blue-400">
            Compare with Client-Side Rendering
          </h3>
          <p className="text-slate-300 text-xs mt-0.5">
            Switch to the CSR demo page to see how client-side fetching behaves differently in DevTools and the DOM.
          </p>
        </div>
        <Link
          href="/csr-demo"
          className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shrink-0"
        >
          View CSR Demo &rarr;
        </Link>
      </div>

      {/* Product Content Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
          <span>📦</span> Server-Fetched Product Grid ({products.length} Items)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Educational Inspection Guide */}
      <InspectionGuide
        questions={{
          executionLocation: "Node.js Server Runtime",
          apiRequestTime: "On incoming HTTP GET request (Server-side)",
          isHtmlServerGenerated: true,
          browserReceives: "Fully populated HTML document with product markup",
          networkTabOutput: "GET /ssr-demo (200 OK) — Zero outbound dummyjson requests",
          jsRequiredInBrowser: false,
          isResultCached: "No (bypassed via no-store / force-dynamic)",
          dataRegenerationTime: "On every incoming HTTP request hit",
        }}
        inspectionSteps={{
          viewSourceTip:
            "Press Ctrl+U or right-click 'View Page Source'. Search for 'Essence Mascara'. You will find the full text pre-populated in the HTML.",
          networkTabTip:
            "Open Network tab and filter by 'Fetch/XHR'. Reload the page. Notice that NO outbound calls to dummyjson.com appear in the browser.",
          devToolsTip:
            "Inspect the page elements. The <h3> product title tags exist in the initial HTML before any client JavaScript executes.",
          serverTerminalTip:
            "Look at your Node.js dev server terminal output. You will see Next.js compiling and executing the async Server Component.",
        }}
      />
    </div>
  );
}
