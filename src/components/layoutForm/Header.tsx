"use client";

import * as React from "react";

// Navigation Arrow Component
interface NavigationArrowProps {
  direction: "left" | "right";
  color: string;
}
const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac68cf3cc7e2dea1699cb9d2dc90f83f5a877f7f9616f95f31aaebab6bef2d3e?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192",
    alt: "Social Icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a50b637bec35f0d47b1b8a9838778b13f7e6fde64e0c4cf882654f8ed6ca530?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192",
    alt: "Social Icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c56b48a84245ecd5d3b3da46991166817337450019eef839a7fedd87be6050dd?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192",
    alt: "Social Icon 3",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/125c5421587ebc7e847e7912b1da14a11e204697a4dfbd43ab84dd6c66fc3729?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192",
    alt: "Social Icon 4",
  },
];
const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  color,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12H3M21 12L15 6M21 12L15 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// CTA Button Component
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="gap-2.5 px-20 py-6 text-white uppercase bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200 max-md:px-5 max-md:mt-10"
    >
      {children}
    </button>
  );
};

// Content Box Component
const ContentBox: React.FC = () => {
  return (
    <article className="flex relative flex-col items-start pt-16 pr-20 pb-9 pl-10 mb-0 max-w-full bg-yellow-50 rounded-xl w-[643px] max-md:px-5 max-md:mb-2.5">
      <span className="font-semibold tracking-[3px]">New Arrival</span>
      <h2 className="mt-1 text-5xl text-yellow-600 leading-[65px] max-md:text-4xl max-md:leading-[55px]">
        Discover Our New Collection
      </h2>
      <p className="self-stretch mt-9 text-lg font-medium leading-6 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <div className="mt-14">
        <CTAButton>Buy Now</CTAButton>
      </div>
    </article>
  );
};

// Navigation Component
export const Navigation: React.FC = () => {
  const menuItems = ["Home", "Shop", "About", "Contact"];
  const categories = ["Furniture", "Lighting", "Decor", "Outdoor"];

  return (
    <nav className="px-16 py-8 w-full bg-white shadow-md max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* Logo */}
        <div className="w-[21%] max-md:w-full">
          <div className="flex gap-1.5 justify-center items-center text-4xl font-bold text-black">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6275455e40592e039274bc71d755698d72e742a01e963609280cc5c491d601f3"
              alt="Furniro Logo"
              className="w-[50px] object-contain"
            />
            <h1>Furniro</h1>
          </div>
        </div>

        {/* Menu */}
        <div className="ml-5 w-6/12 max-md:w-full">
          <ul className="flex gap-10 text-base font-medium text-black max-md:mt-10 max-md:max-w-full">
            {menuItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-gray-600 transition-colors"
                >
                  {item}
                </a>

                {/* Hiển thị danh mục khi hover vào "Shop" */}
                {item === "Shop" && (
                  <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 hover:bg-gray-100"
                      >
                        <a href={`#${category.toLowerCase()}`}>{category}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="ml-5 w-[29%] max-md:w-full">
          <div className="flex gap-10 self-stretch my-auto max-md:mt-10">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 w-7 aspect-square"
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Main Component: NewCollectionHero
const NewCollectionHero: React.FC = () => {
  return (
    <section className="text-base font-bold rounded-none text-zinc-800">
      <Navigation />
      <div className="flex relative flex-col justify-center items-end px-20 py-36 w-full min-h-[717px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/253a8dd81b2d87ecf13debf779f838974579f2e947ac2ba526b729e58ba098cc"
          alt="Collection Background"
          className="object-cover absolute inset-0 size-full pointer-events-none"
        />
        <ContentBox />
      </div>
    </section>
  );
};

export default NewCollectionHero;
