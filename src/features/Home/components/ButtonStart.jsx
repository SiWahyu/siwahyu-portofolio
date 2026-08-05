import { useState } from "react";
import { Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const ButtonStart = ({ aboutRef }) => {
  const [launched, setLaunched] = useState(false);
  const { t } = useTranslation();

  const handleStartButton = () => {
    setLaunched(true);
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => setLaunched(false), 1200);
  };

  return (
    <button
      type="button"
      onClick={handleStartButton}
      className="group relative flex min-h-[2.92rem] min-w-[8.5rem] max-w-full cursor-pointer items-center justify-start overflow-hidden rounded-full bg-white/20 mt-8 backdrop-blur-sm px-4 py-2 shadow-[inset_1px_2px_5px_rgba(0,0,0,0.5)] transition-colors duration-[0.8s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] hover:bg-white  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
    >
      <div className="absolute inset-0 flex items-center justify-start px-1 py-0.5">
        <div className="w-0 transition-all duration-[1s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:w-full" />
        <div className="flex aspect-square h-full shrink-0 items-center justify-center rounded-full bg-white shadow-[inset_1px_-1px_3px_0_rgba(0,0,0,0.35)] transition-all duration-[1s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:bg-black group-hover:shadow-[inset_1px_-1px_3px_0_rgba(255,255,255,0.25)]">
          <Rocket
            strokeWidth={2.25}
            className={`size-[1rem] text-black transition-all duration-[0.9s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:text-white ${
              launched
                ? "rotate-45 translate-x-0.5"
                : "-rotate-45 group-hover:rotate-45 group-hover:translate-x-0.5"
            }`}
          />
        </div>
      </div>
      <span className="pl-[3.4rem] pr-[1.1rem] text-sm font-medium font-mono text-white transition-all duration-[1s] ease-[cubic-bezier(0.51,0.026,0.368,1.016)] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] group-hover:text-black">
        {t("hero.cta")}
      </span>
    </button>
  );
};

export default ButtonStart;
