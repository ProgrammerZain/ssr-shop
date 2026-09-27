import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export default function ProductDetailLoading() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto py-4 animate-fade-in">
      {/* Header Skeleton */}
      <div className="space-y-4 border-b border-slate-800 pb-6">
        <div className="w-32 h-5 rounded-full bg-slate-800/60 animate-shimmer" />
        <div className="w-2/3 h-10 rounded-lg bg-slate-800/60 animate-shimmer" />
        <div className="w-full sm:w-1/2 h-5 rounded bg-slate-800/60 animate-shimmer" />
      </div>

      {/* Detail Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Skeleton */}
        <div className="w-full h-80 sm:h-96 rounded-xl bg-slate-800/60 animate-shimmer" />

        {/* Info Skeleton */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="w-24 h-6 rounded-full bg-slate-800/60 animate-shimmer" />
            <div className="w-20 h-6 rounded bg-slate-800/60 animate-shimmer" />
          </div>
          <div className="w-3/4 h-8 rounded-lg bg-slate-800/60 animate-shimmer" />
          <div className="space-y-2">
            <LoadingSkeleton className="w-full h-4" />
            <LoadingSkeleton className="w-full h-4" />
            <LoadingSkeleton className="w-2/3 h-4" />
          </div>
          <div className="w-32 h-10 rounded-lg bg-slate-800/60 animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
