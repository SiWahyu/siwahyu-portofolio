import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/shadcn-io/terminal";

const AboutTerminal = () => {
  return (
    <Terminal>
      <AnimatedSpan delay={0}>
        <div>
          <span className="text-yellow-200">$</span> whoami
        </div>
      </AnimatedSpan>
      <TypingAnimation delay={1000}>
        I&apos;m SiWahyu — Backend & Web Developer 🖥️
      </TypingAnimation>
      <AnimatedSpan delay={3500}>
        <div>
          <span className="text-yellow-200">$ </span>skills --list
        </div>
      </AnimatedSpan>
      <TypingAnimation delay={4000}>
        PHP, Laravel, Javascript, React JS, Next.js
      </TypingAnimation>
      <AnimatedSpan delay={7500}>
        <div>
          <span className="text-yellow-200">$ </span>mission
        </div>
      </AnimatedSpan>
      <TypingAnimation delay={8000}>
        Crafting clean, efficient, and meaningful code ✨
      </TypingAnimation>
      <AnimatedSpan delay={11000}>
        <div>
          <span className="text-yellow-200">$ </span>status
        </div>
      </AnimatedSpan>
      <TypingAnimation delay={11500} duration={80}>
        {`> Always learning. Always building. 🚀`}
      </TypingAnimation>
    </Terminal>
  );
};

export default AboutTerminal;
