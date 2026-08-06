import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

const CardSocialMedia = ({ media }) => {
  return (
    <motion.article
      className="px-4 py-2.5 glass-card rounded-2xl"
      variants={fadeUp}
      whileTap={{ scale: 0.985 }}
    >
      <a href={media.link} className="flex items-center justify-center gap-1.5">
        <span>{media.icon}</span>
        <span className="text-sm">{media.name}</span>
      </a>
    </motion.article>
  );
};

export default CardSocialMedia;
