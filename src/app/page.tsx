import { ModuleCard } from "@/components/ModuleCard";
import { Badge } from "@/components/Badge";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Module 0: Foundation Established
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Next.js SSR Lab
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-2">
            Dynamic Product Store
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed">
          A hands-on educational environment built to study Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), and React Server Components in Next.js App Router.
        </p>
      </section>

      {/* Lab Objectives Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-2">
          <div className="text-2xl">🎯</div>
          <h2 className="font-semibold text-slate-200">Educational Focus</h2>
          <p className="text-slate-400 text-sm">
            Explicit, easy-to-follow code examples without unnecessary abstraction or complex state libraries.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-2">
          <div className="text-2xl">⚡</div>
          <h2 className="font-semibold text-slate-200">App Router Architecture</h2>
          <p className="text-slate-400 text-sm">
            Exploring React Server Components by default, async data fetching, and explicit client-server boundaries.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-2">
          <div className="text-2xl">🛍️</div>
          <h2 className="font-semibold text-slate-200">Mock E-Commerce Store</h2>
          <p className="text-slate-400 text-sm">
            Simulating real-world dynamic product listings, details pages, search filtering, and inventory updates.
          </p>
        </div>
      </section>

      {/* Learning Modules Roadmap */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Learning Modules</h2>
            <p className="text-slate-400 text-sm">Roadmap of upcoming SSR & data-fetching demonstrations</p>
          </div>
          <Badge variant="purple">Next.js 15+ App Router</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ModuleCard
            title="Module 0: Foundation Setup"
            description="Clean global layout, responsive header/footer, TypeScript configuration, and Tailwind CSS setup."
            renderingStrategy="SSG"
            status="Foundation"
            href="/"
          />

          <ModuleCard
            title="Module 1: Dynamic Product Catalog"
            description="Fetching product listings dynamically on each request via Server-Side Rendering (SSR) from a mock API."
            renderingStrategy="SSR"
            status="Planned"
            href="/products"
          />

          <ModuleCard
            title="Module 2: Static Product Detail Pages & ISR"
            description="Pre-rendering top product detail pages statically at build time with automatic revalidation."
            renderingStrategy="ISR"
            status="Planned"
            href="/products"
          />

          <ModuleCard
            title="Module 3: Interactive Search & Filters"
            description="Combining Server Components for data fetching with Client Components for dynamic user interaction."
            renderingStrategy="Client Component"
            status="Planned"
            href="/products"
          />
        </div>
      </section>
    </div>
  );
}
