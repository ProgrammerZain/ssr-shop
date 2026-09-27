import React from "react";

interface LoadingSkeletonProps {
  className?: string;
}

export function LoadingSkeleton({
  className = "w-full h-8",
}: LoadingSkeletonProps) {
  return (
    <div
      className={`rounded-lg bg-slate-800/60 animate-shimmer ${className}`}
    />
  );
}
