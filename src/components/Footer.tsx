import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-400 text-sm py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">
              Next.js SSR Lab
            </span>
            <span className="text-slate-600">•</span>
            <span>Educational Learning Project</span>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <Link
              href="/"
              className="hover:text-slate-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-slate-200 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-slate-200 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
