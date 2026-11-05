import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-md border border-white/10 bg-[#0b1321]/95">
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title} live demo`}
        className="group block overflow-hidden bg-[#111b24]"
      >
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          loading="lazy"
          className="aspect-16/10 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
        />
      </a>

      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-[#edf3ef] sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-6 text-[#aab7af]">
              {project.description}
            </p>
          </div>
          <div className="flex gap-2" aria-label={`${project.title} technologies`}>
            {project.tech.map((tech) => (
              <span
                key={tech.name}
                title={tech.name}
                className="grid size-9 place-items-center rounded border border-white/10 bg-white/5"
              >
                <img src={tech.logo} alt={tech.name} className="size-5 object-contain" />
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#fdba74] transition hover:text-[#fed7aa]"
          >
            Live site <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b4c0b8] transition hover:text-white"
          >
            <FiGithub aria-hidden="true" /> Source code
          </a>
        </div>
      </div>
    </article>
  );
}
