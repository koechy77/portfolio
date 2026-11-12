import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import database from "../data/database";
import { experiences, techStack } from "../data/database";

const CHARACTER_INTERVAL_MS = 45;

function TerminalValue({ value, delay, reduceMotion }) {
  const characters = Array.from(value);
  const [visibleCount, setVisibleCount] = useState(
    reduceMotion ? characters.length : 0,
  );
  const [showCaret, setShowCaret] = useState(!reduceMotion);

  useEffect(() => {
    let startTimer;
    let typingTimer;
    let hideCaretTimer;

    let characterIndex = 0;
    const revealNextCharacter = () => {
      characterIndex += 1;
      setVisibleCount(characterIndex);

      if (characterIndex < characters.length) {
        typingTimer = window.setTimeout(
          revealNextCharacter,
          CHARACTER_INTERVAL_MS,
        );
      } else {
        hideCaretTimer = window.setTimeout(() => setShowCaret(false), 250);
      }
    };

    startTimer = window.setTimeout(() => {
      if (reduceMotion) {
        setVisibleCount(characters.length);
        setShowCaret(false);
        return;
      }

      setVisibleCount(0);
      setShowCaret(true);
      typingTimer = window.setTimeout(revealNextCharacter, delay);
    }, 0);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(typingTimer);
      window.clearTimeout(hideCaretTimer);
    };
  }, [characters.length, delay, reduceMotion]);

  return (
    <span className="terminal-value text-[#d3ddd6]">
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {characters.slice(0, visibleCount).join("")}
        {showCaret && <span className="terminal-caret" />}
      </span>
    </span>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const projectCount = database.projects?.length ?? 0;
  const profileFacts = [
    ["whoami", "kingsley onyem"],
    ["role", "full-stack engineer · frontend & backend"],
    ["study", "applied mathematics undergraduate"],
    ["based", "nigeria"],
  ];
  const profileStats = [
    { value: projectCount, label: "projects" },
    { value: experiences.length, label: "internship roles" },
    { value: techStack.length, label: "technologies" },
  ];
  let nextTypeDelay = 0.3;
  const profileTimings = profileFacts.map(([, value]) => {
    const duration = value.length * CHARACTER_INTERVAL_MS / 1000;
    const timing = { delay: nextTypeDelay, duration };
    nextTypeDelay += duration + 0.16;
    return timing;
  });

  return (
    <section className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-5 py-6 sm:py-8 md:grid-cols-[1.12fr_0.88fr] md:gap-12 md:px-8 md:py-12">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="order-1 max-w-2xl md:order-1"
      >
        <div
          role="group"
          aria-label="Profile summary terminal"
          className="mb-7 max-w-xl overflow-hidden rounded-md border border-white/10 bg-[#050b13]/90 font-mono shadow-[0_18px_48px_rgba(0,0,0,0.25)]"
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#d3ddd6]">
              <span className="size-1.5 rounded-sm bg-[#fb923c]" aria-hidden="true" />
              Kingsley / profile
            </p>
            <span className="shrink-0 text-[0.58rem] text-[#718078]">
              {String(profileFacts.length).padStart(2, "0")} FIELDS
            </span>
          </div>

          <div className="px-4 pb-4 pt-3 sm:px-5">
            <p className="mb-3 text-[0.65rem] text-[#87958d]">
              <span className="text-[#fb923c]">$</span> cat profile.txt
            </p>
            <div className="space-y-1">
              {profileFacts.map(([label, value], index) => (
                <p
                  key={label}
                  className="grid grid-cols-[2ch_7ch_minmax(0,1fr)] gap-x-2 text-[0.68rem] leading-5 sm:text-xs"
                >
                  <span className="text-white/25">{String(index + 1).padStart(2, "0")}</span>
                  <span className={index === 0 ? "text-[#fb923c]" : "text-[#fdba74]"}>
                    {label}&gt;
                  </span>
                  <TerminalValue
                    value={value}
                    delay={profileTimings[index].delay * 1000}
                    reduceMotion={reduceMotion}
                  />
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#fdba74]">
          <span className="size-2 rounded-full bg-[#fb923c]" aria-hidden="true" />
          Full-Stack Engineer · Nigeria
        </p>
        <h1 className="font-display text-[2.7rem] font-semibold leading-[1.08] tracking-tight text-[#f1f5f2] sm:text-6xl md:text-[4.25rem]">
          From first click to API response, I make the whole product work.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#b4c0b8] sm:text-lg sm:leading-8">
          I&apos;m Kingsley, a full-stack engineer and applied mathematics
          undergraduate. I bring analytical rigor to complex problems, designing
          responsive React and Tailwind CSS interfaces and building the Node.js
          and Express APIs behind them.
        </p>

        <div className="mt-7 grid max-w-xl grid-cols-3 border-y border-white/10 py-4">
          {profileStats.map((stat) => (
            <div key={stat.label} className="pr-2 sm:pr-4">
              <p className="font-display text-xl font-semibold text-[#f1f5f2] sm:text-2xl">
                {String(stat.value).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[0.65rem] leading-4 text-[#9aa89f] sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#fb923c] px-5 text-sm font-semibold text-[#17100a] transition hover:bg-[#fdba74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fb923c]"
          >
            View selected work <FiArrowDown aria-hidden="true" />
          </a>
          <a
            href={`mailto:${database.contact.email}`}
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 text-sm font-semibold text-[#e5eee8] transition hover:border-[#fb923c]/60 hover:text-[#fdba74]"
          >
            Get in touch <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 flex items-center gap-4 text-sm text-[#9aa89f]">
          <span>Find me on</span>
          <a
            href={database.contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded p-1 transition hover:text-[#fdba74]"
          >
            <FiGithub size={19} aria-hidden="true" />
          </a>
          <a
            href={database.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded p-1 transition hover:text-[#fdba74]"
          >
            <FiLinkedin size={19} aria-hidden="true" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
        className="relative order-2 mx-auto w-full max-w-sm md:order-2 md:max-w-md"
      >
        <div className="absolute -left-3 top-8 h-[72%] w-3 border-y border-l border-[#fb923c]/55" aria-hidden="true" />
        <img
          src={database.about.image}
          alt="Kingsley Onyem"
          fetchPriority="high"
          className="aspect-4/4.5 w-full object-cover object-[center_58%] grayscale"
        />
        <p className="mt-3 text-right text-xs font-medium uppercase tracking-[0.12em] text-[#91a097]">
          Kingsley Onyem · Full-Stack Engineer
        </p>
      </motion.div>
    </section>
  );
}
