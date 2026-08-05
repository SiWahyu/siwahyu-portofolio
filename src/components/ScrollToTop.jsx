import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`glass-card group fixed bottom-6 right-6 z-50 rounded-full p-[1.5px] transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <div className="rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 p-[1.5px]">
        <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-fuchsia-600 shadow-[0_0_18px_rgba(34,211,238,0.5)] transition-shadow duration-300 group-hover:shadow-[0_0_26px_rgba(217,70,239,0.6)]">
          <Rocket
            strokeWidth={3}
            className="text-white transition-transform duration-300 -rotate-45 size-5 group-hover:-translate-y-1 group-hover:scale-110"
          />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
