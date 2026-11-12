import { useRef } from "react";
import { useInView } from "framer-motion";
import { techStack } from "../data/database.js";

export default function TechStack() {
  const marqueeRef = useRef(null);
  const marqueeInView = useInView(marqueeRef, { margin: "100px 0px" });
  const toolRows = [
    techStack.filter((_, index) => index % 2 === 0),
    techStack.filter((_, index) => index % 2 !== 0),
  ];

  return (
    <section id="stack" className="section-anchor mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[#edf3ef] sm:text-4xl">
        Tools I work with
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[#aab7af] sm:text-base">
        Technologies I&apos;ve used across projects and internship work.
      </p>
      <div ref={marqueeRef} className="mt-8 space-y-3">
        {toolRows.map((tools, rowIndex) => (
          <div
            key={rowIndex}
            className="tool-marquee overflow-hidden"
            role="region"
            aria-label={`Technology row ${rowIndex + 1}`}
            tabIndex={0}
          >
            <div
              className={`tool-marquee-track ${rowIndex === 1 ? "tool-marquee-reverse" : ""}`}
              style={{ animationPlayState: marqueeInView ? "running" : "paused" }}
            >
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="tool-marquee-copy flex shrink-0 items-center gap-3 pr-3"
                  aria-hidden={copy === 1}
                  role="list"
                >
                  {tools.map(({ name, logo }) => (
                    <div
                      key={name}
                      role="listitem"
                      className="flex min-h-16 min-w-40 shrink-0 items-center justify-start gap-3 rounded-sm border border-white/10 bg-white/[0.035] px-4 text-sm font-medium text-[#c2cdc6] transition-colors hover:border-[#fb923c]/45 hover:text-[#f1f5f2]"
                    >
                      <img src={logo} alt="" aria-hidden="true" className="size-6 shrink-0 object-contain" />
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
