import FadeContent from "@/components/FadeContent";
import AnimatedContent from "@/components/AnimatedContent";
import HeroTitle from "./components/HeroTitle";
import HeroButton from "./components/HeroButton";
import HeroImage from "./components/HeroImage";

export default function Hero({ aboutRef, heroRef }) {
  const handleStartButton = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="container min-h-screen px-6 md:py-32 mx-auto lg:mt-10 bg-transparent lg:px-16 flex flex-col items-center justify-center"
      ref={heroRef}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center w-full mt-10 md:mt-0">
        <div className="w-full lg:w-1/2 mt-10 md:mt-0">
          <div className="lg:max-w-lg text-center lg:text-left">
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
              <HeroButton aboutRef={aboutRef} />
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
