import FadeContent from "@/components/FadeContent";
import AnimatedContent from "@/components/AnimatedContent";
import HeroTitle from "./components/HeroTitle";
import ButtonStart from "./components/ButtonStart";
import HeroImage from "./components/HeroImage";

export default function Hero({ aboutRef, heroRef }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 mx-auto bg-transparent  md:py-32 lg:mt-10 lg:px-16"
      ref={heroRef}
    >
      <div className="flex flex-col-reverse items-center w-full mt-10 lg:flex-row md:mt-0">
        <div className="w-full mt-10 lg:w-1/2 md:mt-0">
          <div className="text-center lg:max-w-lg lg:text-left">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={true}
              duration={1}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <HeroTitle />
            </AnimatedContent>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0}
            >
              <div className="flex justify-center lg:justify-start">
                <ButtonStart aboutRef={aboutRef} />
              </div>
            </AnimatedContent>
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
