import * as React from "react";

export const FooterLogo: React.FC = () => {
  return (
    <div className="mr-36 w-[285px] max-md:w-full">
      <h2 className="mb-12 text-2xl font-bold text-black">Funiro.</h2>
      <address className="text-base leading-normal text-neutral-400 not-italic">
        400 University Drive Suite 200 Coral Gables, FL 33134 USA
      </address>
    </div>
  );
};
