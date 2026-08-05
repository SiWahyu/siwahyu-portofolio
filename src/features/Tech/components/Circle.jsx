import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion } from "motion/react";
const Circle = forwardRef(
  ({ className, children, static: isStatic = false }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-card z-10 flex size-16 items-center justify-center rounded-xl border border-white/10 p-0 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
        whileHover={
          isStatic
            ? undefined
            : {
                scale: 1.12,
                y: -3,
                borderColor: "rgba(103,232,249,0.55)",
                boxShadow: "0 0 24px -6px rgba(34,211,238,0.5)",
              }
        }
        whileTap={isStatic ? undefined : { scale: 0.95 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
      >
        {children}
      </motion.div>
    );
  },
);
Circle.displayName = "Circle";

export default Circle;
