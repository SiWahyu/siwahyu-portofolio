import astronautIllustration from "@/assets/astronaut.svg";

const AboutImage = () => (
  <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl">
    <img
      src={astronautIllustration}
      alt="Ilustrasi developer sedang membuat aplikasi"
      className="w-full h-auto select-none"
      draggable="false"
    />
  </div>
);

export default AboutImage;
