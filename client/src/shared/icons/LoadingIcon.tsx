import React from "react";

interface ILoadingIcon {
  className?: string;
}
const LoadingIcon = ({ className }: ILoadingIcon) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_41_940" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_41_940"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LoadingIcon;
