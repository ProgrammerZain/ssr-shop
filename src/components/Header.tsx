import Link from "next/link";
import { NavLink } from "./NavLink";
import { MobileMenu } from "./MobileMenu";
import { Badge } from "./Badge";

/**
 * Header remains a Server Component!
 * It composes isolated Client Components (NavLink, MobileMenu) for interactive parts.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/85 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-lg tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                Next.js SSR Lab
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Dynamic Product Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">
              Products
              <Badge variant="emerald">Upcoming</Badge>
            </NavLink>
            <NavLink href="/about">About Lab</NavLink>
          </nav>

          {/* Mobile Navigation Toggle */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
