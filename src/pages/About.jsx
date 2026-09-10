import ContactButton from "../components/ContactButton";
import database from "../data/database";
import { motion } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="py-12">
      <div className="md:fixed left-1 top-4 mx-3 my-3">
        <button
          className="block text-white cursor-pointer"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiMenu  className="icon"/>
        </button>
        {menuOpen && (
          <div className="absolute md:-left-2 md:top-full left-10 top-1  bg-gray-900/95 backdrop-blur-md rounded-2xl p-2 font-poppins shadow-2xl">
            <button
              className="block w-full text-left p-2 text-white hover:bg-white/10 rounded-xl cursor-pointer"
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              className="block w-full text-left p-2 text-white hover:bg-white/10 rounded-xl cursor-pointer"
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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 px-4">
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl font-poppins"
          >
            {database.about.title}
          </motion.h2>

          <p className="text-orange-300 text-base md:text-lg lg:text-xl p-1 font-semibold mt-6 text-center md:text-left leading-relaxed font-supermercado">
            {database.about.description}
          </p>

          <ContactButton />
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={database.about.image}
            alt="My Profile"
            className="max-w-sm w-full h-auto rounded-lg object-contain
               shadow-lg hover:translate-y-1"
          />
        </div>
      </div>
    </main>
  );
}
