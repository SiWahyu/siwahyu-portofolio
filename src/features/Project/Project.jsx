import CardProject from "./components/CardProject";
import { motion } from "motion/react";
import { fadeUp, easeOut, staggerContainer, viewport } from "@/lib/motion";
import { useTranslation } from "react-i18next";

const projectImages = import.meta.glob(
  "../../assets/projects/**/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true, import: "default" },
);

const resolveImages = (names = []) =>
  names
    .map((name) => projectImages[`../../assets/projects/${name}`])
    .filter(Boolean);

export default function Project({ projectRef }) {
  const { t } = useTranslation();
  const projects = t("project.items", { returnObjects: true }).map(
    (project) => ({ ...project, images: resolveImages(project.images) }),
  );

  return (
    <div
      className="flex justify-center min-h-screen scroll-mt-24"
      ref={projectRef}
    >
      <div className="max-w-6xl text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.p
            className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 px-4 md:px-0"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {t("project.label")}
          </motion.p>

          <motion.h2
            className="text-5xl px-4 md:px-0 font-bold text-white md:text-5xl font-space [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {t("project.title")}
          </motion.h2>

          <motion.p
            className="max-w-xl px-4 md:px-0 mx-auto mt-4 leading-6 text-neutral-300 text-base tracking-wide [text-shadow:0_0_10px_rgba(34,211,238,0.85),0_0_22px_rgba(59,130,246,0.55),0_0_38px_rgba(139,92,246,0.4),0_0_60px_rgba(217,70,239,0.25)]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
          >
            {t("project.desc")}
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 px-4 py-6 mt-6 md:px-0"
          variants={staggerContainer(0.15, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex justify-center"
            >
              <CardProject
                project={project}
                accent={["cyan", "blue", "pink"][index % 3]}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
