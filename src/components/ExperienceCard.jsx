import { motion, useReducedMotion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

export default function ExperienceCard({ experience, index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: index * 0.08 }}
      className="relative pb-8 last:pb-0"
    >
      <span
        className="absolute left-[-1.68rem] top-1.5 size-2.5 rounded-full border-2 border-[#020617] bg-[#fb923c] sm:left-[-2.18rem]"
        aria-hidden="true"
      />
      <div className="flex items-start gap-3">
        <FiBriefcase className="mt-1 shrink-0 text-[#fb923c]" aria-hidden="true" />
        <div>
          <h3 className="font-display text-lg font-semibold text-[#edf3ef] sm:text-xl">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm font-medium text-[#aab7af]">
            {experience.company}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#c2cdc6]">
            {experience.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {experience.tech.map((tech) => (
              <li key={tech.name} className="flex items-center gap-1.5 text-xs font-medium text-[#b4c0b8]">
                <img src={tech.logo} alt="" aria-hidden="true" className="size-4 object-contain" />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
