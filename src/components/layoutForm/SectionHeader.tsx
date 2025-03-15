"use client";

import * as React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <header className="flex flex-col items-center mb-16 text-center max-md:mb-10 max-sm:mb-8">
      <h2 className="mb-4 text-3xl font-bold text-zinc-800 max-md:text-3xl max-sm:text-2xl">
        {title}
      </h2>
      <p className="text-xl text-stone-500 max-md:text-lg max-sm:text-base">
        {description}
      </p>
    </header>
  );
};
