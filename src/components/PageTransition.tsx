"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

/**
 * PageTransition isolates path tracking logic to trigger an entrance fade-in
 * animation whenever the route changes in Next.js App Router.
 * This avoids turning page components or layout into Client Components.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-fade-in w-full">
      {children}
    </div>
  );
}
