import * as React from "react";

export const ShareHeader: React.FC = () => {
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
