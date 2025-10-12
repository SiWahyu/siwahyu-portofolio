/* eslint-disable react/prop-types */
import imgPOS from "../assets/projects/pos.jpg";
import imgPresensi from "../assets/projects/presensi.jpg";
import imgTokoSepatu from "../assets/projects/toko-sepatu.jpg";
import imgCloneTokopedia from "../assets/projects/clone-tokopedia.png";
import imgCloneInstagram from "../assets/projects/clone-instagram.png";
import CardProject from "./components/CardProject";

const projects = [
  {
    name: "Presensi Siswa",
    deskrip: `Aplikasi untuk mempermudah guru dalam melakukan
                        pencatatan dan perekapan kehadiran siswa dalam bentuk
                        excel.`,
    img: imgPresensi,
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    status: "Done",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "POS System",
    deskrip: `Aplikasi POS untuk mencatat data stok barang, data
                        penjualan barang , data restok barang dari supplier dan
                        data member customer.`,
    img: imgPOS,
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Midtrans"],
    status: "Done",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "Sepatu Online",
    deskrip: `aplikasi toko sepatu online yang memungkinkan pelanggan untuk mencari, memilih, dan memesan sepatu favorit mereka dengan mudah. Dengan tampilan yang modern dan responsif, aplikasi ini memberikan pengalaman berbelanja yang nyaman dan cepat.`,
    img: imgTokoSepatu,
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "Midtrans"],
    status: "Done",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "Clone Tokopedia",
    deskrip: `Clone Aplikasi Tokopedia yang menggunakan React dan Tailwind`,
    img: imgCloneTokopedia,
    tech: ["React", "Tailwind", "DaisyUI"],
    status: "On Progress",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "Clone Instagram",
    deskrip: `Clone Instagram Versi Mobile menggunakan React dan Tailwind Sebagai FE, Laravel Sebagai BE dan Supabase PostgreSQL Sebagai Database`,
    img: imgCloneInstagram,
    tech: ["React", "Tailwind", "DaisyUI", "Laravel", "Supabase", "PostgreSQL"],
    status: "On Progress",
    link: "https://github.com/SiWahyu",
  },
];

export default function Project({ projectRef }) {
  return (
    <div
      className="flex justify-center min-h-screen scroll-mt-32"
      ref={projectRef}
    >
      <div className="text-center w-full max-w-5xl ">
        <h2
          className="text-2xl font-bold text-white md:text-3xl font-space"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          My Project
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-6 w-full py-6 px-3 sm:px-0">
          {projects.map((project, index) => (
            <CardProject project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
