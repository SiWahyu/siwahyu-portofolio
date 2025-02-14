import { TypeAnimation } from "react-type-animation";
import siwahyuImage from "../assets/siwahyu.png";

export default function Hero({ aboutRef, ref }) {
  const handleStartButton = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="container h-screen px-6 md:py-32 mx-auto lg:mt-10 bg-transparent lg:px-16 flex flex-col items-center justify-center"
      ref={ref}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center w-full mt-10 md:mt-0">
        <div className="w-full lg:w-1/2 mt-10">
          <div className="lg:max-w-lg text-center lg:text-left">
            <h1>
              <div className="text-white text-xl font-bold font-mono">
                Hey There 👋 I am
              </div>
              <div className="text-white text-2xl md:text-4xl font-bold mt-5 ">
                SiWahyu
              </div>
              <div className="text-white text-2xl md:text-4xl font-bold mt-2 ">
                <TypeAnimation
                  sequence={["Backend Developer", 1500, "Web Developer", 1500]}
                  wrapper="span"
                  speed={170}
                  repeat={Infinity}
                />
              </div>
            </h1>
            <button
              className="btn bg-transparent font-bold border border-white text-white hover:bg-white hover:text-gray-700 mt-8 px-10 py-3"
              onClick={handleStartButton}
            >
              <span className="mr-1">🚀</span> Mulai
            </button>
          </div>
        </div>

        {/* Gambar */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <img
            className="h-full lg:max-w-3xl"
            src={siwahyuImage}
            alt="Catalogue-pana.svg"
            width="350px"
          />
        </div>
      </div>
    </div>
  );
}
