"use client";
import * as React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterLinkSection } from "./FooterLinkSection";
import { FooterNewsletter } from "./FooterNewsletter";


const Footer: React.FC = () => {
  const linksData = {
    title: "Links",
    links: ["Home", "Shop", "About", "Contact"],
  };

  const helpData = {
    title: "Help",
    links: ["Payment Options", "Returns", "Privacy Policies"],
  };

  return (
    <footer
      className="px-24 py-12 w-full bg-white border-t border-solid border-black border-opacity-20 
                 max-md:px-10 max-md:py-12 max-sm:px-5 max-sm:py-8"
      aria-label="Website Footer"
    >
      <div className="flex mx-auto max-w-[1240px] max-md:flex-col max-md:gap-10">
        <FooterLogo />
        <div className="flex gap-36 max-md:flex-wrap max-md:gap-10 max-sm:flex-col max-sm:gap-8">
          <FooterLinkSection title={linksData.title} links={linksData.links} />
          <FooterLinkSection title={helpData.title} links={helpData.links} />
          <FooterNewsletter />
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-[1240px]">
        <hr className="mb-9 h-px bg-zinc-300" />
        <p className="text-base text-black text-center">
          &copy; {new Date().getFullYear()} Furino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
