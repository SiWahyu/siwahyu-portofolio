import { useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

export default function Navbar({
  aboutRef,
  techRef,
  heroRef,
  projectRef,
  journeyRef,
  contactRef,
  activeSection,
  setActiveSection,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const sections = {
    Home: heroRef,
    About: aboutRef,
    Tech: techRef,
    Project: projectRef,
    Journey: journeyRef,
    Contact: contactRef,
  };

  const handleClick = (e) => {
    const key = e.target.name;
    const ref = sections[key];
    if (ref?.current) {
      setActiveSection(key);
      setIsOpen(false);
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = ["Home", "About", "Tech", "Project", "Journey", "Contact"];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent bg-opacity-80 backdrop-blur-sm transition-all duration-100">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-6 py-3">
        <motion.span
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={handleClick}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Title title={t("nav.title")} />
        </motion.span>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ButtonMobile isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 font-mono">
            {menuItems.map((item, index) => (
              <li key={index}>
                <ButtonMenu
                  name={item}
                  label={t(`nav.menu.${item.toLowerCase()}`)}
                  active={activeSection}
                  onClick={handleClick}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Title = ({ title }) => {
  return (
    <motion.span
      className="self-center text-2xl font-semibold whitespace-nowrap text-white font-mono"
      whileHover={{ letterSpacing: "0.04em" }}
    >
      {title}
    </motion.span>
  );
};

const ButtonMenu = ({ active, name, label, onClick }) => {
  return (
    <motion.button
      className={`block py-2 px-3  rounded-sm md:hover:bg-transparent  md:p-0 ${
        active === name ? "text-white font-medium" : "text-neutral-400"
      }`}
      onClick={onClick}
      name={name}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

const ButtonMobile = ({ isOpen, onClick }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      aria-expanded={isOpen}
    >
      <span className="sr-only">{t("nav.openMenu")}</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M 1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};
