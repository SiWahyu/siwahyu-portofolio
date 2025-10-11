import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/shadcn-io/terminal";
import { ShineBorder } from "@/components/ui/shine-border";
import { useTheme } from "../components/theme-provider";
// eslint-disable-next-line react/prop-types
export default function About({ ref }) {
  const { theme } = useTheme();
  return (
    <div
      className="container min-h-screen flex flex-col space-y-6 lg:py-16 lg:flex-row lg:items-center justify-center gap-4 px-4 mx-auto"
      ref={ref}
    >
      <div
        className="flex items-center justify-center w-full h-96 lg:w-1/2"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <Terminal>
          <AnimatedSpan delay={0}>
            <div>
              <span className="text-yellow-200">$</span> whoami
            </div>
          </AnimatedSpan>
          <TypingAnimation delay={1000}>
            I'm SiWahyu — Backend & Web Developer 🖥️
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
      </div>
      <div
        className="flex flex-col items-center w-full lg:flex-row lg:w-1/2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="max-w-lg p-7 relative w-full overflow-hidden">
          <ShineBorder
            shineColor="#C0C0C0"
            duration={10}
            borderWidth={2}
            className="rounded-lg"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <h1 className="text-3xl font-bold tracking-wide text-white lg:text-4xl font-space">
            About Me
          </h1>
          <p className="mt-5 text-white text-justify text-xl font-mono">
            Halo, saya Wahyu seorang lulusan SMK jurusan Rekayasa Perangkat
            Lunak. Saya memiliki minat dalam bidang IT khusus nya di bidang
            Backend Developer & Web Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
