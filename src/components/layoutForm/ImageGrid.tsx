import * as React from "react";

interface ImageGridProps {
  leftImage: string;
  rightImage: string;
  leftWidth: string;
  rightWidth: string;
  leftAspect: string;
  rightAspect: string;
  containerWidth?: string;
  containerMargin?: string;
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  leftImage,
  rightImage,
  leftWidth,
  rightWidth,
  leftAspect,
  rightAspect,
  containerWidth = "full",
  containerMargin = "",
}) => {
  return (
    <section className={`max-w-full w-[${containerWidth}] ${containerMargin}`}>
      <div className="flex gap-5 max-md:flex-col">
        <div className={`w-[${leftWidth}] max-md:ml-0 max-md:w-full`}>
          <img
            src={leftImage}
            className={`object-contain grow shrink-0 max-w-full aspect-[${leftAspect}] w-full max-md:mt-4`}
            alt=""
          />
        </div>
        <div className={`ml-5 w-[${rightWidth}] max-md:ml-0 max-md:w-full`}>
          <img
            src={rightImage}
            className={`object-contain w-full aspect-[${rightAspect}] max-md:mt-4`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
