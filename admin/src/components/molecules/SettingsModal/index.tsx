import React from "react";

import CancelIcon from "~/shared/icons/CancelIcon";
import Security from "~/components/organisms/Security";

interface ISettingsModal {
  showModal: boolean;
  setShowModal: any;
}

const SettingsModal = ({ showModal, setShowModal }: ISettingsModal) => {
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
              <h1>Security</h1>
              <button onClick={handleCancel}>
                <CancelIcon />
              </button>
            </div>
            {/* Content */}
            <Security />
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsModal;
