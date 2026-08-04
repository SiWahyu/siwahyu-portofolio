import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-row w-full justify-evenly glass-card min-h-[10vh] items-center border-none py-10">
      <div className="flex flex-row items-center gap-2">
        <div className="p-2 border rounded-full shadow-[0_0_18px_rgba(34,211,238,0.85)] border-cyan-300 h-fit w-fit ">
          <Rocket className="size-5" />
        </div>
        <div className="flex flex-col justify-between ">
          <span className="font-semibold">Wahyu Firman</span>
          <span className="text-xs text-neutral-300">
            Copyright &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-6 text-xs text-neutral-300">
        <span>Github</span>
        <span>Linkedin</span>
        <span>Email</span>
      </div>
    </footer>
  );
};

export default Footer;
