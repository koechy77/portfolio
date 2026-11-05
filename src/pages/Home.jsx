import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import database from "../data/database";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="font-body">
        <div className="relative">
          <Hero />
        </div>
        <Projects />
        <Services />
        <TechStack />
        <Experience />
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 pt-12 md:px-8 md:pb-28">
          <div className="border-t border-white/15 pt-10 md:pt-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#fdba74]">
              Contact
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[#edf3ef] sm:text-4xl">
                  Get in touch
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-[#b4c0b8]">
                  Email me about a project, internship, or other opportunity.
                </p>
              </div>
              <a
                href={`mailto:${database.contact.email}`}
                className="inline-flex min-h-12 w-fit shrink-0 items-center gap-2 rounded-md bg-[#fb923c] px-5 text-sm font-semibold text-[#17100a] transition hover:bg-[#fdba74]"
              >
                Email me <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
