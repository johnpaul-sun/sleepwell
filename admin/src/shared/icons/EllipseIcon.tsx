import React from "react";

interface IEllipseIcon {
  type?: string;
  width?: string | number;
  height?: string | number;
}

const EllipseIcon = ({
  type = "preQuestion",
  width = "17",
  height = "17",
}: IEllipseIcon) => {
  const ellpiseColors: any = {
    preQuestion: "#367CFF",
    preChoice: "#CCB330",
    mainQuestion: "#3D2988",
    mainChoice: "#E05D5D",
    recommendation: "#FF00E5",
    success: "#2DDA1E",
    warning: "#CCB330",
    failed: "#CC3030",
  };
  const currentState = ellpiseColors[type];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill={currentState} />
    </svg>
  );
};

export default EllipseIcon;
