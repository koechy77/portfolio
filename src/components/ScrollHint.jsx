import { useEffect, useState } from "react";

export default function ScrollHint() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxFade = 200;

      setOpacity(Math.max(0, 1 - scrollY / maxFade));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col gap-1 pointer-events-none text-orange-400"
    >
      <div className="w-2 h-2 rotate-45 border-b-2 border-r-2 animate-bounce opacity-30" />
      <div className="w-2 h-2 rotate-45 border-b-2 border-r-2 animate-bounce opacity-60 [animation-delay:0.2s]" />
      <div className="w-2 h-2 rotate-45 border-b-2 border-r-2 animate-bounce opacity-90 [animation-delay:0.4s]" />
    </div>
  );
}