import { TypeAnimation } from "react-type-animation";
import siwahyuImage from "../assets/siwahyu.png";
import FadeContent from "@/components/FadeContent";
import AnimatedContent from "@/components/AnimatedContent";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero({ aboutRef, ref }) {
  const handleStartButton = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="container min-h-screen px-6 md:py-32 mx-auto lg:mt-10 bg-transparent lg:px-16 flex flex-col items-center justify-center"
      ref={ref}
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
              <h1>
                <div className="text-white text-xl md:text-3xl font-bold font-mono">
                  Hey There 👋 I am
                </div>
                <div className="text-white text-3xl md:text-5xl font-bold mt-10 font-space tracking-wider">
                  SiWahyu
                </div>
                <div className="text-white text-3xl md:text-5xl font-bold mt-4 font-space">
                  <TypeAnimation
                    sequence={[
                      "Backend Developer",
                      1500,
                      "Web Developer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={170}
                    repeat={Infinity}
                  />
                </div>
              </h1>
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
              <InteractiveHoverButton
                className="border border-gray-700 rounded-lg py-3 px-10 font-mono mt-8"
                onClick={handleStartButton}
              >
                🚀 Mulai
              </InteractiveHoverButton>
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
            <img
              className="h-full w-72 lg:w-80"
              src={siwahyuImage}
              alt="Catalogue-pana.svg"
            />
          </FadeContent>
        </div>
      </div>
    </div>
  );
}
