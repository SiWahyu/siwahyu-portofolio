import { useRef } from "react";
import {
  Award,
  BookOpen,
  Briefcase,
  CalendarDays,
  Check,
  Code2,
  Database,
  Flag,
  Globe,
  GraduationCap,
  Layers,
  Lightbulb,
  Palette,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { easeOut, viewport } from "@/lib/motion";
import { useTranslation } from "react-i18next";

const iconMap = {
  sparkles: Sparkles,
  code2: Code2,
  layers: Layers,
  rocket: Rocket,
  graduationcap: GraduationCap,
  bookopen: BookOpen,
  briefcase: Briefcase,
  award: Award,
  target: Target,
  users: Users,
  globe: Globe,
  database: Database,
  zap: Zap,
  lightbulb: Lightbulb,
  flag: Flag,
  palette: Palette,
};

function MarkerDot({ Icon, position = "top", size = 17 }) {
  const dotRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: dotRef,
    offset: ["start 0.82", "start 0.48"],
  });
  const active = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  });

  const scale = useTransform(active, [0, 1], [0.88, 1.08]);
  const color = useTransform(active, [0, 1], ["#94a3b8", "#67e8f9"]);
  const borderColor = useTransform(
    active,
    [0, 1],
    ["rgba(148,163,184,0.3)", "rgba(103,232,238,0.9)"],
  );
  const boxShadow = useTransform(
    active,
    [0, 1],
    [
      "0 0 0px rgba(34,211,238,0)",
      "0 0 26px rgba(34,211,238,0.65), 0 0 6px rgba(34,211,238,0.9)",
    ],
  );

  return (
    <motion.span
      ref={dotRef}
      initial={false}
      style={{ scale, color, borderColor, boxShadow }}
      className={`absolute left-4 z-20 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-[#090b12] bg-[#090b12] md:left-1/2 md:-translate-x-1/2 ${
        position === "top" ? "top-0" : "bottom-0"
      }`}
    >
      <Icon size={size} />
    </motion.span>
  );
}

export default function Journey({ journeyRef }) {
  const { t } = useTranslation();
  const journey = t("journey.items", { returnObjects: true });
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.35"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section ref={journeyRef} className="relative px-6 py-24 sm:px-6 md:py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <div className="grid px-4 md:grid-cols-2 md:flex-row md:justify-center md:px-0">
            <div className="flex flex-col text-start">
              <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {t("journey.label")}
              </p>
              <h2 className="text-5xl font-bold text-white font-space md:text-5xl [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]">
                {t("journey.title")}
              </h2>
            </div>
            <p className="max-w-xl mx-auto mt-4 text-start place-self-end  leading-6 text-neutral-300 text-base tracking-wide [text-shadow:0_0_10px_rgba(34,211,238,0.85),0_0_22px_rgba(59,130,246,0.55),0_0_38px_rgba(139,92,246,0.4),0_0_60px_rgba(217,70,239,0.25)]">
              {t("journey.desc")}
            </p>
          </div>
        </motion.div>
        <div ref={timelineRef} className="relative">
          <div className="absolute w-1 top-5 bottom-5 left-4 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.15)] md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: progress }}
            className="absolute bottom-5 left-4 top-5 z-[1] w-1 origin-top rounded-full bg-gradient-to-b from-cyan-300 via-blue-500 to-violet-500 shadow-[0_0_10px_rgba(34,211,238,0.7),0_0_24px_rgba(34,211,238,0.45)] md:left-1/2 md:-translate-x-1/2"
          />
          <div className="space-y-10 md:space-y-16">
            {journey.map((item, index) => {
              const Marker = iconMap[item.icon] ?? Sparkles;
              return (
                <article
                  key={index}
                  className={`relative grid pl-16 md:grid-cols-2 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-[4.5rem]" : "md:pl-[4.5rem]"
                  }`}
                >
                  <MarkerDot Icon={Marker} position="top" />
                  <div
                    className={`${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"} group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-6 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/50 sm:p-7`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-60" />
                    <span className="mb-5 inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 font-mono text-xs text-cyan-200">
                      0{index + 1} · {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white font-space">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 text-sm text-sky-300">
                      <CalendarDays size={16} />
                      <span>{item.organization}</span>
                    </div>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <Check
                            className="mt-1 text-blue-400 shrink-0"
                            size={16}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-5 mt-6 border-t border-white/10">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.035] px-2.5 py-1 font-mono text-xs text-sky-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="relative h-16 -mt-14">
            <MarkerDot Icon={Rocket} position="bottom" size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}
