import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[calc(100svh-8rem)] max-w-6xl flex-col items-start justify-center px-5 py-20 md:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#fdba74]">
          404 / Page not found
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight text-[#f1f5f2] sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-[#b4c0b8]">
          The link may be outdated, or the address may be misspelled.
        </p>
        <Link
          to="/"
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#fb923c] px-5 text-sm font-semibold text-[#17100a] transition hover:bg-[#fdba74]"
        >
          <FiArrowLeft aria-hidden="true" /> Back to portfolio
        </Link>
      </main>
    </>
  );
}