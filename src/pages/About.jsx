import database from '../data/database';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <section className="bg-gray-950 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 px-4">

          <div className="flex flex-col justify-center">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl font-poppins">
              {database.about.title}
            </motion.h2>

            <p className="text-orange-300 text-base md:text-lg lg:text-xl p-1 font-semibold mt-6 font-poppins text-center md:text-left leading-relaxed">
              {database.about.description}
            </p>

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
      </section>
    </>
  );
}

