import React from "react";

const HeroText: React.FC = () => {
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

const ShareHeader: React.FC = () => {
  return (
    <header className="flex z-10 flex-col self-center max-w-full text-center w-[356px]">
      <h1 className="self-center text-xl font-semibold text-zinc-600">
        Share your setup with
      </h1>
      <p className="mt-2 text-4xl font-bold leading-tight text-neutral-700">
        #FuniroFurniture
      </p>
    </header>
  );
};

const SocialIcons: React.FC = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac68cf3cc7e2dea1699cb9d2dc90f83f5a877f7f9616f95f31aaebab6bef2d3e", alt: "Social Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a50b637bec35f0d47b1b8a9838778b13f7e6fde64e0c4cf882654f8ed6ca530", alt: "Social Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c56b48a84245ecd5d3b3da46991166817337450019eef839a7fedd87be6050dd", alt: "Social Icon 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/125c5421587ebc7e847e7912b1da14a11e204697a4dfbd43ab84dd6c66fc3729", alt: "Social Icon 4" }
  ];

  return (
    <div className="flex gap-10 self-stretch my-auto max-md:mt-10">
      {socialIcons.map((icon, index) => (
        <img key={index} src={icon.src} alt={icon.alt} className="object-contain shrink-0 w-7 aspect-square" />
      ))}
    </div>
  );
};

const ImageGallery: React.FC = () => {
  return (
    <div className="flex relative gap-6 ml-11 max-md:overflow-x-auto max-sm:flex-col">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c6e4014395d721da238a348e08a24180392bf13" className="object-cover h-[582px] w-[404px]" alt="Bedroom Interior" />
      {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73cb0afe82f4226689bca8e7dcc7dc3a66ef5eda" className="object-cover h-[486px] w-[372px] max-sm:w-full max-sm:h-auto" alt="Room Design" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a3205f65c0cd22cf68fc08b1438957236e370b" className="object-cover h-[486px] w-[372px] max-sm:w-full max-sm:h-auto" alt="Room Design" /> */}
    </div>
  );
};

const Share: React.FC = () => {
  return (
    <article className="flex flex-col pb-4">
      <ShareHeader />
      <ImageGallery />
    </article>
  );
};

const RoomInspiration: React.FC = () => {
  return (
    <section className="flex relative px-24 py-11 mx-auto max-w-none bg-red-50 max-md:flex-col max-md:p-8 max-md:max-w-[991px] max-sm:p-6 max-sm:max-w-screen-sm">
      <HeroText />
      <ImageGallery />
      <Share />
    </section>
  );
};

export default RoomInspiration;