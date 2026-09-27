import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="max-w-md mx-auto py-16 text-center space-y-6 animate-fade-in">
      <div className="text-6xl">🔍</div>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-slate-100">Product Not Found</h1>
        <p className="text-slate-400 text-sm">
          We couldn&apos;t find a product matching the requested ID. It may have been removed or the ID is invalid.
        </p>
      </div>
      <div>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
        >
          &larr; Back to Product Catalog
        </Link>
      </div>
    </div>
  );
}
