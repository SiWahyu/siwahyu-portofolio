import AboutCard from "./components/AboutCard";
import AboutTerminal from "./components/AboutTerminal";

// eslint-disable-next-line react/prop-types
export default function About({ aboutRef }) {
  return (
    <div
      className="container min-h-screen flex flex-col space-y-6 lg:py-16 lg:flex-row lg:items-center justify-center gap-4 px-4 mx-auto"
      ref={aboutRef}
    >
      <div
        className="flex items-center justify-center w-full h-96 lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <AboutTerminal />
      </div>
      <div
        className="flex flex-col items-center w-full lg:flex-row lg:w-1/2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <AboutCard />
      </div>
    </div>
  );
}
