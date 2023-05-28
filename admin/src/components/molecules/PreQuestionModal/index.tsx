import React, { useContext, useState } from "react";

import CancelIcon from "~/shared/icons/CancelIcon";
import Security from "~/components/organisms/Security";
import Button from "~/components/atoms/Button";
import { toast } from "react-hot-toast";
import UserApi from "~/api/admin/UserApi";
import { GlobalContext } from "~/context/GlobalContext";
import ConfirmationModal from "../ConfirmationModal";

interface IPreQuestionModal {
  showModal: boolean;
  setShowModal: any;
  title: string;
  data?: any;
  success?: string;
  method: string;
  defaultValue?: any;
}

const PreQuestionModal = ({
  showModal,
  setShowModal,
  title,
  data,
  method,
  defaultValue,
  success = "Record has been added in the Database",
}: IPreQuestionModal) => {
  const { assessment, dataCount } = useContext(GlobalContext) as any;
  const [pre_questions, set_pre_questions] = assessment;
  const [_, setData] = dataCount;
  const { id, type, parent }: any = data || {};
  const initialParams = {
    [parent]: id,
  };
  const [params, setParams] = useState(initialParams);

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value, [parent]: id });
  };

  const handleSubmit = () => {
    setShowModal(false);
    switch (method) {
      case "CREATE":
        switch (type) {
          case "pre_question":
            UserApi.createPreQuestion(params)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                const message = err?.response?.data?.errors
                  ? Object.entries(err?.response?.data?.errors)
                  : err?.response?.data?.message;

                err?.response?.data?.errors
                  ? message?.map((error: any) => {
                      toast.error(error[1]);
                    })
                  : toast.error(message);
              });
            break;
          case "pre_choice":
            UserApi.createPreChoice(params)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                const message = err?.response?.data?.errors
                  ? Object.entries(err?.response?.data?.errors)
                  : err?.response?.data?.message;

                err?.response?.data?.errors
                  ? message?.map((error: any) => {
                      toast.error(error[1]);
                    })
                  : toast.error(message);
              });
            break;
          case "main_question":
            UserApi.createMainQuestion(params)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                const message = err?.response?.data?.errors
                  ? Object.entries(err?.response?.data?.errors)
                  : err?.response?.data?.message;

                err?.response?.data?.errors
                  ? message?.map((error: any) => {
                      toast.error(error[1]);
                    })
                  : toast.error(message);
              });
            break;
          case "main_choice":
            UserApi.createMainChoice(params)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                const message = err?.response?.data?.errors
                  ? Object.entries(err?.response?.data?.errors)
                  : err?.response?.data?.message;

                err?.response?.data?.errors
                  ? message?.map((error: any) => {
                      toast.error(error[1]);
                    })
                  : toast.error(message);
              });
            break;
          case "recommendation":
            UserApi.createRecommendation(params)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                const message = err?.response?.data?.errors
                  ? Object.entries(err?.response?.data?.errors)
                  : err?.response?.data?.message;

                err?.response?.data?.errors
                  ? message?.map((error: any) => {
                      toast.error(error[1]);
                    })
                  : toast.error(message);
              });
            break;
          default:
            break;
        }
        break;
      case "UPDATE":
        switch (type) {
          case "pre_question":
            UserApi.updatePreQuestion(params, id)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                toast.error("Something went wrong!");
              });
            break;
          case "pre_choice":
            UserApi.updatePreChoice(params, id)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                toast.error("Something went wrong!");
              });
            break;
          case "main_question":
            UserApi.updateMainQuestion(params, id)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                toast.error("Something went wrong!");
              });
            break;
          case "main_choice":
            UserApi.updateMainChoice(params, id)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                toast.error("Something went wrong!");
              });
            break;
          case "recommendation":
            UserApi.updateRecommendation(params, id)
              .then((_) => {
                toast.success(success);
                UserApi.getAssessment().then((res) => {
                  set_pre_questions(res?.data?.assessment);
                  setData(res?.data?.data);
                });
                setShowModal(false);
              })
              .catch((err) => {
                toast.error("Something went wrong!");
              });
            break;
          default:
            break;
        }
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
              <h1>{title}</h1>
              <button onClick={handleCancel}>
                <CancelIcon />
              </button>
            </div>
            <div className="flex flex-col w-full p-4 space-y-5">
              <textarea
                defaultValue={method === "UPDATE" ? defaultValue : ""}
                name={type}
                id={type}
                cols={30}
                rows={5}
                className="flex justify-center border-2 m-2 p-2"
                placeholder="Input here.."
                onChange={handleChange}
              ></textarea>
              <div className="flex ml-auto ">
                <Button 
                  className="px-6"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreQuestionModal;
