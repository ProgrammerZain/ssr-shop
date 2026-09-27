import { ModuleCardSkeleton } from "./ModuleCardSkeleton";

export function PageSkeleton() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4 text-center sm:text-left border-b border-slate-800/80 pb-6">
        <div className="w-32 h-6 rounded-full bg-slate-800/60 animate-shimmer" />
        <div className="w-2/3 h-10 rounded-lg bg-slate-800/60 animate-shimmer" />
        <div className="w-full sm:w-1/2 h-5 rounded bg-slate-800/60 animate-shimmer" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ModuleCardSkeleton />
        <ModuleCardSkeleton />
        <ModuleCardSkeleton />
      </div>
    </div>
  );
}
