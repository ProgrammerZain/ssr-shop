"use client";

import { useState } from "react";
import { NavLink } from "./NavLink";
import { Badge } from "./Badge";

/**
 * MobileMenu requires "use client" because it manages open/closed menu state (`useState`)
 * and handles click events for mobile navigation interaction.
 */
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close main menu" : "Open main menu"}
        aria-expanded={isOpen}
        className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 p-4 space-y-3 shadow-xl animate-fade-in z-50">
          <nav className="flex flex-col space-y-2">
            <NavLink
              href="/"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900"
            >
              Home Overview
            </NavLink>
            <NavLink
              href="/products"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Product Catalog</span>
              <Badge variant="blue">SSR</Badge>
            </NavLink>
            <NavLink
              href="/search"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900"
            >
              Catalog Search
            </NavLink>
            <NavLink
              href="/ssr-demo"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900"
            >
              SSR vs CSR Lab
            </NavLink>
            <NavLink
              href="/request-inspector"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900"
            >
              Request Inspector
            </NavLink>
            <NavLink
              href="/cache-lab"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Cache & ISR Lab</span>
              <Badge variant="purple">ISR</Badge>
            </NavLink>
            <NavLink
              href="/actions-lab"
              onClick={closeMenu}
              className="py-2 px-3 rounded-lg hover:bg-slate-900"
            >
              Server Actions Lab
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}
