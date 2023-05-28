import React from "react";

import LogoIcon from "~/shared/icons/LogoIcon";
import MenuIcon from "~/shared/icons/MenuIcon";

const Topbar = ({ handleClick }: { handleClick: any }) => {
  return (
    <div className="absolute top-0 w-full flex justify-between px-7 h-14 bg-swell-30 text-light z-50">
      <div className="flex items-center text-lg font-semibold">
        <LogoIcon />
        <span>SleepWell Admin Panel</span>
      </div>
      <button onClick={handleClick}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default Topbar;
