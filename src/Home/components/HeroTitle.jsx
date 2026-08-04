import TextType from "@/components/TextType";

const HeroTitle = () => {
  return (
    <div className="font-space flex flex-col space-y-6">
      <h1 className="flex flex-row items-center justify-center lg:justify-start gap-2 text-white text-4xl font-bold [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]">
        Hey There
        <img
          src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
          className="w-14 -mt-2"
          alt="hello"
        />
        I am
      </h1>
      <div className="flex flex-col space-y-2 [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)] text-5xl">
        <h2 className="text-white  font-bold tracking-wider">SiWahyu</h2>
        <h2 className="text-white  font-bold">
          <TextType
            text={["Backend Developer", "Web Developer"]}
            typingSpeed={85}
            pauseDuration={1500}
            showCursor
            cursorCharacter="▎"
            texts={[
              "Welcome to React Bits! Good to see you!",
              "Build some amazing experiences!",
            ]}
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </h2>
      </div>
    </div>
  );
};

export default HeroTitle;
