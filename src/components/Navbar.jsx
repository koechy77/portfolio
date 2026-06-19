import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-950">
        <div className="flex items-center p-4">
          <ul className="flex items-center gap-4 md:text-4xl text-white font-poppins">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors ${isActive ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-300'}`
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
          <Link to="/" className="text-white text-4xl md:text-7xl font-bold mx-auto font-scribble cursor-pointer hover:text-orange-300">KingKoech<span className="text-orange-600">.</span></Link>
          <ul className="hidden md:flex items-center gap-4 ml-auto md:text-4xl text-white font-poppins">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors ${isActive ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-300'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-1 rounded transition-colors ${isActive ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-300'}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className="block md:hidden ml-auto text-white "
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenu size={24} />
          </button>
          {menuOpen && (
            <div className="md:hidden absolute right-4 top-16 bg-gray-700 rounded p-2 font-poppins">
              <button
                className="block w-full text-left p-2 text-white"
                onClick={() => {
                  navigate("/about");
                  setMenuOpen(false);
                }}
              >
                About
              </button>
              <button
                className="block w-full text-left p-2 text-white"
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

