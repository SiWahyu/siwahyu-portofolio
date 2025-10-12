import { useState } from "react";

export default function Navbar({
  aboutRef,
  skillRef,
  heroRef,
  projectRef,
  contactRef,
  activeSection,
  setActiveSection,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = {
    Home: heroRef,
    About: aboutRef,
    Skill: skillRef,
    Project: projectRef,
    Contact: contactRef,
  };

  const handleClick = (e) => {
    const key = e.target.name;
    const ref = sections[key];
    if (ref?.current) {
      setActiveSection(key);
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = ["Home", "About", "Skill", "Project", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-80 backdrop-blur-sm transition-all duration-100 z-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-6 py-3">
        <span
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={handleClick}
        >
          <Title title={"SiWahyu"} />
        </span>
        <ButtonMobile isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 font-mono">
            {menuItems.map((item, index) => (
              <li key={index}>
                <ButtonMenu
                  name={item}
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
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-mono">
      {title}
    </span>
  );
};

const ButtonMenu = ({ active, name, onClick }) => {
  return (
    <button
      className={`block py-2 px-3  rounded-sm md:hover:bg-transparent  md:p-0 ${
        active === name ? "text-white font-medium" : "text-neutral-400"
      }`}
      onClick={onClick}
      name={name}
    >
      {name}
    </button>
  );
};

const ButtonMobile = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      aria-expanded={isOpen}
    >
      <span className="sr-only">Open main menu</span>
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
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
};
