import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiSend } from "react-icons/fi";
import database from "../data/database";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setStatus("Thanks! I will get back to you soon.");

    setTimeout(() => {
      setStatus("");
    }, 3500);
  }
   const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <main className="min-h-screen overflow-x-hidden px-4 pb-20 font-poppins text-white sm:px-6">
        <div className="relative z-20 mx-0 pt-4 md:fixed md:left-15 md:top-4 md:mx-3 md:my-4 md:pt-0">
                <button
                  className="block cursor-pointer rounded-lg p-1 text-white transition hover:text-orange-300"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <HiMenu className="icon" />
                </button>
                {menuOpen && (
                  <div className="absolute left-0 top-12 min-w-36 rounded-2xl border border-white/10 bg-gray-900/95 p-2 font-poppins shadow-2xl backdrop-blur-md md:-left-13 md:top-9">
                    <button
                      className="block w-full text-left p-2 text-white hover:bg-white/10 rounded-xl active:bg-white/10 cursor-pointer"
                      onClick={() => {
                        navigate("/");
                        setMenuOpen(false);
                      }}
                    >
                      Home
                    </button>
                    <button
                      className="block w-full text-left p-2 text-white hover:bg-white/10 active:bg-white/10 rounded-xl cursor-pointer"
                      onClick={() => {
                        navigate("/about");
                        setMenuOpen(false);
                      }}
                    >
                      About
                    </button>
                  </div>
                )}
              </div>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl pt-14 md:pt-28"
        >
          <p className="mb-3 font-supermercado text-sm uppercase tracking-[0.25em] text-orange-300">
            Have an idea?
          </p>
          <h1 className="max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Let&apos;s build something people remember.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:mt-5 sm:text-lg sm:leading-8">
            Tell me what you are working on, where you are stuck, or what you
            want to bring to life. I&apos;ll bring a thoughtful technical plan to
            the conversation.
          </p>
        </motion.section>

        <div className="mx-auto mt-8 grid min-w-0 w-full max-w-6xl gap-5 lg:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-8">
          <aside className="min-w-0 w-full max-w-full rounded-2xl border border-white/10 bg-gray-950/60 p-5 shadow-2xl shadow-black/20 sm:p-8">
            <p className="font-supermercado text-xl text-orange-300">Reach out directly</p>
            <p className="mt-3 text-sm leading-7 text-gray-400">
              Prefer a quick hello? You can find me through any of these
              channels.
            </p>
            <div className="mt-7 space-y-4 text-sm">
              <a className="flex min-w-0 items-center gap-3 text-gray-200 transition hover:text-orange-300" href={`mailto:${database.contact.email}`}>
                <FiMail className="text-xl text-orange-400" aria-hidden="true" />
                <span className="min-w-0 break-words">{database.contact.email}</span>
              </a>
              <a className="flex min-w-0 items-center gap-3 text-gray-200 transition hover:text-orange-300" href={`tel:${database.contact.phone}`}>
                <FiPhone className="text-xl text-orange-400" aria-hidden="true" />
                <span className="min-w-0 break-words">{database.contact.phone}</span>
              </a>
            </div>
            <div className="mt-8 flex gap-3 border-t border-white/10 pt-6">
              <a aria-label="GitHub" href={database.contact.github} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-3 text-xl text-gray-300 transition hover:border-orange-300 hover:text-orange-300">
                <FiGithub aria-hidden="true" />
              </a>
              <a aria-label="LinkedIn" href={database.contact.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 p-3 text-xl text-gray-300 transition hover:border-orange-300 hover:text-orange-300">
                <FiLinkedin aria-hidden="true" />
              </a>
            </div>
          </aside>

          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            className="min-w-0 w-full max-w-full rounded-2xl border border-white/10 bg-gray-900/75 p-5 shadow-2xl shadow-black/20 sm:p-8"
            onSubmit={handleSubmit}
          >
            <fieldset className="flex min-w-0 flex-col gap-4">
              <legend className="mb-2 font-supermercado text-xl text-white sm:text-2xl">Send a message</legend>
              <p className="-mt-2 mb-2 text-sm leading-6 text-gray-400">A few details help me understand how I can help.</p>

              <label className="text-sm font-semibold text-gray-200" htmlFor="name">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="enter your name..."
                autoComplete="name"
                required
                className="min-w-0 w-full max-w-full rounded-lg border border-white/10 bg-gray-950/70 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-200" htmlFor="email">Email</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@email.com"
                autoComplete="email"
                required
                className="min-w-0 w-full max-w-full rounded-lg border border-white/10 bg-gray-950/70 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />

              <label className="text-sm font-semibold text-gray-200" htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength={10}
                maxLength={500}
                placeholder="Tell me about your idea..."
                required
                className="min-h-36 min-w-0 w-full max-w-full resize-y rounded-lg border border-white/10 bg-gray-950/70 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              ></textarea>

              <button type="submit" className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-400 px-5 py-3 font-semibold text-gray-950 transition hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-gray-900">
                Send message
                <FiSend className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </fieldset>
          </motion.form>
        </div>
        {status && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" }}
            className="mx-auto mt-6 max-w-6xl text-center font-semibold text-orange-300"
          >
            {status}
          </motion.p>
        )}
      </main>
  );
}
