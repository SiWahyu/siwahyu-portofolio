import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import Icons from "./components/Icons";
import Circle from "./components/Circle";
import { motion } from "motion/react";
import { fadeUp, viewport } from "@/lib/motion";

const beamConfig = [
  { curvature: -75, endYOffset: -10 },
  { curvature: -100, endYOffset: -5 },
  { curvature: 0, endYOffset: 0 },
  { curvature: 100, endYOffset: 5 },
  { curvature: 75, endYOffset: 10 },
];

const leftTech = ["php", "javascript", "go", "tailwind", "mysql"];
const rightTech = ["laravel", "react", "next", "postgre", "github"];

export default function Tech({ techRef }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const leftRefs = useRef(leftTech.map(() => ({ current: null })));
  const rightRefs = useRef(rightTech.map(() => ({ current: null })));

  return (
    <div className="flex items-center h-screen scroll-mt-24" ref={techRef}>
      <motion.div
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
        ref={containerRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="flex items-center justify-between w-full max-w-5xl">
          {/* kiri */}
          <div className="flex flex-col items-center gap-6">
            {leftTech.map((tech, i) => (
              <Circle
                key={tech}
                ref={(el) => {
                  leftRefs.current[i].current = el;
                }}
              >
                {(() => {
                  const Icon = Icons[tech];
                  return <Icon />;
                })()}
              </Circle>
            ))}
          </div>

          {/* tengah */}
          <div className="flex items-center justify-center">
            <Circle
              ref={centerRef}
              static
              className="relative w-auto p-6 overflow-hidden font-bold bg-black rounded-full font-space"
            >
              <ShineBorder
                shineColor={["#ffaa40", "#9c40ff", "#3b82f6"]}
                borderWidth={3}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              {t("tech.title")}
            </Circle>
          </div>

          {/* kanan */}
          <div className="flex flex-col items-center gap-6">
            {rightTech.map((tech, i) => (
              <Circle
                key={tech}
                ref={(el) => {
                  rightRefs.current[i].current = el;
                }}
              >
                {(() => {
                  const Icon = Icons[tech];
                  return <Icon />;
                })()}
              </Circle>
            ))}
          </div>
        </div>

        {/* animasi dari kiri ke tengah */}
        {leftTech.map((tech, i) => (
          <AnimatedBeam
            key={`left-${tech}`}
            containerRef={containerRef}
            fromRef={leftRefs.current[i]}
            toRef={centerRef}
            curvature={beamConfig[i].curvature}
            endYOffset={beamConfig[i].endYOffset}
          />
        ))}

        {/* animasi dari kanan ke tengah */}
        {rightTech.map((tech, i) => (
          <AnimatedBeam
            key={`right-${tech}`}
            containerRef={containerRef}
            fromRef={rightRefs.current[i]}
            toRef={centerRef}
            curvature={beamConfig[i].curvature}
            endYOffset={beamConfig[i].endYOffset}
          />
        ))}
      </motion.div>
    </div>
  );
}
