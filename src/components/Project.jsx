import imgPOS from "../assets/projects/pos.jpg";
import imgPresensi from "../assets/projects/presensi.jpg";
import imgTokoSepatu from "../assets/projects/toko-sepatu.jpg";

export default function Project({ ref }) {
  const projects = [
    {
      name: "Presensi Siswa",
      deskrip: `Aplikasi untuk mempermudah guru dalam melakukan
                        pencatatan dan perekapan kehadiran siswa dalam bentuk
                        excel.`,
      img: imgPresensi,
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    },
    {
      name: "POS System",
      deskrip: `Aplikasi POS untuk mencatat data stok barang, data
                        penjualan barang , data restok barang dari supplier dan
                        data member customer.`,
      img: imgPOS,
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Midtrans"],
    },
    {
      name: "Sepatu Online",
      deskrip: `aplikasi toko sepatu online yang memungkinkan pelanggan untuk mencari, memilih, dan memesan sepatu favorit mereka dengan mudah. Dengan tampilan yang modern dan responsif, aplikasi ini memberikan pengalaman berbelanja yang nyaman dan cepat.`,
      img: imgTokoSepatu,
      tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "Midtrans"],
    },
  ];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      ref={ref}
    >
      <div className="text-center w-full max-w-5xl mt-36">
        <h2
          className="text-2xl font-bold text-white md:text-3xl font-space"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          My Project
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-6 w-full py-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl border border-gray-700 bg-transparent shadow-lg max-w-sm w-full "
              data-aos="fade-up"
              data-aos-duration={(index + 1) * 100 + 800}
            >
              <img
                alt=""
                src={project.img}
                className="h-56 w-full object-cover p-5"
              />

              <div className="p-4 sm:p-6 text-left">
                <a href="#">
                  <h3 className="text-lg font-bold text-white font-space">
                    {project.name}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm text-white text-justify">
                  {project.deskrip}
                </p>

                <a className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-300">
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5"
                  >
                    &rarr;
                  </span>
                </a>
                <div className="mt-4 text-white">
                  <div className="text-sm font-mono font-semibold mb-1.5">
                    Tech stack
                  </div>
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="badge border border-gray-400  badge-outline py-2.5 m-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
