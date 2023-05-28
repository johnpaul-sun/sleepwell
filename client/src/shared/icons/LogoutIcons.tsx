import React from "react";

interface ILogoutIcon {
  className?: string;
}
const LogoutIcon = ({ className }: ILogoutIcon) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.6">
        <path
          d="M17.875 26L11.375 19.5M11.375 19.5L17.875 13M11.375 19.5L34.125 19.5M26 26V27.625C26 30.3174 23.8174 32.5 21.125 32.5H9.75C7.05761 32.5 4.875 30.3174 4.875 27.625V11.375C4.875 8.68261 7.05761 6.5 9.75 6.5H21.125C23.8174 6.5 26 8.68261 26 11.375V13"
          stroke="#F4EEE8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default LogoutIcon;
