import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer({ contact }) {
  const [lagosTime, setLagosTime] = useState("");

  useEffect(() => {
    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const updateTime = () => setLagosTime(timeFormatter.format(new Date()));

    updateTime();
    const intervalId = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <footer className="border-t border-white/10 bg-[#080f19]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-7 sm:flex-row sm:items-center sm:justify-between md:px-8">
        <div>
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-tight text-[#edf3ef]"
          >
            Kingsley Onyem<span className="text-[#fb923c]">.</span>
          </Link>
          <p className="mt-1 text-xs text-[#91a097]">
            &copy; {new Date().getFullYear()} Kingsley Onyem
          </p>
        </div>

        <nav aria-label="Social links" className="flex flex-wrap items-center gap-5">
          {contact?.email && (
            <a
              href={`mailto:${contact.email}`}
              aria-label="Send an email"
              className="text-sm font-medium text-[#b4c0b8] transition hover:text-[#fdba74]"
            >
              <span className="flex items-center gap-2"><FaEnvelope aria-hidden="true" /> Email</span>
            </a>
          )}
          {contact?.phone && (
            <a
              href={`tel:${contact.phone}`}
              aria-label="Call Kingsley Onyem"
              className="text-sm font-medium text-[#b4c0b8] transition hover:text-[#fdba74]"
            >
              <span className="flex items-center gap-2"><FaPhone aria-hidden="true" /> Phone</span>
            </a>
          )}
          {contact?.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-sm font-medium text-[#b4c0b8] transition hover:text-[#fdba74]"
            >
              <span className="flex items-center gap-2"><FaLinkedin aria-hidden="true" /> LinkedIn</span>
            </a>
          )}
          {contact?.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-sm font-medium text-[#b4c0b8] transition hover:text-[#fdba74]"
            >
              <span className="flex items-center gap-2"><FaGithub aria-hidden="true" /> GitHub</span>
            </a>
          )}
        </nav>
        <p className="font-mono text-xs text-[#91a097]" aria-label="Current time in Nigeria">
          nigeria {lagosTime || "--:--"}
        </p>
      </div>
    </footer>
  );
}
