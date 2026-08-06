import CardSocialMedia from "./components/CardSocialMedia";
import EmailCopy from "./components/EmailCopy";
import { motion } from "motion/react";
import { easeOut, fadeUp, viewport } from "@/lib/motion";
import { GithubIcon, Instagram, LinkedinIcon, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact({ contactRef }) {
  const { t } = useTranslation();

  const socialMedia = [
    {
      name: t("contact.social.github"),
      link: t("contact.socialLinks.github"),
      icon: <GithubIcon className="size-4.5" />,
    },
    {
      name: t("contact.social.linkedin"),
      link: t("contact.socialLinks.linkedin"),
      icon: <LinkedinIcon className="size-4.5" />,
    },
    {
      name: t("contact.social.instagram"),
      link: t("contact.socialLinks.instagram"),
      icon: <Instagram className="size-4.5" />,
    },
  ];

  return (
    <section
      ref={contactRef}
      className="flex flex-col items-center justify-center w-full min-h-[80vh]"
    >
      <div className="w-full space-y-10">
        <div className="px-4 text-center md:px-0">
          <motion.p
            className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {t("contact.label")}
          </motion.p>
          <motion.h2
            className="text-5xl font-bold text-white md:text-5xl font-space"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {t("contact.title")}
          </motion.h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-6 tracking-wide text-neutral-300">
            {t("contact.desc")}
          </p>
        </div>
        <EmailCopy email={t("contact.email")} />
        <div className="flex items-center justify-center w-full ">
          <div
            className="w-3/4 md:w-1/2 xl:w-[30%] 
            grid grid-cols-2 gap-2 px-6 py-4 md:grid-cols-3"
          >
            {socialMedia.map((media, index) => (
              <CardSocialMedia key={index} media={media} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-center">
          <MapPin className="size-3 text-cyan-300" />
          <span className="text-xs">{t("contact.location")}</span>
        </div>
      </div>
    </section>
  );
}
