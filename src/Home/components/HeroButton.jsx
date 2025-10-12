import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const HeroButton = ({ aboutRef }) => {
  const handleStartButton = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InteractiveHoverButton
      className="border border-gray-700 rounded-lg py-3 px-10 font-mono mt-8"
      onClick={handleStartButton}
    >
      🚀 Mulai
    </InteractiveHoverButton>
  );
};

export default HeroButton;
