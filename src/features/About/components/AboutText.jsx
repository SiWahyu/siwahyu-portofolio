import { useTranslation } from "react-i18next";

const AboutText = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-xl px-4 md:px-0">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {t("about.label")}
      </p>
      <h1 className="text-5xl font-bold text-white lg:text-5xl font-space [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]">
        {t("about.title")}
      </h1>
      <p className="max-w-xl mx-auto mt-4 leading-8 text-justify text-neutral-300 text-lg [text-shadow:0_0_10px_rgba(34,211,238,0.85),0_0_22px_rgba(59,130,246,0.55),0_0_38px_rgba(139,92,246,0.4),0_0_60px_rgba(217,70,239,0.25)]">
        {t("about.desc")}
      </p>
    </div>
  );
};

export default AboutText;
