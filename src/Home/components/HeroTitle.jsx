import { TypeAnimation } from "react-type-animation";
const HeroTitle = () => {
  return (
    <h1>
      <div className="text-white text-xl md:text-3xl font-bold font-mono">
        Hey There 👋 I am
      </div>
      <div className="text-white text-3xl md:text-5xl font-bold mt-10 font-space tracking-wider">
        SiWahyu
      </div>
      <div className="text-white text-3xl md:text-5xl font-bold mt-4 font-space">
        <TypeAnimation
          sequence={["Backend Developer", 1500, "Web Developer", 1500]}
          wrapper="span"
          speed={170}
          repeat={Infinity}
        />
      </div>
    </h1>
  );
};

export default HeroTitle;
