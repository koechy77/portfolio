
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="relative bg-slate-700 text-white p-4 flex items-center justify-between text-2xl md:text-4xl">
      <button onClick={() => goTo("/")} className="hover:text-blue-300 hover:translate-y-1">
        Home
      </button>

      <div className="flex items-center gap-4">
        <ul className="hidden md:flex gap-12">
          <li>
            <button onClick={() => goTo("/about")} className="hover:text-blue-300 hover:translate-y-1">
              About
            </button>
          </li>
          <li>
            <button onClick={() => goTo("/contact")} className="hover:text-blue-300 hover:translate-y-1">
              Contact
            </button>
          </li>
        </ul>

        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-slate-600"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <HiMenu className="h-6 w-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-4 top-full mt-2 w-44 rounded-lg border border-slate-600 bg-slate-800 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1 p-2">
            <li>
              <button
                onClick={() => goTo("/about")}
                className="w-full text-left rounded px-3 py-2 hover:bg-slate-700 hover:text-blue-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => goTo("/contact")}
                className="w-full text-left rounded px-3 py-2 hover:bg-slate-700 hover:text-blue-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
