import React from "react";

export const HeroText: React.FC = () => {
  return (
    <article className="mt-44 left-[content] w-[422px] max-md:mt-10 max-md:w-full">
      <h1 className="mb-2 text-4xl font-bold leading-10 text-neutral-700 max-sm:text-3xl">
        50+ Beautiful rooms inspiration
      </h1>
      <p className="mb-12 text-base font-medium leading-6 text-zinc-600 w-[368px] max-md:w-full">
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <button className="px-9 py-3 text-base font-semibold text-white bg-yellow-600 cursor-pointer w-fit">
        Explore More
      </button>
    </article>
  );
};
