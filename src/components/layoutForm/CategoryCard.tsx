"use client";

import * as React from "react";

interface CategoryCardProps {
  image: string;
  altText: string;
  title: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  altText,
  title,
}) => {
  return (
    <article className="flex flex-col items-center">
      <img
        src={image}
        alt={altText}
        className="w-full h-[480px] object-cover rounded-[8px] mb-[20px]"
      />
      <h3 className="text-2xl font-bold text-zinc-800 max-md:text-xl max-sm:text-lg">
        {title}
      </h3>
    </article>
  );
};
