import aboutImage from "../assets/about.svg";

export default function About({ ref }) {
  const handleStartRef = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="container min-h-screen flex flex-col mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center justify-center bg-transparent"
      ref={ref}
    >
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          className="object-cover rounded-md"
          src={aboutImage}
          alt="apple watch photo"
          width={"530px"}
        />
      </div>
      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
        <div className="max-w-lg lg:mx-12 border border-gray-800 p-7 rounded-3xl m-3">
          <h1 className="text-3xl font-bold tracking-wide text-white lg:text-4xl font-space">
            About Me
          </h1>
          <p className="mt-5 text-white text-justify text-xl font-mono">
            Halo, saya Wahyu seorang lulusan SMK jurusan Rekayasa Perengkat
            Lunak. Saya memiliki minat dalam bidang IT khusus nya di bidang
            Backend Developer / Web Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
