import siwahyuImage from "../../assets/siwahyu.png";
import { motion } from "motion/react";

const HeroImage = () => {
  return (
    <motion.img
      className="h-full w-72 lg:w-80"
      src={siwahyuImage}
      draggable="false"
      alt="SiWahyu"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.04, rotate: 1 }}
    />
  );
};

export default HeroImage;
