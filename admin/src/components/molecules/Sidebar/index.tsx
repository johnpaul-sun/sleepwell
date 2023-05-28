import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AuthApi from "~/api/admin/AuthApi";
import { deleteCookie } from "cookies-next";

import GearIcon from "~/shared/icons/GridIcon";
import SettingsModal from "../SettingsModal";
import LogoutIcon from "~/shared/icons/LogoutIcon";
import SettingsIcon from "~/shared/icons/SettingsIcon";
import redirect from "~/shared/utils/redirect";
import UserGroupIcon from "~/shared/icons/UserGroupIcon";

const Sidebar = ({ toggleCollapse, setToggleCollapse }: any) => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [activePath, setActivePath] = useState<string>("");

  const handleLogout = () => {
    toast.promise(
      AuthApi.logout().then(() => {
        deleteCookie("token");
        window.location.pathname = "/";
      }),
      {
        loading: "Loading",
        success: (data) => `Logged out`,
        error: (err) => `${err.response.data.message}`,
      }
    );
  };

  const handleSettings = () => {
    setShowSettingsModal(true);
  };

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <>
      <SettingsModal
        showModal={showSettingsModal}
        setShowModal={setShowSettingsModal}
      />
      {toggleCollapse && (
        <div
          className={`h-full pt-14 bg-swell-vdark text-white justify-between flex flex-col flex-1 sm:flex-none`}
        >
          <div>
            <div
              className={`flex w-full items-center space-x-2 px-6 py-4 text-base cursor-pointer ${
                activePath === "/dashboard" && "bg-swell-10"
              }`}
              onClick={() => {
                setActivePath("/dashboard");
                redirect("/dashboard");
              }}
            >
              <GearIcon />
              <p>Recommendations</p>
            </div>
            <div
              className={`flex w-full items-center space-x-2 px-6 py-4 text-base cursor-pointer ${
                activePath === "/manage-user" && "bg-swell-10"
              }`}
              onClick={() => {
                setActivePath("/manage-user");
                redirect("/manage-user");
              }}
            >
              <UserGroupIcon fill="#FFFFFF" />
              <p>Manage Users</p>
            </div>
          </div>
          <div className="border-t">
            <button
              onClick={handleSettings}
              className="flex w-full items-center space-x-2 px-6 py-4 text-base"
            >
              <SettingsIcon />
              <p>Settings</p>
            </button>
            <button
              onClick={handleLogout}
              className="flex w-full items-center space-x-2 px-6 py-4 mb-2 text-base"
            >
              <LogoutIcon />
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
