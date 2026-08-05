import { Mail } from "lucide-react";
import CopyButton from "./CopyButton";

const EmailCopy = ({ email }) => {
  return (
    <div className="flex flex-row items-center justify-center ">
      <div className="flex flex-row items-center justify-between w-3/4 gap-2 px-6 py-4 md:w-1/2 xl:w-[30%] rounded-3xl glass-card bg-cyan-300/10">
        <div className="flex items-center gap-2 ">
          <Mail className="size-4.5 text-cyan-300" />
          <span className="text-sm text-neutral-200">{email}</span>
        </div>
        <CopyButton variant="secondary" text={email} />
      </div>
    </div>
  );
};

export default EmailCopy;
