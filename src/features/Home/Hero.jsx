import FadeContent from "@/components/FadeContent";
import HeroTitle from "./components/HeroTitle";
import ButtonStart from "./components/ButtonStart";
import HeroImage from "./components/HeroImage";
import { motion } from "motion/react";
import { easeOut, viewport } from "@/lib/motion";

export default function Hero({ aboutRef, heroRef }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 mx-auto md:py-32 lg:mt-10 lg:px-16 "
      ref={heroRef}
    >
      <div className="flex flex-col-reverse items-center w-full lg:flex-row md:mt-0">
        <div className="w-full mt-4 lg:w-1/2 md:mt-0">
          <div className="text-center lg:max-w-lg lg:text-left">
            <motion.div
              initial={{ y: -100, scale: 1, opacity: 0.2 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ ...viewport, amount: 0.1, once: true }}
              transition={{ duration: 1, ease: easeOut }}
            >
              <HeroTitle />
            </motion.div>
            <motion.div
              initial={{ y: 100, scale: 1, opacity: 0.2 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ ...viewport, amount: 0.1, once: true }}
              transition={{ duration: 1, ease: easeOut }}
            >
              <div className="flex justify-center lg:justify-start">
                <ButtonStart aboutRef={aboutRef} />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <HeroImage />
          </FadeContent>
        </div>
      </div>
    </div>
  );
}
