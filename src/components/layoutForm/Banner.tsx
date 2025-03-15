"use client";
import * as React from "react";
import { Navigation } from "./Navigation";


const Banner: React.FC = () => {
  return (
    <header className="rounded-none">
      <Navigation />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/64e0abcf179be31cf9d409b0a5b9b797da521ce5b6b2d45abc403958ee0723e8?placeholderIfAbsent=true&apiKey=d07dbb0036a043b39074868c4b8c8192"
        alt="Banner Hero"
        className="object-contain z-10 -mt-1 w-full rounded-none aspect-[2.01] max-md:max-w-full"
      />
    </header>
    
  );
};

export default Banner;
