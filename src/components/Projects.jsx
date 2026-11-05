import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import database from "../data/database";

export default function Projects() {
  const projects = database.projects ?? [];
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;
    const firstSlide = carousel?.firstElementChild;

    if (!carousel || !firstSlide) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: direction * (firstSlide.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  const updateActiveSlide = () => {
    const carousel = carouselRef.current;
    const firstSlide = carousel?.firstElementChild;

    if (!carousel || !firstSlide) return;

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    const slideWidth = firstSlide.getBoundingClientRect().width + gap;
    const nextSlide = Math.round(carousel.scrollLeft / slideWidth);
    setActiveSlide(Math.min(Math.max(nextSlide, 0), projects.length - 1));
  };

  return (
    <section id="projects" className="section-anchor mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl font-semibold tracking-tight text-[#edf3ef] sm:text-4xl"
      >
        Selected work
      </motion.h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#aab7af] sm:text-base">
        Two projects. Open a live demo or view the source code.
      </p>

      {projects.length > 1 && (
        <div className="mt-6 flex items-center justify-between md:hidden">
          <p className="text-xs font-medium text-[#aab7af]">Swipe to explore</p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous project"
              title="Previous project"
              onClick={() => moveCarousel(-1)}
              disabled={activeSlide === 0}
              className="grid size-9 place-items-center rounded-md border border-white/15 bg-[#0b1321] text-[#fdba74] transition hover:border-[#fb923c] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <FiChevronLeft aria-hidden="true" size={19} />
            </button>
            <button
              type="button"
              aria-label="Next project"
              title="Next project"
              onClick={() => moveCarousel(1)}
              disabled={activeSlide >= projects.length - 1}
              className="grid size-9 place-items-center rounded-md border border-white/15 bg-[#0b1321] text-[#fdba74] transition hover:border-[#fb923c] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <FiChevronRight aria-hidden="true" size={19} />
            </button>
          </div>
        </div>
      )}

      <div
        ref={carouselRef}
        onScroll={updateActiveSlide}
        role="region"
        aria-label="Selected projects"
        className="projects-carousel mt-3 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 md:mt-8 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0"
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-[88%] snap-start md:min-w-0">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {projects.length > 1 && (
        <div className="mt-2 flex items-center justify-center gap-3 md:hidden">
          <span className="text-xs font-medium text-[#aab7af]">
            {activeSlide + 1} of {projects.length}
          </span>
          <div className="flex gap-1.5" aria-hidden="true">
            {projects.map((project, index) => (
              <span
                key={project.id}
                className={`h-1.5 rounded-full transition-all ${
                  activeSlide === index ? "w-5 bg-[#fb923c]" : "w-1.5 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
