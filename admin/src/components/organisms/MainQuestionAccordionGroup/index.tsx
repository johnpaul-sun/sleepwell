import React, { useState } from "react";
import Accordion from "~/components/atoms/Accordion";
import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import PeopleIcon from "~/shared/icons/PeopleIcon";
import MainChoiceAccordionGroup from "../MainChoiceAccordionGroup";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";

interface IMainQuestionAccordionGroup {
  item: any;
  title: string;
  type: string;
  number: number
}

const MainQuestionAccordionGroup = ({
  item,
  title,
  type,
  number
}: IMainQuestionAccordionGroup) => {
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
        item="main_question"
      />
      <PreQuestionModal
        defaultValue={item.main_question}
        showModal={showModal}
        setShowModal={setShowModal}
        title={
          method === "CREATE" ? "Add new Main Choice" : "Update Main Question"
        }
        data={
          method === "CREATE"
            ? { type: "main_choice", id: item?.id, parent: "main_question_id" }
            : { type: "main_question", id: item?.id }
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
            <div>{item.main_question}</div>
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
          {item.main_choices.map((main_choice: any, number:number) => {
            return (
              <div key={main_choice.id}>
                <MainChoiceAccordionGroup
                  item={main_choice}
                  number={number}
                  title="Main Choice"
                  type="mainChoice"
                />
              </div>
            );
          })}
        </div>
      </Accordion>
    </>
  );
};

export default MainQuestionAccordionGroup;
