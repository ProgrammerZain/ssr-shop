export function ModuleCardSkeleton() {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-20 h-5 rounded-full bg-slate-800/60 animate-shimmer" />
          <div className="w-16 h-4 rounded bg-slate-800/60 animate-shimmer" />
        </div>
        <div className="w-2/3 h-6 rounded bg-slate-800/60 animate-shimmer" />
        <div className="w-full h-4 rounded bg-slate-800/60 animate-shimmer" />
        <div className="w-4/5 h-4 rounded bg-slate-800/60 animate-shimmer" />
      </div>
      <div className="w-28 h-4 rounded bg-slate-800/60 animate-shimmer pt-2" />
    </div>
  );
}
