import { motion } from "framer-motion";

export default function ServicesCards({ service, index, Icon }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative min-h-32 overflow-hidden rounded-md border border-white/10 bg-[#0b1321]/95 p-5 shadow-sm shadow-black/20 transition-colors duration-300 hover:border-[#fb923c]/45 sm:p-6"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded border border-[#fb923c]/25 bg-[#fb923c]/7 text-[#fdba74] transition-colors group-hover:border-[#fb923c]/50 group-hover:bg-[#fb923c]/12">
          <Icon size={18} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="font-mono text-[0.65rem] font-medium text-[#fb923c]">
            0{index + 1}
          </p>
          <h3 className="mt-0.5 font-display text-base font-semibold leading-snug text-[#edf3ef] sm:text-lg">
            {service.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 max-w-xl text-sm leading-6 text-[#aab7af]">
        {service.description}
      </p>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#fb923c]/70 transition-transform duration-300 group-hover:scale-x-100"
      />
    </motion.article>
  );
}
