import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../data/database";

export default function Experience() {
  return (
    <section id="experience" className="section-anchor border-y border-white/10 bg-white/2.5">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-semibold tracking-tight text-[#edf3ef] sm:text-4xl"
        >
          Experience
        </motion.h2>
        <div className="mt-8 max-w-3xl border-l border-[#fb923c]/35 pl-5 sm:pl-7">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
