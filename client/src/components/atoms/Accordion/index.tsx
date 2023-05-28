import React, { useContext } from "react";
import { Disclosure } from "@headlessui/react";

import ThumbUpIcon from "~/shared/icons/ThumbUpIcon";
import ThumbDownIcon from "~/shared/icons/ThumbDownIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import Assessment from "~/api/user/Assessment";
import { GlobalContext } from "~/context/GlobalContext";
import toast from "react-hot-toast";

interface IAccordion {
  title: string;
  children: React.ReactNode;
  status?: string;
  isDisabledButtons?: boolean;
  data: any;
}

const Accordion = ({
  title,
  children,
  status,
  isDisabledButtons = false,
  data,
}: IAccordion) => {
  const { like, dislike, id } = data || {};

  const { latestRecomm } = useContext(GlobalContext) as any;
  const [_, setLatestRecommendations] = latestRecomm;

  return (
    <div className=" ">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex w-full justify-between items-center space-x-4 p-4 bg-swell-dark text-white shadow-md">
              <Disclosure.Button className="flex w-full">
                <div className="flex items-center space-x-3">
                  <EllipseIcon
                    status={
                      (like == true && "liked") ||
                      (dislike == true && "disliked") ||
                      "inProgress"
                    }
                  />
                  <div className="text-base font-medium">{title}</div>
                </div>
              </Disclosure.Button>
              <div className="flex space-x-4">
                {dislike == true ? (
                  <button
                    disabled={isDisabledButtons}
                    onClick={() => {
                      Assessment.reactRecommendation(id, { like: false }).then(
                        () => {
                          Assessment.getRecommendations().then((res) => {
                            setLatestRecommendations(res?.data);
                            toast.success("You dislike this recommendation!");
                          });
                        }
                      );
                    }}
                  >
                    <ThumbDownIcon isActive={dislike == true} />
                  </button>
                ) : (
                  <button
                    disabled={isDisabledButtons}
                    onClick={() => {
                      Assessment.reactRecommendation(id, { like: false }).then(
                        () => {
                          Assessment.getRecommendations().then((res) => {
                            setLatestRecommendations(res?.data);
                            toast.success("You dislike this recommendation!");
                          });
                        }
                      );
                    }}
                  >
                    <ThumbDownIcon isActive={dislike == true} />
                  </button>
                )}
                {like == true ? (
                  <button
                    disabled={isDisabledButtons}
                    onClick={() => {
                      Assessment.reactRecommendation(id, { like: true }).then(
                        () => {
                          Assessment.getRecommendations().then((res) => {
                            setLatestRecommendations(res?.data);
                            toast.success("You like this recommendation!");
                          });
                        }
                      );
                    }}
                  >
                    <ThumbUpIcon isActive={like == true} />
                  </button>
                ) : (
                  <button
                    disabled={isDisabledButtons}
                    onClick={() => {
                      Assessment.reactRecommendation(id, { like: true }).then(
                        () => {
                          Assessment.getRecommendations().then((res) => {
                            setLatestRecommendations(res?.data);
                            toast.success("You like this recommendation!");
                          });
                        }
                      );
                    }}
                  >
                    <ThumbUpIcon isActive={like == true} />
                  </button>
                )}
              </div>
            </div>
            <Disclosure.Panel className="bg-gray text-base p-5 border-b shadow-lg">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Accordion;
