import { motion } from "motion/react";
import { easeOut, viewport } from "@/lib/motion";

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const axis = direction === "horizontal" ? "x" : "y";
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      initial={{
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
      }}
      whileInView={{ [axis]: 0, scale: 1, opacity: 1 }}
      viewport={{ ...viewport, amount: threshold, once: false }}
      transition={{
        duration,
        delay,
        ease: ease === "power3.out" ? easeOut : ease,
      }}
      onAnimationComplete={onComplete}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContent;
