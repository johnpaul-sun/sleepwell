import React, { useState } from "react";

import CancelIcon from "~/shared/icons/CancelIcon";
import Profile from "~/components/organisms/Profile";
import Security from "~/components/organisms/Security";

interface IUserSettingModal {
  showModal: boolean;
  setShowModal: any;
}

const UserSettingModal = ({ showModal, setShowModal }: IUserSettingModal) => {
  const [active, setActive] = useState<string>("Profile");

  const toggleActive = (value: string) => {
    setActive(value);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="flex absolute inset-0 h-screen w-screen justify-center items-center bg-swell-30 bg-opacity-60">
          <div className="flex flex-col justify-center w-80 bg-white rounded shadow-xl z-50">
            {/* Heading */}
            <div className="flex justify-between pl-7 pr-4 py-2 border-b border-swell-30 text-base font-semibold">
              <div className="flex space-x-7">
                <div
                  onClick={() => toggleActive("Profile")}
                  className={`${active != "Profile" && "opacity-60"}`}
                >
                  <h1>Profile</h1>
                </div>

                <div
                  onClick={() => toggleActive("Security")}
                  className={`${active != "Security" && "opacity-60"}`}
                >
                  <h1>Security</h1>
                </div>
              </div>
              <button onClick={handleCancel}>
                <CancelIcon />
              </button>
            </div>
            {/* Content */}
            {active == "Profile" ? <Profile /> : <Security />}
          </div>
        </div>
      )}
    </>
  );
};

export default UserSettingModal;
