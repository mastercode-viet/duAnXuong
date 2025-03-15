"use client";
import React from "react";
import { NavigationArrow } from "./NavigationArrow";
import { DotIndicator } from "./Dotlndicator";


export const ImageGallery: React.FC = () => {
  return (
    <div className="flex relative gap-6 ml-11 max-md:overflow-x-auto max-sm:flex-col">
      <div className="relative max-sm:w-full max-sm:h-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c6e4014395d721da238a348e08a24180392bf13"
          className="object-cover h-[582px] w-[404px]"
          alt="Bedroom Interior"
        />
        <div className="absolute bottom-6 left-6 p-8 backdrop-blur-[1.5px] bg-white bg-opacity-70 w-[217px] max-sm:left-2/4 max-sm:w-4/5 max-sm:-translate-x-2/4">
          <p className="gap-2 mb-2 text-base font-medium text-zinc-600">
            01 — Bed Room
          </p>
          <h2 className="text-3xl font-semibold text-neutral-700">
            Inner Peace
          </h2>
        </div>
        <div className="flex absolute bottom-6 justify-center items-center w-12 h-12 bg-yellow-600 cursor-pointer right-[115px]">
          <NavigationArrow direction="right" color="white" />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/73cb0afe82f4226689bca8e7dcc7dc3a66ef5eda"
        className="object-cover h-[486px] w-[372px] max-sm:w-full max-sm:h-auto"
        alt="Room Design"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a3205f65c0cd22cf68fc08b1438957236e370b"
        className="object-cover h-[486px] w-[372px] max-sm:w-full max-sm:h-auto"
        alt="Room Design"
      />
      <div className="absolute bottom-0 left-[428px] max-sm:relative max-sm:left-0 max-sm:mt-6">
        <DotIndicator />
        <div className="absolute cursor-pointer right-[51px] top-[-259px] max-sm:hidden">
          <div className="w-[78px] h-[78px]">
            <svg
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_117_483)">
                <circle cx="39" cy="35" r="24" fill="white" />
              </g>
              <path
                d="M36.0001 28L43.0001 35L36.0001 42"
                stroke="#B88E2F"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_117_483"
                  x="0"
                  y="0"
                  width="78"
                  height="78"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_117_483"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="7" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_117_483"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_117_483"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
