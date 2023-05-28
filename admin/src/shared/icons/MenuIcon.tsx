import React from "react";

interface IMenuIcon {
  className?: string;
}

const MenuIcon = ({ className }: IMenuIcon) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5H25M5 15H25M5 22.5H25"
        stroke="#F4EEE8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
