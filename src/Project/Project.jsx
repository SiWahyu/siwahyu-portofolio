/* eslint-disable react/prop-types */
import imgPOS from "../assets/projects/pos.jpg";
import imgPresensi from "../assets/projects/presensi.jpg";
import imgTokoSepatu from "../assets/projects/toko-sepatu.jpg";
import imgCloneTokopedia from "../assets/projects/clone-tokopedia.png";
import imgCloneInstagram from "../assets/projects/clone-instagram.png";
import CardProject from "./components/CardProject";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

const projects = [
  {
    name: "Presensi Siswa",
    deskrip: `Aplikasi untuk mempermudah guru dalam melakukan
                        pencatatan dan perekapan kehadiran siswa dalam bentuk
                        excel.`,
    images: [imgPresensi],
    category: "Web Application",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
    status: "Done",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "POS System",
    deskrip: `Aplikasi POS untuk mencatat data stok barang, data
                        penjualan barang , data restok barang dari supplier dan
                        data member customer.`,
    images: [imgPOS],
    category: "POS System",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Midtrans"],
    status: "Done",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "Sepatu Online",
    deskrip: `aplikasi toko sepatu online yang memungkinkan pelanggan untuk mencari, memilih, dan memesan sepatu favorit mereka dengan mudah. Dengan tampilan yang modern dan responsif, aplikasi ini memberikan pengalaman berbelanja yang nyaman dan cepat.`,
    images: [imgTokoSepatu],
    category: "E-Commerce",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "Midtrans"],
    status: "Done",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "Clone Tokopedia",
    deskrip: `Clone Aplikasi Tokopedia yang menggunakan React dan Tailwind`,
    images: [imgCloneTokopedia],
    category: "Frontend",
    tech: ["React", "Tailwind", "DaisyUI"],
    status: "On Progress",
    link: "https://github.com/SiWahyu",
  },
  {
    name: "Clone Instagram",
    deskrip: `Clone Instagram Versi Mobile menggunakan React dan Tailwind Sebagai FE, Laravel Sebagai BE dan Supabase PostgreSQL Sebagai Database`,
    images: [imgCloneInstagram],
    category: "Fullstack",
    tech: ["React", "Tailwind", "DaisyUI", "Laravel", "Supabase", "PostgreSQL"],
    status: "On Progress",
    link: "https://github.com/SiWahyu",
  },
];

export default function Project({ projectRef }) {
  return (
    <div
      className="flex justify-center min-h-screen scroll-mt-24"
      ref={projectRef}
    >
      <div className="max-w-6xl text-center">
        <motion.h2
          className="text-2xl font-bold text-white md:text-3xl font-space [text-shadow:0_0_10px_rgba(34,211,238,0.9),0_0_25px_rgba(34,211,238,0.6),0_0_50px_rgba(103,232,249,0.4)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          My Project
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center w-full gap-6 px-3 py-6 mt-6 sm:px-0"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {projects.map((project) => (
            <CardProject project={project} key={project.name} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
