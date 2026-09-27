import React from "react";

interface SectionCardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionCard({
  title,
  icon,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-4 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
        {icon && <span className="text-xl">{icon}</span>}
        <h2 className="text-lg font-semibold text-slate-100">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
