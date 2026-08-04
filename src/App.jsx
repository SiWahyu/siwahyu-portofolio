import Navbar from "./components/Navbar";
import Hero from "./Home/Hero";
import About from "./About/About";
import Skill from "./Skill/Skill";
import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "motion/react";
import "@fontsource/chakra-petch/400.css";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Journey from "./Journey/Journey";
import PlayMusic from "./components/PlayMusic";
import { ThemeProvider } from "./components/theme-provider";
import AppLayout from "./Layouts/AppLayout";
import Footer from "./Footer/Footer";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = [
      { name: "Home", ref: heroRef },
      { name: "About", ref: aboutRef },
      { name: "Skill", ref: skillRef },
      { name: "Project", ref: projectRef },
      { name: "Journey", ref: journeyRef },
      { name: "Contact", ref: contactRef },
    ];

    const handleScroll = () => {
      const middleScreen = window.innerHeight / 2;

      for (let section of sections) {
        const top = section.ref.current.getBoundingClientRect().top;
        const height = section.ref.current.offsetHeight;

        if (top <= middleScreen && top + height >= middleScreen) {
          setActiveSection(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <PlayMusic />
        <AppLayout>
          <Navbar
            aboutRef={aboutRef}
            skillRef={skillRef}
            heroRef={heroRef}
            projectRef={projectRef}
            journeyRef={journeyRef}
            contactRef={contactRef}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Hero aboutRef={aboutRef} heroRef={heroRef} />
          <About aboutRef={aboutRef} />
          <Skill skillRef={skillRef} />
          <Project projectRef={projectRef} />
          <Journey journeyRef={journeyRef} />
          <Contact contactRef={contactRef} />
          <Footer />
        </AppLayout>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
