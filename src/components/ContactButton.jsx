import { useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function ContactButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/contact")}
      className="group my-20 inline-flex items-center gap-3 rounded-xl border border-orange-400/40 bg-orange-400 px-6 py-4 font-supermercado text-lg font-extrabold text-gray-950 shadow-lg shadow-orange-950/30 transition hover:-translate-y-1 hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-gray-950"
    >
      <span className="flex flex-col items-start leading-tight">
        <span>Let&apos;s talk about your project</span>
        <span className="font-poppins text-xs font-medium text-gray-950/70">
          Start a conversation
        </span>
      </span>
      <FiArrowUpRight
        aria-hidden="true"
        className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </button>
  );
}
