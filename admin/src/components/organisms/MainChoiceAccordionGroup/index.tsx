import React, { useState } from "react";
import Accordion from "~/components/atoms/Accordion";
import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import PeopleIcon from "~/shared/icons/PeopleIcon";
import RecommendationsGroup from "../RecommendationAccordionGroup";
import RecommendationAccordionGroup from "../RecommendationAccordionGroup";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";

interface IMainChoiceAccordionGroup {
  item: any;
  title: string;
  type: string;
  number: number
}

const MainChoiceAccordionGroup = ({
  item,
  title,
  type,
  number
}: IMainChoiceAccordionGroup) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [method, setMethod] = useState("CREATE");
  const handleAdd = () => {
    setMethod("CREATE");
    setShowModal(true);
  };
  const handleEdit = () => {
    setMethod("UPDATE");
    setShowModal(true);
  };
  const handleDelete = () => { 
    setShowDeleteModal(true);
  };

  return (
    <>
      <ConfirmationModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        id={item?.id}
        item="main_choice"
      />
      <PreQuestionModal
        defaultValue={item.main_choice}
        showModal={showModal}
        setShowModal={setShowModal}
        title={
          method === "CREATE" ? "Add new Recommendation" : "Update Main Choice"
        }
        data={
          method === "CREATE"
            ? { type: "recommendation", id: item?.id, parent: "main_choice_id" }
            : { type: "main_choice", id: item?.id }
        }
        method={method}
      />
      <Accordion
        hasAdd={true}
        hasDelete={true}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        type={type}
        title={`${number + 1}.) ${title}`}
      >
        <div className="flex w-full justify-between items-center p-4 space-x-4">
          <div className="flex items-center space-x-4">
            <EllipseIcon type={type} />
            <div>{item.main_choice}</div>
          </div>
          <div className="flex space-x-6">
            {/* <div className="flex space-x-2">
            <p>60</p>
            <PeopleIcon />
          </div> */}
            <button onClick={handleEdit}>
              <EditIcon />
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <RecommendationsGroup
            list={item.recommendations}
            title="Recommendations"
            type="recommendation"
          />
        </div>
      </Accordion>
    </>
  );
};

export default MainChoiceAccordionGroup;
