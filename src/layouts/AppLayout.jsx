import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { useEffect, useMemo, useState, memo } from "react";

const MemoizedParticles = memo(Particles);

const amongusImages = [
  { src: "/images/amongus/amongus_blue.png", width: 205, height: 267 },
  { src: "/images/amongus/amongus_cyan.png", width: 207, height: 265 },
  { src: "/images/amongus/amongus_green.png", width: 204, height: 266 },
  { src: "/images/amongus/amongus_lime.png", width: 206, height: 267 },
  { src: "/images/amongus/amongus_orange.png", width: 205, height: 265 },
  { src: "/images/amongus/amongus_pink.png", width: 205, height: 265 },
  { src: "/images/amongus/amongus_red.png", width: 204, height: 267 },
  { src: "/images/amongus/amongus_white.png", width: 205, height: 267 },
];

const desktopOptions = {
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
          images: amongusImages,
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
};

const mobileOptions = {
  fpsLimit: 30,
  particles: {
    number: {
      value: 40,
      density: {
        enable: false,
        area: 800,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 1 },
    },
    size: {
      value: 2,
    },
    move: {
      angle: {
        value: 10,
        offset: 0,
      },
      enable: true,
      speed: 2,
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
        enable: false,
      },
      resize: true,
    },
  },
  detectRetina: false,
  background: {
    color: "#000000",
  },
  emitters: {
    position: {
      y: 55,
      x: -30,
    },
    rate: {
      delay: 12,
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
          images: amongusImages,
        },
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 32,
      },
      move: {
        speed: 6,
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
          speed: 4,
          sync: true,
        },
      },
    },
  },
};

export default function AppLayout({ children }) {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadEmittersPlugin(engine);
    }).then(() => {
      setInit(true);
    });

    document.body.style.overflowX = "hidden";
  }, []);

  const options = useMemo(
    () => (isMobile ? mobileOptions : desktopOptions),
    [isMobile],
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black scroll-smooth">
      {!init && <div className="absolute inset-0 w-full h-full bg-black"></div>}

      {init && (
        <MemoizedParticles
          id="tsparticles"
          options={options}
          className="absolute inset-0 z-0 w-full h-full"
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}