import React from "react";

interface IChevronDownIcon {
  className?: string;
}

const ChevronDownIcon = ({ className }: IChevronDownIcon) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.75 26.25L21 14L33.25 26.25"
        stroke="#F4EEE8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDownIcon;
