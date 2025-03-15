"use client";
import * as React from "react";

import { ImageGallery } from "./ImageGallery";
import { HeroText } from "./Herotext";

export default function RoomInspiration() {
  return (
    <section className="flex relative px-24 py-11 mx-auto max-w-none bg-red-50 max-md:flex-col max-md:p-8 max-md:max-w-[991px] max-sm:p-6 max-sm:max-w-screen-sm">
      <HeroText />
      <ImageGallery />
    </section>
  );
}
