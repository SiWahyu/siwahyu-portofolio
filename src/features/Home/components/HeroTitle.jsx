import TextType from "@/components/TextType";
import { useTranslation } from "react-i18next";

const HeroTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-6 font-space">
      <h1 className="flex flex-row items-center justify-center lg:justify-start gap-2 text-white text-3xl md:text-4xl font-bold [text-shadow:0_0_8px_rgba(34,211,238,0.4),0_0_20px_rgba(34,211,238,0.2)]">
        {t("hero.greeting")}
        <img
          src="/images/hello.gif"
          className="-mt-2 w-14"
          alt="hello"
          width={56}
        />
        {t("hero.iam")}
      </h1>
      <div className="flex flex-col space-y-2 [text-shadow:0_0_8px_rgba(34,211,238,0.4),0_0_20px_rgba(34,211,238,0.2)] text-4xl md:text-5xl">
        <h2 className="font-bold tracking-wider text-white">SiWahyu</h2>
        <h2 className="font-bold text-white h-[60px]  w-full">
          <TextType
            text={t("hero.roles", { returnObjects: true })}
            typingSpeed={85}
            pauseDuration={1500}
            showCursor
            cursorCharacter="▎"
            texts={t("hero.textType", { returnObjects: true })}
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </h2>
      </div>
    </div>
  );
};

export default HeroTitle;
