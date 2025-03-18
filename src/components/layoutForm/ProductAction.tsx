"use client";
import { ShareIcon, CompareIcon, HeartIcon } from "./Icons";

export const ProductActions = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <button className="px-14 py-3 text-base font-semibold text-yellow-600 bg-white hover:bg-yellow-50 transition-colors">
        Add to cart
      </button>
      <div className="flex gap-5">
        <button className="flex gap-0.5 items-center text-base font-semibold text-white hover:text-yellow-200 transition-colors">
          <ShareIcon />
          <span>Share</span>
        </button>
        <button className="flex gap-0.5 items-center text-base font-semibold text-white hover:text-yellow-200 transition-colors">
          <CompareIcon />
          <span>Compare</span>
        </button>
        <button className="flex gap-0.5 items-center text-base font-semibold text-white hover:text-yellow-200 transition-colors">
          <HeartIcon />
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};
