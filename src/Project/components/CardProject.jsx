/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  X,
  ZoomIn,
} from "lucide-react";
import { fadeUp } from "@/lib/motion";

const CardProject = ({ project }) => {
  return (
    <motion.article
      className="w-full max-w-md glass-card group rounded-2xl "
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.985 }}
    >
      <CardImage images={project.images ?? [project.img]} name={project.name} />
      <CardBody {...project} />
    </motion.article>
  );
};

const CardImage = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const hasMultipleImages = images.length > 1;

  const showImage = (index) =>
    setActiveIndex((index + images.length) % images.length);
  const nextImage = () => showImage(activeIndex + 1);

  useEffect(() => {
    if (!hasMultipleImages || isHovered || isPreviewOpen) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [hasMultipleImages, images.length, isHovered, isPreviewOpen]);

  useEffect(() => {
    const closeOnEscape = (event) =>
      event.key === "Escape" && setIsPreviewOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <div
        className="relative h-64 p-5 overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={`${name} — gambar ${activeIndex + 1}`}
            className="object-cover w-full h-full rounded-lg cursor-zoom-in"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsPreviewOpen(true)}
          />
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setIsPreviewOpen(true)}
          aria-label={`Perbesar gambar ${name}`}
          className="absolute grid text-white transition duration-300 rounded-lg opacity-0 inset-5 place-items-center bg-black/0 group-hover:bg-black/35 group-hover:opacity-100 focus:opacity-100"
        >
          <ZoomIn size={28} />
        </button>
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={() => showImage(activeIndex - 1)}
              aria-label="Gambar sebelumnya"
              className="absolute left-7 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-1.5 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextImage}
              aria-label="Gambar berikutnya"
              className="absolute right-7 top-1/2 -translate-y-1/2 rounded-full bg-black/55 p-1.5 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100 focus:opacity-100"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => showImage(index)}
                  aria-label={`Tampilkan gambar ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${activeIndex === index ? "w-5 bg-white" : "w-1.5 bg-white/55"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {createPortal(
        <AnimatePresence>
          {isPreviewOpen && (
            <motion.div
              className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPreviewOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label={`Preview ${name}`}
            >
              <motion.img
                src={images[activeIndex]}
                alt={`${name} — preview`}
                className="max-h-[92vh] max-w-[96vw] rounded-xl object-contain shadow-2xl"
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                onClick={(event) => event.stopPropagation()}
              />
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="absolute p-2 text-white transition rounded-full right-5 top-5 bg-white/15 hover:bg-white/25"
                aria-label="Tutup preview"
              >
                <X />
              </button>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

const CardBody = ({ name, deskrip, category, status, link, tech = [] }) => {
  const isCompleted = status === "Done";

  return (
    <div className="flex-col justify-between p-6 text-left sm:p-7">
      <div>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-neutral-300">
              Build type
            </p>
            <p className="mt-1.5 text-xs -ml-0.5 font-semibold border bg-blue-400/10 text-blue-300 border-blue-400/20 px-1.5 py-1 text-[10px] tracking-wider rounded-md">
              {category}
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-neutral-500">
              Stage
            </p>
            <p
              className={`mt-1.5 flex items-center justify-end gap-1.5 text-xs font-semibold ${isCompleted ? "text-emerald-300" : "text-amber-300"}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${isCompleted ? "bg-emerald-400" : "bg-amber-400"}`}
              />
              {isCompleted ? "Published" : "In progress"}
            </p>
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold transition-colors font-space text-slate-100 group-hover:text-white">
          {name}
        </h3>
        <p className="mb-6 text-sm leading-relaxed line-clamp-3 text-slate-200">
          {deskrip}
        </p>
        <div className="mb-7 flex flex-wrap items-center gap-1.5">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded border border-white/[0.2] bg-black/15 px-2.5 py-0.5 font-mono text-xs text-neutral-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-white/[0.09] pt-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.12]"
          title="Buka source code"
        >
          <Github size={16} />
          <span>Explore source code</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </div>
  );
};

export default CardProject;
