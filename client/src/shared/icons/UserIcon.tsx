import React from "react";

interface ICancelIcon {
  isActive: boolean;
}
const UserIcon = ({ isActive }: ICancelIcon) => {
  return (
    <div className={isActive ? "opacity-100" : "opacity-40"}>
      <svg
        width="39"
        height="39"
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.5001 17.55C22.731 17.55 25.3501 14.9308 25.3501 11.7C25.3501 8.46911 22.731 5.84998 19.5001 5.84998C16.2692 5.84998 13.6501 8.46911 13.6501 11.7C13.6501 14.9308 16.2692 17.55 19.5001 17.55Z"
          fill="white"
        />
        <path
          d="M5.8501 35.1C5.8501 27.5613 11.9614 21.45 19.5001 21.45C27.0388 21.45 33.1501 27.5613 33.1501 35.1H5.8501Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default UserIcon;
