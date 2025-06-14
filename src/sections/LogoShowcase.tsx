// LogoShowcase.tsx
import React from "react";
import { logoIconsList, IconType } from "../constants";

interface LogoIconProps {
  icon: IconType;
}

const LogoIcon: React.FC<LogoIconProps> = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} className="h-12 w-auto" />
    </div>
  );
};

const LogoShowcase: React.FC = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52 overflow-hidden">
      <div className="marquee-box md:gap-12 gap-5 flex animate-marquee">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`first-${index}`} icon={icon} />
        ))}

        {/* Repeating for continuous scroll effect */}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={`second-${index}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
