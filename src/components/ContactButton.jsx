import { FiArrowUpRight } from "react-icons/fi";
import database from "../data/database";

export default function ContactButton() {
  return (
    <a
      href={`mailto:${database.contact.email}`}
      className="group mt-7 inline-flex min-h-12 items-center gap-3 rounded-md bg-[#fb923c] px-5 text-sm font-semibold text-[#17100a] transition hover:bg-[#fdba74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb923c]"
    >
      <span>Let&apos;s talk about your project</span>
      <FiArrowUpRight
        aria-hidden="true"
        className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  );
}
