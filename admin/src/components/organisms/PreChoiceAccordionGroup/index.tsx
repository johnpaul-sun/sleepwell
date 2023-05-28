import React, { useState } from "react";

import EditIcon from "~/shared/icons/EditIcon"; 
import Accordion from "~/components/atoms/Accordion";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import MainQuestionAccordionGroup from "../MainQuestionAccordionGroup";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";

interface IPreChoiceAccordionGroup {
  item: any;
  title: string;
  type: string;
  number: number
}

const PreChoiceAccordionGroup = ({
  item,
  title,
  type,
  number
}: IPreChoiceAccordionGroup) => {
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
        item="pre_choice"
      />
      <PreQuestionModal
        defaultValue={item.pre_choice}
        showModal={showModal}
        setShowModal={setShowModal}
        title={
          method === "CREATE" ? "Add new Main Question" : "Update Pre Choice"
        }
        data={
          method === "CREATE"
            ? { type: "main_question", id: item?.id, parent: "pre_choice_id" }
            : { type: "pre_choice", id: item?.id }
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
            <div>{item.pre_choice}</div>
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
          {item.main_questions?.map((main_question: any, number: number) => {
            return (
              <div key={main_question.id}>
                <MainQuestionAccordionGroup
                  item={main_question}
                  number={number}
                  title="Main Question"
                  type="mainQuestion"
                />
              </div>
            );
          })}
        </div>
      </Accordion>
    </>
  );
};

export default PreChoiceAccordionGroup;
