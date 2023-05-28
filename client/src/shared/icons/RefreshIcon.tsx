import React from "react";

interface IRefreshIcon {
  className?: string;
}
const RefreshIcon = ({ className }: IRefreshIcon) => {
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
        d="M5 5V11.25H5.7269M24.9226 13.75C24.3075 8.81711 20.0995 5 15 5C10.8033 5 7.21036 7.58521 5.7269 11.25M5.7269 11.25H11.25M25 25V18.75H24.2731M24.2731 18.75C22.7896 22.4148 19.1967 25 15 25C9.90048 25 5.69249 21.1829 5.07737 16.25M24.2731 18.75H18.75"
        stroke="#0B061E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RefreshIcon;
