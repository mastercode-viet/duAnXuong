"use client";

import * as React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
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

interface CategoryCardProps {
  image: string;
  altText: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, altText, title }) => {
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

const categories = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/735a83c82561da4af201ad04aa2bb9c4a8f71b1a",
    altText: "Dining room",
    title: "Dining",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/914d6d8ed2d3b2fd7c3ce44573114b03afb3da05",
    altText: "Living room",
    title: "Living",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/720caf2bd8fe520774b76cf43dda5e6e2edad8b3",
    altText: "Bedroom",
    title: "Bedroom",
  },
];

const BrowseRange: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-6 py-20 w-full max-md:py-16 max-sm:py-10">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        <SectionHeader
          title="Browse The Range"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-2 max-sm:grid-cols-1">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              image={category.image}
              altText={category.altText}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
