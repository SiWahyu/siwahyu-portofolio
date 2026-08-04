import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion } from "motion/react";
// eslint-disable-next-line react/prop-types
const Circle = forwardRef(({ className, children }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "glass-card z-10 flex size-16 items-center justify-center rounded-full p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
    >
      {children}
    </motion.div>
  );
});
Circle.displayName = "Circle";

export default Circle;
