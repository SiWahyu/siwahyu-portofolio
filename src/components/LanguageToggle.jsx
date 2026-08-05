import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const LANGS = [
  { code: "ID" },
  { code: "EN" },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "id").toLowerCase();

  const setLang = (code) => i18n.changeLanguage(code.toLowerCase());

  return (
    <div className="relative flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-sm">
      {LANGS.map(({ code }) => {
        const active = lang === code.toLowerCase();
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`relative rounded-full px-3 py-1 font-mono text-sm font-semibold transition-colors ${
              active
                ? "text-slate-950"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {active && (
              <motion.span
                layoutId="language-pill"
                className="absolute inset-0 rounded-full bg-slate-200"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{code}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
