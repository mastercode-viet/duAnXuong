import React from "react";

export const DotIndicator: React.FC = () => {
  return (
    <div className="flex gap-5">
      <svg
        width="120"
        height="27"
        viewBox="0 0 120 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.7" cx="13.5" cy="13.5" r="13" stroke="#B88E2F" />
        <circle cx="13.5" cy="13.5" r="5" fill="#B88E2F" stroke="#B88E2F" />
        <circle cx="52.5" cy="13.5" r="5.5" fill="#D8D8D8" />
        <circle cx="83.5" cy="13.5" r="5.5" fill="#D8D8D8" />
        <circle cx="114.5" cy="13.5" r="5.5" fill="#D8D8D8" />
      </svg>
    </div>
  );
};
