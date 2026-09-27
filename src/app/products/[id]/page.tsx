import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;
  return {
    title: `Product #${id} | Next.js SSR Lab`,
    description: `Dynamic product detail view for ID ${id}.`,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title={`Product Detail View (ID: ${id})`}
        description="Demonstrates dynamic route segment parameter extraction and server-side data fetching for individual product IDs."
        renderingType="DYNAMIC"
        category="Products / Detail"
      />

      <RenderingInfo
        renderingType="DYNAMIC"
        executionTarget="Node.js Server"
        cachingStrategy="Dynamic params evaluation per URL segment"
        dynamicApis={`params.id = "${id}"`}
        description="In Next.js App Router, dynamic params are resolved asynchronously on the server. The server reads the segment parameter directly from the route URL to fetch tailored item details."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Handling dynamic route parameters in Next.js App Router (<code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">params: Promise</code>).</li>
            <li>Generating dynamic page metadata dynamically via <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">generateMetadata()</code>.</li>
            <li>Combining dynamic segment parameters with static pre-rendering (<code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">generateStaticParams</code>).</li>
          </ul>
        </SectionCard>

        <SectionCard title="Product Detail Wireframe" icon="🔍">
          <div className="p-5 rounded-lg bg-slate-950/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-xs font-mono text-slate-400">SKU: PROD-{id}009</span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">In Stock</span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">
              Sample High-Performance Product #{id}
            </h3>
            <p className="text-slate-400 text-sm">
              Detailed product metadata, customer reviews, inventory status, and pricing will be loaded here dynamically.
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-2xl font-bold text-blue-400">$199.99</span>
              <Link
                href="/products"
                className="text-xs text-slate-300 hover:text-white underline font-mono"
              >
                &larr; Back to Catalog
              </Link>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Product Catalog"
            description="Explore the full dynamic SSR product list."
            renderingType="DYNAMIC"
            href="/products"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Pre-rendering detail pages with background revalidation."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
          <ModuleCard
            title="Server Actions Lab"
            description="Executing cart mutations via Server Actions."
            renderingType="SERVER"
            href="/actions-lab"
          />
        </div>
      </SectionCard>
    </div>
  );
}
