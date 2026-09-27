import React from "react";
import { RenderingBadge, RenderingType } from "./RenderingBadge";

export type ExecutionTargetType =
  | "Node.js Server"
  | "Browser Client"
  | "Build-time Pre-render"
  | string;

interface RenderingInfoProps {
  renderingType: RenderingType;
  executionTarget: ExecutionTargetType;
  cachingStrategy: string;
  dynamicApis: string;
  description: string;
}

export function RenderingInfo({
  renderingType,
  executionTarget,
  cachingStrategy,
  dynamicApis,
  description,
}: RenderingInfoProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-5 space-y-4 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-bold">
            Render Diagnostics Panel
          </span>
        </div>
        <RenderingBadge type={renderingType} />
      </div>

      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase font-sans font-medium">
            Execution Target
          </div>
          <div className="text-slate-200 font-semibold">{executionTarget}</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase font-sans font-medium">
            Caching Strategy
          </div>
          <div className="text-slate-200 font-semibold">{cachingStrategy}</div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 space-y-1">
          <div className="text-slate-400 text-[10px] uppercase font-sans font-medium">
            Dynamic APIs
          </div>
          <div className="text-slate-200 font-semibold">{dynamicApis}</div>
        </div>
      </div>
    </div>
  );
}
