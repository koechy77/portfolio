import ContactButton from '../components/ContactButton';
import ProjectCard from '../components/projectCard';
import database from '../data/database';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <>
    <section className='bg-gray-950 font-poppins'>

      <section className='min-h-screen'>

      </section>

      <section className='text-white'>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-4xl md:text-5xl lg:text-6xl  mb-5">
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

    </section>
    </>
  );
}
