import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Server Actions Lab | Next.js SSR Lab",
  description: "Server Actions, form mutations, and cache revalidation.",
};

export default function ActionsLabPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Server Actions & Form Mutations"
        description="Demonstrates asynchronous server functions ('use server') executed directly on the server to handle form submissions, database updates, and instant cache revalidation."
        renderingType="SERVER"
        category="Server Actions"
      />

      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server Runtime"
        cachingStrategy="revalidatePath() / revalidateTag() post-mutation"
        dynamicApis="'use server' async functions"
        description="Server Actions eliminate the need to manually build separate API routes for form submissions. They run securely on the server and seamlessly return updated state to the UI."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Creating inline and exported Server Actions with the <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">&apos;use server&apos;</code> directive.</li>
            <li>Handling form submissions progressively (works even with JS disabled).</li>
            <li>Using React hooks like <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">useActionState</code> and <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">useFormStatus</code>.</li>
            <li>Revalidating route caches immediately after mutating data.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Server Action Form Mutation Mock" icon="⚡">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-slate-400">Server Action Signature:</span>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-blue-400">
                async function addProductAction(formData: FormData)
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400">Cache Invalidation Trigger:</span>
              <div className="p-2 rounded bg-slate-900 border border-slate-800 text-teal-400">
                revalidatePath(&apos;/products&apos;)
              </div>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="Product Catalog"
            description="View product catalog updated by actions."
            renderingType="DYNAMIC"
            href="/products"
          />
          <ModuleCard
            title="Request Inspector"
            description="Inspect server cookies & request headers."
            renderingType="SERVER"
            href="/request-inspector"
          />
          <ModuleCard
            title="Revalidation (ISR)"
            description="Revalidate caches on-demand."
            renderingType="REVALIDATED"
            href="/cache-lab/revalidate"
          />
        </div>
      </SectionCard>
    </div>
  );
}
