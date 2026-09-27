import React from "react";
import Link from "next/link";
import { RenderingBadge, RenderingType } from "./RenderingBadge";

interface PageHeaderProps {
  title: string;
  description: string;
  renderingType: RenderingType;
  category?: string;
}

export function PageHeader({
  title,
  description,
  renderingType,
  category = "Lab Module",
}: PageHeaderProps) {
  return (
    <div className="space-y-4 border-b border-slate-800 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-medium">
          <Link href="/" className="hover:underline text-slate-400">
            SSR Lab
          </Link>
          <span className="text-slate-600">/</span>
          <span>{category}</span>
        </div>
        <RenderingBadge type={renderingType} />
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100">
        {title}
      </h1>

      <p className="text-slate-400 text-base max-w-3xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}
