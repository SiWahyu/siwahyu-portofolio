import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

const CardSocialMedia = ({ media }) => {
  return (
    <motion.article
      className="px-5 py-3 glass-card rounded-2xl"
      variants={fadeUp}
      whileTap={{ scale: 0.985 }}
    >
      <div className="flex items-center justify-center gap-4">
        <span>{media.icon}</span>
        <span className="text-sm">{media.name}</span>
      </div>
    </motion.article>
  );
};

export default CardSocialMedia;
