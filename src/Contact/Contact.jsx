import CardSocialMedia from "./components/CardSocialMedia";
import EmailCopy from "./components/EmailCopy";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { GithubIcon, Instagram, LinkedinIcon, MapPin } from "lucide-react";

export default function Contact({ contactRef }) {
  const socialMedia = [
    {
      name: "Github",
      link: "https://github.com/SiWahyu",
      icon: <GithubIcon />,
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com",
      icon: <LinkedinIcon />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/si_yuu.4/",
      icon: <Instagram />,
    },
  ];

  return (
    <section
      ref={contactRef}
      className="flex flex-col items-center justify-center w-full min-h-[80vh] scroll-mt-24"
    >
      <div className="w-full space-y-8">
        <div className="text-center">
          <motion.h2
            className="text-2xl font-bold text-white md:text-5xl font-space [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Contact
          </motion.h2>
          <p className="max-w-xl mx-auto mt-4 text-sm leading-6 text-neutral-300 sm:text-lg tracking-wide  [text-shadow:0_0_10px_rgba(34,211,238,0.85),0_0_22px_rgba(59,130,246,0.55),0_0_38px_rgba(139,92,246,0.4),0_0_60px_rgba(217,70,239,0.25)]">
            Masih terus belajar, tapi serius dalam setiap baris kode yang saya
            tulis. Terbuka untuk peluang sebagai fullstack developer, kolaborasi
            proyek, maupun kesempatan magang di tim yang suportif.
          </p>
        </div>
        <EmailCopy email="fwahyu839@gmail.com" />
        <div className="flex items-center justify-center w-full ">
          <div
            className="w-1/2 md:w-1/3 xl:w-[30%] 
          flex flex-col items-center justify-between lg:flex-row"
          >
            {socialMedia.map((media, index) => (
              <CardSocialMedia key={index} media={media} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-center">
          <MapPin className="size-3 text-cyan-300" />
          <span className="text-xs">
            Based in Indonesia • Available Globally
          </span>
        </div>
      </div>
    </section>
  );
}
