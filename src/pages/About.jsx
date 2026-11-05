import database from "../data/database";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import ContactButton from "../components/ContactButton";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-20">
        <div className="order-2 max-w-2xl md:order-1">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#aab7af] transition hover:text-[#fdba74]"
          >
            <FiArrowLeft aria-hidden="true" /> Back to portfolio
          </Link>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fdba74]">
            About
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[#f1f5f2] sm:text-5xl">
            Full-Stack Engineering and Applied Mathematics.
          </h1>
          <p className="mt-6 text-base leading-7 text-[#b4c0b8] sm:text-lg sm:leading-8">
            {database.about.description}
          </p>
          <div className="mt-8 grid max-w-lg grid-cols-2 gap-4 border-y border-white/10 py-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#91a097]">
                Study
              </p>
              <p className="mt-1 text-sm font-medium text-[#d3ddd6]">
                Applied Mathematics
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#91a097]">
                Focus
              </p>
              <p className="mt-1 text-sm font-medium text-[#d3ddd6]">
                Frontend &amp; backend
              </p>
            </div>
          </div>
          <ContactButton />
        </div>

        <div className="relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-md">
          <div className="absolute -left-3 top-8 h-[72%] w-3 border-y border-l border-[#fb923c]/55" aria-hidden="true" />
          <img
            src={database.about.image}
            alt="Kingsley Onyem"
            className="aspect-4/4.5 w-full object-cover object-[center_58%] grayscale"
          />
        </div>
      </section>
    </main>
  );
}
