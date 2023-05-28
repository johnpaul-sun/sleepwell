import React, { useContext } from "react";

import CancelIcon from "~/shared/icons/CancelIcon";
import Button from "~/components/atoms/Button";
import UserApi from "../../../api/admin/UserApi";
import { toast } from "react-hot-toast";
import { GlobalContext } from "~/context/GlobalContext";

const ConfirmationModal = ({ showModal, setShowModal, id, item }: any) => {
  const { assessment, dataCount } = useContext(GlobalContext) as any;
  const [pre_questions, set_pre_questions] = assessment;
  const [_, setData] = dataCount;
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleConfirm = () => {
    setShowModal(false);
    switch (item) {
      case "pre_question":
        UserApi.deletePreQuestion(id).then(() => {
          toast.success("Pre Question deleted successfully!");
          UserApi.getAssessment().then((res) => {
            set_pre_questions(res?.data?.assessment);
            setData(res?.data?.data);
            setShowModal(false);
          });
        });
        break;
      case "pre_choice":
        UserApi.deletePreChoice(id).then(() => {
          toast.success("Pre Choice deleted successfully!");
          UserApi.getAssessment().then((res) => {
            set_pre_questions(res?.data?.assessment);
            setData(res?.data?.data);
            setShowModal(false);
          });
        });
        break;
      case "main_question":
        UserApi.deleteMainQuestion(id).then(() => {
          toast.success("Main Question deleted successfully!");
          UserApi.getAssessment().then((res) => {
            set_pre_questions(res?.data?.assessment);
            setData(res?.data?.data);
            setShowModal(false);
          });
        });
        break;
      case "main_choice":
        UserApi.deleteMainChoice(id).then(() => {
          toast.success("Main Choice deleted successfully!");
          UserApi.getAssessment().then((res) => {
            set_pre_questions(res?.data?.assessment);
            setData(res?.data?.data);
            setShowModal(false);
          });
        });
        break;
      case "recommendation":
        UserApi.deleteRecommendation(id).then(() => {
          toast.success("Recommendation deleted successfully!");
          UserApi.getAssessment().then((res) => {
            set_pre_questions(res?.data?.assessment);
            setData(res?.data?.data);
            setShowModal(false);
          });
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      {showModal && (
        <div className="flex absolute inset-0 h-screen w-screen justify-center items-center bg-swell-30 bg-opacity-60 z-50">
          <div className="flex flex-col justify-center w-80 bg-white rounded shadow-xl z-50">
            {/* Heading */}
            <div className="flex justify-between pl-7 pr-4 py-2 border-b border-swell-30 text-base font-semibold">
              <h1 className="text-failed">!</h1>
              <button onClick={handleCancel}>
                <CancelIcon />
              </button>
            </div>
            {/* Content */}

            <div className="p-5">
              <h1 className="mb-10 text-lg font-medium text-center">
                Are you sure you want to delete this item?
              </h1>

              <div className="w-full flex gap-3 justify-between">
                <Button bg="!bg-success" onClick={handleCancel}>
                  Go Back
                </Button>
                <Button bg="!bg-failed" onClick={handleConfirm}>
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationModal;
