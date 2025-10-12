import { useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import Icons from "./components/Icons";
import Circle from "./components/Circle";

// eslint-disable-next-line react/prop-types
export default function Skill({ skillRef }) {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const centerRef = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);
  const div8Ref = useRef(null);
  const div9Ref = useRef(null);
  const div10Ref = useRef(null);

  return (
    <div className="h-screen flex items-center" ref={skillRef}>
      <div
        className="relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10"
        ref={containerRef}
      >
        <div className="flex w-full max-w-5xl items-center justify-between">
          {/* kiri */}
          <div className="flex flex-col items-center gap-6">
            <Circle ref={div1Ref}>
              <Icons.php />
            </Circle>
            <Circle ref={div2Ref}>
              <Icons.javascript />
            </Circle>
            <Circle ref={div3Ref}>
              <Icons.bootstrap />
            </Circle>
            <Circle ref={div4Ref}>
              <Icons.tailwind />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.mysql />
            </Circle>
          </div>

          {/* tengah */}
          <div className="flex items-center justify-center">
            <Circle
              ref={centerRef}
              className="rounded-xl font-space p-0 w-auto px-3 font-bold bg-neutral-800 border border-neutral-600 relative overflow-hidden"
            >
              <ShineBorder
                shineColor="#0096ff"
                duration={5}
                borderWidth={2}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              Tech Stack
            </Circle>
          </div>

          {/* kanan */}
          <div className="flex flex-col items-center gap-6">
            <Circle ref={div6Ref}>
              <Icons.laravel />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.react />
            </Circle>
            <Circle ref={div8Ref}>
              <Icons.next />
            </Circle>
            <Circle ref={div9Ref}>
              <Icons.postgre />
            </Circle>
            <Circle ref={div10Ref}>
              <Icons.supabase />
            </Circle>
          </div>
        </div>

        {/*animasi dari  kiri ke tengah */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={centerRef}
          curvature={-100}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={centerRef}
          curvature={-75}
          endYOffset={-5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={centerRef}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div4Ref}
          toRef={centerRef}
          curvature={75}
          endYOffset={5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={centerRef}
          curvature={100}
          endYOffset={10}
        />

        {/* animasi dari kanan ke tengah */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={centerRef}
          curvature={-100}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={centerRef}
          curvature={-75}
          endYOffset={-5}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div8Ref}
          toRef={centerRef}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div9Ref}
          toRef={centerRef}
          curvature={75}
          endYOffset={5}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div10Ref}
          toRef={centerRef}
          curvature={100}
          endYOffset={10}
          reverse
        />
      </div>
    </div>
  );
}
