import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
import database from "../data/database";

export default function Projects() {
  const [activePreviewId, setActivePreviewId] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const projects = database.projects ?? [];

  const handlePreviewToggle = (projectId) => {
    setActivePreviewId((currentId) =>
      currentId === projectId ? null : projectId,
    );
  };

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!carousel || !firstCard) return;

    carouselRef.current?.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + 16),
      behavior: "smooth",
    });
  };

  const updateActiveSlide = () => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;

    if (!carousel || !firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width + 16;
    const nextSlide = Math.round(carousel.scrollLeft / cardWidth);
    setActiveSlide(Math.min(Math.max(nextSlide, 0), projects.length - 1));
  };

  return (
    <section id="projects" className="text-white mx-4 py-12">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="font-extrabold font-supermercado text-4xl md:text-5xl lg:text-6xl  mb-5 px-4"
      >
        Projects
      </motion.h2>

      <div className="mb-4 flex items-center justify-between px-4 md:hidden">
        <p className="text-sm text-gray-400">Swipe to explore</p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => moveCarousel(-1)}
            disabled={activeSlide === 0}
            className="rounded-full border border-white/15 bg-gray-900/80 p-2 text-orange-300 transition hover:border-orange-300 hover:text-orange-200 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <FiChevronLeft aria-hidden="true" className="text-xl" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => moveCarousel(1)}
            disabled={activeSlide === projects.length - 1}
            className="rounded-full border border-white/15 bg-gray-900/80 p-2 text-orange-300 transition hover:border-orange-300 hover:text-orange-200 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <FiChevronRight aria-hidden="true" className="text-xl" />
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        onScroll={updateActiveSlide}
        role="region"
        aria-label="Featured projects"
        className="projects-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 md:grid md:grid-cols-3 md:gap-2 md:overflow-visible md:px-0 md:pb-0"
      >
        {projects.map((project) => (
          <div key={project.id} className="min-w-[85vw] snap-center md:min-w-0">
            <ProjectCard
              project={project}
              isPreviewOpen={activePreviewId === project.id}
              onTogglePreview={() => handlePreviewToggle(project.id)}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3 px-4 md:hidden">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          Project {activeSlide + 1} of {projects.length}
        </span>
        <div className="flex gap-1.5" aria-label={`Project ${activeSlide + 1} of ${projects.length}`}>
          {projects.map((project, index) => (
            <span
              key={project.id}
              className={`h-1.5 rounded-full transition-all ${
                activeSlide === index ? "w-6 bg-orange-400" : "w-1.5 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
