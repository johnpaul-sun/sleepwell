import React from "react";

interface ICancelIcon {
  className?: string;
}
const ChevronDownIcon = ({ className }: ICancelIcon) => {
  return (
    <svg
      width="16"
      height="9"
      viewBox="0 0 16 9"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1L8 8L1 1"
        stroke="#3D2988"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;
