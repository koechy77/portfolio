import { services } from "../data/database";
import ServicesCards from "./ServicesCards";
import { motion } from "framer-motion";
import { FiLayers, FiMonitor, FiServer, FiRefreshCw } from "react-icons/fi";

const serviceIcons = [FiLayers, FiMonitor, FiServer, FiRefreshCw];

export default function Services() {
  return (
    <section id="services" className="section-anchor border-y border-white/10 bg-white/2.5">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl font-semibold tracking-tight text-[#edf3ef] sm:text-4xl"
        >
          Services
        </motion.h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#aab7af] sm:text-base">
          Frontend, backend, and deployment work.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="sticky md:static"
              style={{ top: `calc(5rem + ${index * 3}rem)` }}
            >
              <ServicesCards
                service={service}
                index={index}
                Icon={serviceIcons[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
