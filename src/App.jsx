import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "@fontsource/chakra-petch/400.css";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [init, setInit] = useState(false);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      particles: {
        groups: {
          z5000: {
            number: {
              value: 70,
            },
            zIndex: {
              value: 5000,
            },
          },
          z7500: {
            number: {
              value: 30,
            },
            zIndex: {
              value: 75,
            },
          },
          z2500: {
            number: {
              value: 50,
            },
            zIndex: {
              value: 25,
            },
          },
          z1000: {
            number: {
              value: 40,
            },
            zIndex: {
              value: 10,
            },
          },
        },
        number: {
          value: 200,
          density: {
            enable: false,
            area: 800,
          },
        },
        color: {
          value: "#fff",
          animation: {
            enable: false,
            speed: 20,
            sync: true,
          },
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          random: false,
          animation: {
            enable: false,
            speed: 3,
            sync: false,
          },
        },
        size: {
          value: 3,
        },
        move: {
          angle: {
            value: 10,
            offset: 0,
          },
          enable: true,
          speed: 5,
          direction: "right",
          random: false,
          straight: true,
          outModes: "out",
        },
        zIndex: {
          value: 5,
          opacityRate: 0.5,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: false,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
          },
          repulse: {
            distance: 200,
          },
          push: {
            quantity: 4,
            groups: ["z5000", "z7500", "z2500", "z1000"],
          },
          remove: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
      background: {
        color: "#000000",
      },
      emitters: {
        position: {
          y: 55,
          x: -30,
        },
        rate: {
          delay: 7,
          quantity: 1,
        },
        size: {
          width: 0,
          height: 0,
        },
        particles: {
          shape: {
            type: "images",
            options: {
              images: [
                {
                  src: "https://particles.js.org/images/amongus_blue.png",
                  width: 205,
                  height: 267,
                },
                {
                  src: "https://particles.js.org/images/amongus_cyan.png",
                  width: 207,
                  height: 265,
                },
                {
                  src: "https://particles.js.org/images/amongus_green.png",
                  width: 204,
                  height: 266,
                },
                {
                  src: "https://particles.js.org/images/amongus_lime.png",
                  width: 206,
                  height: 267,
                },
                {
                  src: "https://particles.js.org/images/amongus_orange.png",
                  width: 205,
                  height: 265,
                },
                {
                  src: "https://particles.js.org/images/amongus_pink.png",
                  width: 205,
                  height: 265,
                },
                {
                  src: "https://particles.js.org/images/amongus_red.png",
                  width: 204,
                  height: 267,
                },
                {
                  src: "https://particles.js.org/images/amongus_white.png",
                  width: 205,
                  height: 267,
                },
              ],
            },
          },
          opacity: {
            value: 1,
          },
          size: {
            value: 40,
          },
          move: {
            speed: 10,
            outModes: {
              default: "destroy",
              left: "none",
            },
            straight: true,
          },
          zIndex: {
            value: 0,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 10,
              sync: true,
            },
          },
        },
      },
    }),
    []
  );

  return (
    <div className="relative w-full min-h-screen bg-gray-900">
      {/* Particles sebagai background */}
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute inset-0 w-full h-full"
        />
      )}

      {/* Konten di atas Particles */}
      <div className="relative z-10">
        <Navbar
          aboutRef={aboutRef}
          skillRef={skillRef}
          heroRef={heroRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
        <Hero aboutRef={aboutRef} ref={heroRef} />
        <About ref={aboutRef} />
        <Skill ref={skillRef} />
        <Project ref={projectRef} />
        <Contact ref={contactRef} />
      </div>
    </div>
  );
}

export default App;
