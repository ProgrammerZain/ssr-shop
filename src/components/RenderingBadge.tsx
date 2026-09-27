import React from "react";

export type RenderingType =
  | "SERVER"
  | "CLIENT"
  | "STATIC"
  | "DYNAMIC"
  | "REVALIDATED";

interface RenderingBadgeProps {
  type: RenderingType;
  size?: "sm" | "md";
}

export function RenderingBadge({ type, size = "md" }: RenderingBadgeProps) {
  const styles: Record<
    RenderingType,
    { label: string; bg: string; border: string; text: string; icon: string }
  > = {
    SERVER: {
      label: "SERVER COMPONENT",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-400",
      icon: "🖥️",
    },
    CLIENT: {
      label: "CLIENT COMPONENT",
      bg: "bg-amber-500/10",
      border: "border-amber-500/30",
      text: "text-amber-400",
      icon: "⚛️",
    },
    STATIC: {
      label: "STATIC (SSG)",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      text: "text-emerald-400",
      icon: "⚡",
    },
    DYNAMIC: {
      label: "DYNAMIC (SSR)",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-400",
      icon: "🌐",
    },
    REVALIDATED: {
      label: "REVALIDATED (ISR)",
      bg: "bg-teal-500/10",
      border: "border-teal-500/30",
      text: "text-teal-400",
      icon: "⏱️",
    },
  };

  const config = styles[type];
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs sm:text-sm";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-semibold rounded-full border ${config.bg} ${config.border} ${config.text} ${sizeClasses}`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
