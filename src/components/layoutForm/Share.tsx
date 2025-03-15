"use client";
import * as React from "react";
import { ShareHeader } from "./ShareHeader";
import { ImageGallery } from "./ImageGallery";

const Share: React.FC = () => {
  return (
    <article className="flex flex-col pb-4">
      <ShareHeader />
     
      <ImageGallery />
    </article>
  );
};

export default Share;
