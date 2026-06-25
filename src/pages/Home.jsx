import ContactButton from '../components/ContactButton';
import ProjectCard from '../components/ProjectCard';
import ScrollHint from '../components/ScrollHint';
import database from '../data/database';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {

  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -1000]);

  return (
    <>
      <main className='bg-gray-950 font-poppins'>

        <section className='min-h-screen text-white flex items-center justify-center whitespace-nowrap overflow-hidden font-scribble'>
          <motion.h1 style={{ x }} className='text-[16.5vw]
           font-black
            leading-none
            tracking-tight
            whitespace-nowrap
            ' >
            {"KINGKOECH".split("").map((letter, index) =>
            (
              <span
                key={index}
                className='
              transition-all
               duration-300
               hover:text-orange-400
               active:text-orange-400
                hover:scale-125
                active:scale-125
                 inline-block
                 '>
                {letter}
              </span>
            ))}
          </motion.h1>

          <ScrollHint />
        </section>

        <section className='text-white'>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="font-extrabold font-supermercado text-4xl md:text-5xl lg:text-6xl  mb-5 px-4">
            Projects
          </motion.h2>


          <div className='grid md:grid-cols-3 gap-2 justify-items-center'>
            {database?.projects?.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

        </section>

        <div className=' text-center'>
          <ContactButton />
        </div>

      </main>
    </>
  );
}
