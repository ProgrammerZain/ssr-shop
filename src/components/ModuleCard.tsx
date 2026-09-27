import Link from "next/link";
import { RenderingBadge, RenderingType } from "./RenderingBadge";

interface ModuleCardProps {
  title: string;
  description: string;
  renderingType: RenderingType;
  status?: string;
  href: string;
}

export function ModuleCard({
  title,
  description,
  renderingType,
  status = "Interactive Lab",
  href,
}: ModuleCardProps) {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <RenderingBadge type={renderingType} size="sm" />
          <span className="text-xs text-slate-500 font-mono font-medium">
            {status}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-blue-400 transition-colors duration-200 mb-2">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200 pt-3 border-t border-slate-800/80 group-hover:translate-x-0.5"
      >
        Explore Module &rarr;
      </Link>
    </div>
  );
}
