import Navbar from "./components/Navbar";
import Hero from "./features/Home/Hero";
import About from "./features/About/About";
import Tech from "./features/Tech/Tech";
import { useEffect, useRef, useState } from "react";
import { MotionConfig } from "motion/react";
import "@fontsource/chakra-petch/latin-400.css";
import "@fontsource/chakra-petch/latin-500.css";
import "@fontsource/chakra-petch/latin-600.css";
import "@fontsource/chakra-petch/latin-700.css";
import Project from "./features/Project/Project";
import Contact from "./features/Contact/Contact";
import Journey from "./features/Journey/Journey";
import PlayMusic from "./components/PlayMusic";
import { ThemeProvider } from "./components/ThemeProvider";
import AppLayout from "./layouts/AppLayout";
import Footer from "./features/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const heroRef = useRef(null);
  const projectRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const sections = [
      { name: "Home", ref: heroRef },
      { name: "About", ref: aboutRef },
      { name: "Tech", ref: techRef },
      { name: "Project", ref: projectRef },
      { name: "Journey", ref: journeyRef },
      { name: "Contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const section = sections.find(
              (s) => s.ref.current === entry.target,
            );
            if (section) setActiveSection(section.name);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <PlayMusic />
        <AppLayout>
          <Navbar
            aboutRef={aboutRef}
techRef={techRef}
            heroRef={heroRef}
            projectRef={projectRef}
            journeyRef={journeyRef}
            contactRef={contactRef}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <Hero aboutRef={aboutRef} heroRef={heroRef} />
          <About aboutRef={aboutRef} />
          <Tech techRef={techRef} />
          <Project projectRef={projectRef} />
          <Journey journeyRef={journeyRef} />
          <Contact contactRef={contactRef} />
          <Footer />
          <ScrollToTop />
        </AppLayout>
      </ThemeProvider>
    </MotionConfig>
  );
}

export default App;
