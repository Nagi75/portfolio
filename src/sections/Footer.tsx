import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-6 mt-10 flex justify-center gap-4">
      {socialImgs.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111111] p-3 rounded-lg transition-transform hover:scale-110"
        >
          <img
            src={social.imgPath}
            alt={social.name}
            width={28}
            height={28}
            className="object-contain"
          />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
