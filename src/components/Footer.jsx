import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer({ contact }) {
  return (
    <>
      <div className="bg-gray-950 text-white text-center py-8">

        <div className="flex justify-center gap-6 my-6">
          {contact?.email && (
            <a href={`mailto:${contact.email}`} title="Email" className="text-2xl sm:text-3xl hover:text-orange-600 transition">
              <FaEnvelope />
            </a>
          )}
          {contact?.phone && (
            <a href={`tel:${contact.phone}`} title="Phone" className="text-2xl sm:text-3xl hover:text-orange-600 transition">
              <FaPhone />
            </a>
          )}
          {contact?.linkedin && (
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-2xl sm:text-3xl hover:text-orange-600 transition">
              <FaLinkedin />
            </a>
          )}
          {contact?.github && (
            <a href={contact.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="text-2xl sm:text-3xl hover:text-orange-600 transition">
              <FaGithub />
            </a>
          )}
        </div>

        <div className='md:flex md:gap-1 md:items-baseline items-center md:justify-center'>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="text-xl sm:text-4xl md:text-7xl font-bold font-scribble cursor-pointer hover:text-orange-300">KingKoech<span className="text-orange-600">.</span></Link>

          <p className='text-sm mr-4'>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
