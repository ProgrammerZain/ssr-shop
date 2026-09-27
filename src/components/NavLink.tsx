"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * NavLink requires "use client" to access `usePathname()` from next/navigation
 * to dynamically determine whether a route is active and apply active styling.
 */
export function NavLink({
  href,
  children,
  onClick,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
        isActive
          ? "text-blue-400 font-semibold"
          : "text-slate-300 hover:text-white"
      } ${className}`}
    >
      <span className="flex items-center gap-2">{children}</span>
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-fade-in" />
      )}
    </Link>
  );
}
