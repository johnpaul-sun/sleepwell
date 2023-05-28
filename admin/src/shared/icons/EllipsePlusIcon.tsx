import React from "react";

interface IEllipsePlusIcon {
  type?: string;
  width?: string | number;
  height?: string | number;
}

const EllipsePlusIcon = ({
  type = "preQuestion",
  width = "17",
  height = "17",
}: IEllipsePlusIcon) => {
  const ellpiseColors: any = {
    preQuestion: "#367CFF",
    preChoice: "#CCB330",
    mainQuestion: "#3D2988",
    mainChoice: "#E05D5D",
    recommendation: "#FF00E5",
  };
  const currentState = ellpiseColors[type];

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={currentState}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 21.6C17.3018 21.6 21.5999 17.3019 21.5999 12C21.5999 6.69806 17.3018 2.39999 11.9999 2.39999C6.69797 2.39999 2.3999 6.69806 2.3999 12C2.3999 17.3019 6.69797 21.6 11.9999 21.6ZM13.1999 8.39999C13.1999 7.73725 12.6626 7.19999 11.9999 7.19999C11.3372 7.19999 10.7999 7.73725 10.7999 8.39999V10.8H8.3999C7.73716 10.8 7.1999 11.3373 7.1999 12C7.1999 12.6627 7.73716 13.2 8.3999 13.2H10.7999V15.6C10.7999 16.2627 11.3372 16.8 11.9999 16.8C12.6626 16.8 13.1999 16.2627 13.1999 15.6V13.2H15.5999C16.2626 13.2 16.7999 12.6627 16.7999 12C16.7999 11.3373 16.2626 10.8 15.5999 10.8H13.1999V8.39999Z"
        fill={currentState}
      />
    </svg>
  );
};

export default EllipsePlusIcon;
