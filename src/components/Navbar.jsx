import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import database from "../data/database";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/home";
  const sectionHref = (id) =>
    isHome ? `#${id}` : `${import.meta.env.BASE_URL}#${id}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Work", href: sectionHref("projects") },
    { label: "Services", href: sectionHref("services") },
    { label: "Stack", href: sectionHref("stack") },
    { label: "Experience", href: sectionHref("experience") },
    { label: "About", href: `${import.meta.env.BASE_URL}about` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-5 px-5 md:px-8"
      >
        <Link
          to="/"
          className="font-display text-base font-bold tracking-tight text-[#f1f5f2] sm:text-lg"
        >
          Kingsley Onyem<span className="text-[#fb923c]">.</span>
        </Link>

        <div className="hidden items-center gap-4 md:flex xl:gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#aab7af] transition hover:text-[#fdba74]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${database.contact.email}`}
            className="rounded-md bg-[#fb923c] px-4 py-2 text-sm font-semibold text-[#17100a] transition hover:bg-[#fdba74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb923c]"
          >
            Get in touch
          </a>
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <a
            href={`mailto:${database.contact.email}`}
            className="rounded-md bg-[#fb923c] px-3 py-2 text-xs font-semibold text-[#17100a] transition hover:bg-[#fdba74]"
          >
            Email me
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-md text-[#e5eee8] transition hover:bg-white/10"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-[#080f19] px-5 py-3 shadow-lg md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-3 text-sm font-medium text-[#c2cdc6] last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${database.contact.email}`}
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-semibold text-[#fdba74]"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}
