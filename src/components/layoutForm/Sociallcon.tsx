import * as React from "react";

export const SocialIcons: React.FC = () => {
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

  return (
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
  );
};
