import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { Badge } from "@/components/Badge";
import { ModuleCard } from "@/components/ModuleCard";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found | Next.js SSR Lab",
      description: "Requested product could not be located.",
    };
  }

  return {
    title: `${product.title} | Next.js SSR Lab`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  // Validate ID format
  const numericId = Number(id);
  if (isNaN(numericId) || numericId <= 0) {
    notFound();
  }

  // Artificial server delay to observe loading state & server rendering
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const product = await getProduct(numericId);

  if (!product) {
    notFound();
  }

  const renderTimestamp = new Date().toISOString();

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title={product.title}
        description={`Dynamic server-rendered product detail view for Product ID #${product.id}.`}
        renderingType="SERVER"
        category="Products / Detail"
      />

      {/* Visual Architectural Diagram */}
      <SectionCard title="Dynamic Server Execution Flow" icon="⚡">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center py-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              Browser requests /products/{id}
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
              Next.js Server
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              Fetch /products/{id}
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

      {/* Render Diagnostics */}
      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server"
        cachingStrategy={`DummyJSON (https://dummyjson.com/products/${product.id})`}
        dynamicApis={`Product ID: #${product.id} | Route: /products/${product.id} | Rendered: ${renderTimestamp}`}
        description="This detail page was dynamically resolved and rendered on the Node.js server runtime per request URL segment."
      />

      {/* Product Detail Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg">
        {/* Product Image */}
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-slate-950/80 border border-slate-800/80 flex items-center justify-center p-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Meta Info */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge variant="blue">{product.category}</Badge>
              <div className="flex items-center gap-1 text-sm font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <span>⭐</span>
                <span>{product.rating.toFixed(1)} / 5.0</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              {product.title}
            </h2>

            {product.brand && (
              <div className="text-xs font-mono text-slate-400">
                Brand: <span className="text-slate-200 font-semibold">{product.brand}</span>
              </div>
            )}

            <p className="text-slate-300 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-500 font-sans text-[10px] uppercase">Availability</div>
                <div
                  className={`font-semibold mt-0.5 ${
                    product.stock > 0 ? "text-emerald-400" : "text-rose-400"
                  }`}
                >
                  {product.stock > 0
                    ? `In Stock (${product.stock} units)`
                    : "Out of Stock"}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                <div className="text-slate-500 font-sans text-[10px] uppercase">SKU Code</div>
                <div className="text-slate-200 font-semibold mt-0.5">
                  {product.sku || `PROD-${product.id}`}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400">Price</div>
              <div className="text-3xl font-extrabold text-slate-100 font-mono">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/products"
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
              >
                &larr; Back to Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Modules */}
      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Product Catalog"
            description="View full server-rendered product listing."
            renderingType="DYNAMIC"
            href="/products"
          />
          <ModuleCard
            title="Catalog Search"
            description="Filter products dynamically on the client."
            renderingType="CLIENT"
            href="/search"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Pre-render product pages with ISR."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
        </div>
      </SectionCard>
    </div>
  );
}
