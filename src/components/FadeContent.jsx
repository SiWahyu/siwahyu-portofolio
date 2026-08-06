import { motion } from "motion/react";
import { easeOut, viewport } from "@/lib/motion";

const FadeContent = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity, filter: blur ? "blur(10px)" : "none", scale: 0.96 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={{ ...viewport, amount: threshold, once: true }}
      transition={{ duration: duration / 1000, delay: delay / 1000, ease: easing === "ease-out" ? easeOut : easing }}
    >
      {children}
    </motion.div>
  );
};

export default FadeContent;
