import AboutCard from "./components/AboutCard";
import AboutImage from "./components/AboutImage";
import { motion } from "motion/react";
import { fadeLeft, fadeRight, viewport } from "@/lib/motion";

// eslint-disable-next-line react/prop-types
export default function About({ aboutRef }) {
  return (
    <div
      className="container flex flex-col items-center min-h-screen gap-8 px-4 mx-auto sm:px-6 lg:flex-row justify-evenly"
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
        <AboutCard />
      </motion.div>
    </div>
  );
}
