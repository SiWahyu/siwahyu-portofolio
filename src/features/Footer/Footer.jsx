import { Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-row w-full justify-evenly glass-card min-h-[10vh] items-center border-none py-9">
      <div className="flex flex-row items-center gap-3">
        <div className="rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-slate-500 p-[1px] h-fit w-fit">
          <div className="p-2 rounded-full bg-slate-950">
            <Rocket className="size-5 text-cyan-300" />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <span className="font-semibold">{t("footer.name")}</span>
          <span className="text-xs text-neutral-300">
            {t("footer.copyright")} &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-4 text-xs text-neutral-300">
        <a
          href={t("contact.socialLinks.github")}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-300"
        >
          {t("footer.social.github")}
        </a>
        <a
          href={t("contact.socialLinks.linkedin")}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-cyan-300"
        >
          {t("footer.social.linkedin")}
        </a>
        <a
          href={`mailto:${t("contact.email")}`}
          className="transition hover:text-cyan-300"
        >
          {t("footer.social.email")}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
