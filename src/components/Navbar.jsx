import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrServices } from "react-icons/gr";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-auto w-[clamp(320px,92%,1200px)] rounded-2xl border border-white/20 bg-gray-950/80 backdrop-blur-md shadow-lg nav">
      <span className="nav-shine" aria-hidden="true" />
      <div className="flex items-center gap-3 px-4 py-3 nav-content">
        <ul className="hidden md:flex items-center gap-3 text-white font-poppins text-sm md:text-lg">
          <li className="rounded-xl border border-white/10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 block rounded transition-colors ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
        </ul>

        <a
          href="#projects"
          className="mx-auto text-white text-xl md:text-3xl font-bold font-scribble hover:text-orange-300 border border-white/10 rounded-xl px-3 py-2"
        >
          <FaRegFolderOpen />
        </a>
        <a
          href="#services"
          className="mx-auto text-white text-xl md:text-3xl font-bold font-scribble hover:text-orange-300 border border-white/10 rounded-xl px-3 py-2"
        >
          <GrServices />
        </a>

        <ul className="hidden md:flex items-center gap-3 text-white font-poppins text-sm md:text-lg">
          <li className="rounded-xl border border-white/10">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 block rounded transition-colors ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li className="rounded-xl border border-white/10">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 block rounded transition-colors ${
                  isActive
                    ? "text-orange-400 font-semibold"
                    : "text-white hover:text-orange-300"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          type="button"
          className="relative z-10 ml-auto block shrink-0 rounded-lg p-1 text-white md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenu size={28} aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute right-4 top-full mt-2 w-40 rounded-2xl border border-white/10 bg-gray-900/95 p-2 shadow-2xl backdrop-blur-md font-poppins">
          <button
            type="button"
            className="w-full rounded-xl px-3 py-2 text-left text-white transition hover:bg-white/10"
            onClick={() => {
              navigate("/about");
              setMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            type="button"
            className="mt-1 w-full rounded-xl px-3 py-2 text-left text-white transition hover:bg-white/10"
            onClick={() => {
              navigate("/contact");
              setMenuOpen(false);
            }}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
