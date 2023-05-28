import React, { useContext, useState } from "react";

import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import Accordion from "~/components/atoms/Accordion";
import TrashIcon from "~/shared/icons/TrashIcon";
import ThumbUpIcon from "~/shared/icons/ThumbUpIcon";
import ThumbDownIcon from "~/shared/icons/ThumbDownIcon";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import { GlobalContext } from "~/context/GlobalContext";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";

interface IRecommendationsGroup {
  list: any;
  title: string;
  type: string;
}

const RecommendationsGroup = ({ list, title, type }: IRecommendationsGroup) => {
  const { assessment, dataCount } = useContext(GlobalContext) as any;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pre_questions, set_pre_questions] = assessment;
  const [_, setData] = dataCount;
  const [showModal, setShowModal] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");
  const [selectedID, setSelectedID] = useState(0);
  const [method, setMethod] = useState("UPDATE");

  const handleAdd = () => {
    console.log("Added!");
  };
  const handleEdit = (id: any, defVal: string) => {
    setMethod("UPDATE");
    setDefaultValue(defVal);
    setSelectedID(id);
    setShowModal(true);
  };
  const handleDelete = (id: any, defVal: string) => {
    setSelectedID(id);
    setDefaultValue(defVal);
    setShowDeleteModal(true);
  };

  return (
    <>
      <ConfirmationModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        id={selectedID}
        item="recommendation"
      />
      <PreQuestionModal
        defaultValue={defaultValue}
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Update recommendation"}
        data={{ type: "recommendation", id: selectedID }}
        method={method}
      />
      <Accordion
        hasAdd={false}
        handleAdd={handleAdd}
        type={type}
        title={`${title}`}
      >
        {list.map((item: any, number: number) => {
          return (
            <div key={item.id}>
              <div className="flex w-full justify-between items-center p-4 space-x-4">
                <div className="flex items-center space-x-4">
                  <EllipseIcon type={type} />
                  <div>{item.recommendation}</div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex space-x-1">
                    <p>{item.dislike_counts}</p>
                    <ThumbDownIcon />
                  </div>
                  <div className="flex space-x-1">
                    <p>{item.like_counts}</p>
                    <ThumbUpIcon />
                  </div>
                  <button
                    onClick={() => {
                      handleDelete(item?.id, item.recommendation);
                    }}
                  >
                    <TrashIcon />
                  </button>
                  <button
                    onClick={() => {
                      handleEdit(item?.id, item.recommendation);
                    }}
                  >
                    <EditIcon />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Accordion>
    </>
  );
};

export default RecommendationsGroup;
