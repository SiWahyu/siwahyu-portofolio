/* eslint-disable react/prop-types */
import { ShineBorder } from "@/components/ui/shine-border";

const CardProject = ({ project, index }) => {
  return (
    <div
      key={index}
      className="overflow-hidden border border-neutral-800 bg-transparent shadow-lg max-w-sm w-full relative rounded-xl "
      data-aos="fade-up"
      data-aos-duration={(index + 1) * 100 + 800}
    >
      <ShineBorder
        shineColor="#C0C0C0"
        duration={10}
        borderWidth={1}
        className="rounded-xl"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <CardImage image={project.img} />
      <CardBody
        name={project.name}
        deskrip={project.deskrip}
        status={project.status}
        link={project.link}
        tech={project.tech}
      />
    </div>
  );
};
const CardImage = ({ image }) => {
  return <img alt="" src={image} className="h-56 w-full object-cover p-5" />;
};
const CardBody = ({ name, deskrip, status, link, tech = [] }) => {
  return (
    <div className="p-4 sm:p-6 text-left">
      <span href="#">
        <h3 className="text-lg font-bold text-white font-space">{name}</h3>
      </span>

      <p className="mt-2 line-clamp-3 text-sm text-white text-justify">
        {deskrip}
      </p>

      <p className={`mt-2 line-clamp-3 text-sm`}>
        <span className="font-medium text-white">Status :</span>{" "}
        <span
          className={`font-semibold ${
            status === "Done" ? "text-blue-500" : "text-yellow-400"
          }`}
        >
          {status}
        </span>
      </p>

      <a
        href={link}
        className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-slate-300"
      >
        View Project
        <span
          aria-hidden="true"
          className="block transition-all group-hover:ms-0.5"
        >
          &rarr;
        </span>
      </a>
      <div className="mt-4 text-white">
        <div className="text-sm font-mono font-semibold mb-1.5">Tech stack</div>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="border border-slate-50/50 px-2 rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
