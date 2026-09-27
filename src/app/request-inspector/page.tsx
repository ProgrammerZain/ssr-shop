import { PageHeader } from "@/components/PageHeader";
import { RenderingInfo } from "@/components/RenderingInfo";
import { SectionCard } from "@/components/SectionCard";
import { ModuleCard } from "@/components/ModuleCard";

export const metadata = {
  title: "Request Inspector | Next.js SSR Lab",
  description: "Server-side HTTP request inspector for headers and cookies.",
};

export default function RequestInspectorPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4">
      <PageHeader
        title="Server Request & Header Inspector"
        description="Demonstrates reading HTTP request headers, cookies, IP addresses, and user-agent data directly inside Server Components on the Node.js runtime."
        renderingType="SERVER"
        category="Request Diagnostics"
      />

      <RenderingInfo
        renderingType="SERVER"
        executionTarget="Node.js Server"
        cachingStrategy="Opt-in Dynamic (Opt out of static caching via headers()/cookies())"
        dynamicApis="headers() / cookies()"
        description="Reading server request headers or cookies automatically opts a route segment into dynamic server-side rendering, ensuring request-specific context is evaluated on the server."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard title="What You Will Learn" icon="🎓">
          <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
            <li>Using Next.js <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">headers()</code> and <code className="text-blue-400 bg-slate-900 px-1 py-0.5 rounded">cookies()</code> helper functions.</li>
            <li>Inspecting User-Agent string to tailor server-rendered layouts for mobile vs desktop.</li>
            <li>How accessing request headers opts a page out of static pre-rendering.</li>
            <li>Handling authentication tokens securely on the server without exposing secrets to client bundles.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Server Request Diagnostics Panel" icon="🕵️">
          <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">HTTP Method:</span>
              <span className="text-blue-400 font-bold">GET</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Host Header:</span>
              <span className="text-slate-200">localhost:3000</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Accept-Language:</span>
              <span className="text-slate-200">en-US,en;q=0.9</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Cookie Auth Status:</span>
              <span className="text-amber-400 font-semibold">Unauthenticated (Mock)</span>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Related Modules" icon="🔗">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <ModuleCard
            title="SSR Demo Lab"
            description="Explore dynamic server rendering per request."
            renderingType="DYNAMIC"
            href="/ssr-demo"
          />
          <ModuleCard
            title="Server Actions Lab"
            description="Use cookies & headers in Server Actions."
            renderingType="SERVER"
            href="/actions-lab"
          />
          <ModuleCard
            title="Dynamic Cache Lab"
            description="Understand dynamic request caching behavior."
            renderingType="DYNAMIC"
            href="/cache-lab/dynamic"
          />
        </div>
      </SectionCard>
    </div>
  );
}
