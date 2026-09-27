import { ProductCardSkeleton } from "@/components/skeletons/ProductCardSkeleton";

export default function ProductsLoading() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto py-6 animate-fade-in">
      <div className="space-y-4 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-48 h-8 rounded-lg bg-slate-800/60 animate-shimmer" />
          <div className="w-28 h-6 rounded-full bg-slate-800/60 animate-shimmer" />
        </div>
        <div className="w-full sm:w-2/3 h-5 rounded bg-slate-800/60 animate-shimmer" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  );
}
