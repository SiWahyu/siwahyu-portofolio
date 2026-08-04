const AboutCard = () => {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold tracking-wide text-white lg:text-5xl font-space [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]">
        About Me
      </h1>
      <p className="max-w-xl mx-auto mt-4 leading-8 text-justify text-neutral-300 md:text-lg [text-shadow:0_0_10px_rgba(34,211,238,0.85),0_0_22px_rgba(59,130,246,0.55),0_0_38px_rgba(139,92,246,0.4),0_0_60px_rgba(217,70,239,0.25)]">
        Halo, saya Wahyu seorang lulusan SMK jurusan Rekayasa Perangkat Lunak.
        Saya memiliki minat dalam bidang IT khusus nya di bidang Backend
        Developer & Web Developer.
      </p>
    </div>
  );
};

export default AboutCard;
