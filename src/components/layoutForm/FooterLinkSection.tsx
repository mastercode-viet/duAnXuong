import * as React from "react";

interface FooterLinkSectionProps {
  title: string;
  links: string[];
}

export const FooterLinkSection: React.FC<FooterLinkSectionProps> = ({
  title,
  links,
}) => {
  return (
    <nav className="flex flex-col">
      <h3 className="mb-14 text-base text-neutral-400">{title}</h3>
      <ul className="flex flex-col gap-12">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="text-base text-black hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
