import AboutText from "./components/AboutText";
import AboutImage from "./components/AboutImage";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, viewport } from "@/lib/motion";

export default function About({ aboutRef }) {
  return (
    <div
      className="flex flex-col items-center gap-8 px-4 mx-auto min-h-svh sm:px-6 lg:flex-row justify-evenly"
      ref={aboutRef}
    >
      <motion.div
        className="flex justify-center w-full lg:w-1/2"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <AboutImage />
      </motion.div>
      <motion.div
        className="flex flex-col lg:w-1/2 "
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <AboutText />
      </motion.div>
    </div>
  );
}
