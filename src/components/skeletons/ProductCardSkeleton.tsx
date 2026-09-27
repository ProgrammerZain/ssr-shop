export function ProductCardSkeleton() {
  return (
    <div className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 space-y-4">
      <div className="w-full h-44 rounded-lg bg-slate-800/60 animate-shimmer" />
      <div className="flex items-center justify-between">
        <div className="w-20 h-5 rounded-full bg-slate-800/60 animate-shimmer" />
        <div className="w-12 h-4 rounded bg-slate-800/60 animate-shimmer" />
      </div>
      <div className="w-3/4 h-6 rounded bg-slate-800/60 animate-shimmer" />
      <div className="w-full h-4 rounded bg-slate-800/60 animate-shimmer" />
      <div className="w-1/2 h-4 rounded bg-slate-800/60 animate-shimmer" />
      <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
        <div className="w-16 h-6 rounded bg-slate-800/60 animate-shimmer" />
        <div className="w-24 h-8 rounded-lg bg-slate-800/60 animate-shimmer" />
      </div>
    </div>
  );
}
