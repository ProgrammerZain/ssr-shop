import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";
import { ProductForm, ProductItem } from "@/components/ProductForm";

export const metadata = {
  title: "Server Actions Lab | Next.js SSR Lab",
  description: "Learn React 19 Actions and Next.js Server Actions for mutations.",
};

// Initial in-memory dataset for demonstration
const initialProducts: ProductItem[] = [
  {
    id: 1,
    title: "Pro Noise-Canceling Headphones",
    price: 299.99,
    category: "Audio",
  },
  {
    id: 2,
    title: "Mechanical RGB Gaming Keyboard",
    price: 149.50,
    category: "Electronics",
  },
  {
    id: 3,
    title: "Ergonomic Wireless Mouse",
    price: 79.99,
    category: "Accessories",
  },
];

export default function ActionsLabPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Server Actions & React 19 Mutations Lab"
        description="Demonstrates secure, end-to-end data mutations using Next.js Server Actions ('use server') and React 19 hooks (useActionState, useFormStatus, useOptimistic)."
        renderingType="SERVER"
        category="Server Actions Architecture"
      />

      {/* Visual Architectural Sequence Diagram */}
      <SectionCard title="Server Action Mutation Sequence" icon="⚡">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 font-mono text-xs sm:text-sm text-slate-200">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center py-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold">
              Browser
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
              Form Submit
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
              Server Action (&apos;use server&apos;)
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              Server Mutation
            </span>
            <span className="text-slate-500">&rarr;</span>
            <span className="px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-bold">
              Updated UI (revalidatePath)
            </span>
          </div>
        </div>
      </SectionCard>

      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server Runtime"
        cachingStrategy="revalidatePath('/actions-lab')"
        dynamicApis="'use server' async functions"
        description="Server Actions execute securely on the Node.js server. They eliminate manual API endpoints, request body parsing, and explicit fetch boilerplate."
      />

      {/* Interactive Mutation Form & Product List */}
      <ProductForm initialProducts={initialProducts} />

      {/* Architectural Comparison Section */}
      <SectionCard
        title="How Server Actions Differ from REST APIs & Route Handlers"
        icon="⚖️"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 space-y-2">
            <h3 className="font-bold text-blue-400 flex items-center gap-1.5">
              <span>⚡</span> Server Actions
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Exported async functions with <code className="text-blue-300">&apos;use server&apos;</code>. Called directly from forms or buttons. Automatically handles serialization, CSRF, and cache revalidation with zero API route boilerplate.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 space-y-2">
            <h3 className="font-bold text-amber-400 flex items-center gap-1.5">
              <span>🌐</span> Route Handlers (<code className="text-amber-300">app/api/...</code>)
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Manual HTTP endpoints returning JSON (<code className="text-amber-300">NextResponse.json()</code>). Requires writing client <code className="text-amber-300">fetch(&apos;/api/products&apos;)</code>, parsing response bodies, and managing loading states manually.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/20 space-y-2">
            <h3 className="font-bold text-purple-400 flex items-center gap-1.5">
              <span>🔌</span> Traditional REST / Django APIs
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              External HTTP web services. Requires managing full CORS, authentication headers, API client libraries, and manual state synchronization between client and server.
            </p>
          </div>
        </div>
      </SectionCard>

      {/* Related Modules */}
      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Request Inspector"
            description="Inspect server-side request headers & cookies."
            renderingType="SERVER"
            href="/request-inspector"
          />
          <ModuleCard
            title="Product Catalog"
            description="View products updated by server actions."
            renderingType="DYNAMIC"
            href="/products"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Understand cache revalidation mechanics."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
        </div>
      </SectionCard>
    </div>
  );
}
