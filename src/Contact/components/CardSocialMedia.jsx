import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import { ShineBorder } from "@/components/ui/shine-border";

const CardSocialMedia = ({ item, children }) => {
  return (
    <SpotlightCard
      className="custom-spotlight-card bg-neutral-950/5 relative overflow-hidden"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <ShineBorder
        shineColor="#C0C0C0"
        duration={12}
        borderWidth={1.5}
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      {children}
    </SpotlightCard>
  );
};

const CardTitle = ({ title }) => {
  return (
    <h2 className="mt-4 text-base font-semibold text-white font-space">
      {title}
    </h2>
  );
};

const CardIcon = ({ icon }) => {
  return (
    <span className="inline-block p-2.5 text-white rounded-full border border-neutral-600 bg-transparent">
      {icon}
    </span>
  );
};

const CardBody = ({ deskripsi, link }) => {
  return (
    <>
      <p className="mt-2 text-sm text-white text-justify">{deskripsi}</p>
      <a
        className="group mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-500"
        href={link}
        target="_blank"
      >
        Kunjungi
        <span
          aria-hidden="true"
          className="block transition-all group-hover:ms-0.5"
        >
          &rarr;
        </span>
      </a>
    </>
  );
};

CardSocialMedia.Icon = CardIcon;
CardSocialMedia.Title = CardTitle;
CardSocialMedia.Body = CardBody;

export default CardSocialMedia;
