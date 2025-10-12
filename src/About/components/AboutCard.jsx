import { ShineBorder } from "@/components/ui/shine-border";

const AboutCard = () => {
  return (
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
        Halo, saya Wahyu seorang lulusan SMK jurusan Rekayasa Perangkat Lunak.
        Saya memiliki minat dalam bidang IT khusus nya di bidang Backend
        Developer & Web Developer.
      </p>
    </div>
  );
};

export default AboutCard;
