import Link from "next/link";
import { Badge } from "@/components/Badge";

export const metadata = {
  title: "Products Catalog | Next.js SSR Lab",
  description: "Dynamic product store placeholder for upcoming SSR lab modules.",
};

export default function ProductsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto py-6">
      <div className="space-y-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-slate-100">Product Catalog</h1>
          <Badge variant="blue">Module Placeholder</Badge>
        </div>
        <p className="text-slate-400">
          This route will serve as the demonstration hub for Server-Side Rendered (SSR) and Static (SSG/ISR) product pages using a free mock API in future modules.
        </p>
      </div>

      <div className="p-8 rounded-xl border border-dashed border-slate-800 bg-slate-900/30 text-center space-y-4">
        <div className="text-4xl">📦</div>
        <h2 className="text-xl font-semibold text-slate-200">
          Mock API Integration Coming Soon
        </h2>
        <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
          No backend or database has been added yet. In upcoming steps, we will connect this page to fetch product data on the server dynamically.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors"
          >
            &larr; Back to Lab Overview
          </Link>
        </div>
      </div>
    </div>
  );
}
