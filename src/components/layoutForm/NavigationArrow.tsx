import React from "react";

interface NavigationArrowProps {
  direction: "left" | "right";
  color: string;
}

export const NavigationArrow: React.FC<NavigationArrowProps> = ({
  direction,
  color,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12H3M21 12L15 6M21 12L15 18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
