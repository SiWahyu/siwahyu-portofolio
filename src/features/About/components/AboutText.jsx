import { useTranslation } from "react-i18next";

const AboutText = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-xl px-4 md:px-0">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
        {t("about.label")}
      </p>
      <h1 className="text-5xl font-bold text-white lg:text-5xl font-space">
        {t("about.title")}
      </h1>
      <p className="max-w-xl mx-auto mt-4 text-lg leading-8 text-justify text-neutral-300 ">
        {t("about.desc")}
      </p>
    </div>
  );
};

export default AboutText;
