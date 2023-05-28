import React from "react";
import { toast } from "react-hot-toast";
import { removeCookies } from "cookies-next";

import AuthApi from "~/api/user/AuthApi";
import UserIcon from "~/shared/icons/UserIcon";
import redirect from "~/shared/utils/redirect";
import LogoutIcon from "~/shared/icons/LogoutIcons";
import ClipboardIcon from "~/shared/icons/ClipboardIcon";

const FooterNavbar = ({ activePage }: any) => {
  const handleLogout = () => {
    toast.promise(
      AuthApi.logout().then(() => {
        removeCookies("token");
        redirect("/");
      }),
      {
        loading: "Loading",
        success: (data) => `Logged out`,
        error: (err) => `${err.response.data.message}`,
      }
    );
  };

  return (
    <div className="fixed left-0 bottom-0 flex p-2 w-full justify-around bg-swell-30">
      <div onClick={handleLogout}>
        <LogoutIcon />
      </div>
      <div
        onClick={() => {
          redirect("/checklist");
        }}
      >
        <ClipboardIcon isActive={activePage === 'checklist'} />
      </div>
      <div
        onClick={() => {
          redirect("/profile");
        }}
      >
        <UserIcon isActive={activePage === 'profile'} />
      </div>
    </div>
  );
};

export default FooterNavbar;
