import Link from "next/link";
import { Badge } from "@/components/Badge";

export const metadata = {
  title: "About Lab | Next.js SSR Lab",
  description: "Learn about the architecture and purpose of the Next.js SSR Lab.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto py-6">
      <div className="space-y-2 border-b border-slate-800 pb-6">
        <Badge variant="purple">Architecture Overview</Badge>
        <h1 className="text-3xl font-bold text-slate-100">About Next.js SSR Lab</h1>
        <p className="text-slate-400">
          A clean foundation built for learning App Router paradigms step-by-step.
        </p>
      </div>

      <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">Project Mission</h2>
          <p className="text-slate-400">
            The goal of this repository is to provide a clear, readable codebase for experimenting with Next.js data-fetching techniques without unnecessary boilerplate or abstraction overhead.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-100">Core Concepts Covered</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            <li><strong className="text-slate-200">Server Components by Default:</strong> Zero client JavaScript sent for static and server-rendered components.</li>
            <li><strong className="text-slate-200">Server-Side Rendering (SSR):</strong> Dynamic data fetching per request with caching controls.</li>
            <li><strong className="text-slate-200">Static Site Generation (SSG):</strong> Pre-rendering routes at build time for high performance.</li>
            <li><strong className="text-slate-200">Incremental Static Regeneration (ISR):</strong> Updating static content in the background without rebuilding the app.</li>
          </ul>
        </section>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
          >
            &larr; Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
