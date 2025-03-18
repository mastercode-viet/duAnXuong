"use client";
import { useState } from "react";
import { Badge } from "./Badge";
import { ProductActions } from "./ProductAction";


interface ProductCardProps {
  image: string;
  altText: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
}

export const ProductCard = ({
  image,
  altText,
  title,
  description,
  price,
  originalPrice,
  badge,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-6 w-full h-[301px]">
        <img src={image} alt={altText} className="object-cover size-full" />
        {badge && <Badge text={badge} />}
        <div
          className={`${isHovered ? "flex" : "hidden"} absolute top-0 left-0 justify-center items-center bg-neutral-700 bg-opacity-70 size-full`}
        >
          <ProductActions />
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <h3 className="mb-2 text-2xl font-semibold text-neutral-700">
          {title}
        </h3>
        <p className="mb-2 text-base font-medium text-zinc-500">
          {description}
        </p>
        <div className="flex gap-4 items-center">
          <span className="text-xl font-semibold text-neutral-700">
            {price}
          </span>
          {originalPrice && (
            <span className="text-base line-through text-zinc-400">
              {originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
