import React, { useState } from "react";

import EditIcon from "~/shared/icons/EditIcon";
import EllipseIcon from "~/shared/icons/EllipseIcon";
import Accordion from "~/components/atoms/Accordion";
import PreChoiceAccordionGroup from "../PreChoiceAccordionGroup";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";

interface PreQuestionAccordionGroup {
  item: any;
  title: string;
  type: string;
  number: number
}

const PreQuestionAccordion = ({
  item,
  title,
  type,
  number
}: PreQuestionAccordionGroup) => {
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
        item="pre_question"
      />
      <PreQuestionModal
        showModal={showModal}
        setShowModal={setShowModal}
        defaultValue={item.pre_question}
        title={
          method === "CREATE" ? "Add new Pre Choice" : "Update Pre Question"
        }
        data={
          method === "CREATE"
            ? { type: "pre_choice", id: item?.id, parent: "pre_question_id" }
            : { type: "pre_question", id: item?.id }
        }
        method={method}
      />
      <Accordion
        hasAdd={true}
        hasDelete={true}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        type={type}
        title={`${number+1}.) ${title}`}
      >
        <div className="flex w-full justify-between items-center p-4 space-x-4">
          <div className="flex items-center space-x-4">
            <EllipseIcon type={type} />
            <div>{item.pre_question}</div>
          </div>
          <button onClick={handleEdit}>
            <EditIcon />
          </button>
        </div>
        <div className="space-y-1">
          {item?.pre_choices?.map((pre_choice: any, number: number) => {
            return (
              <div key={pre_choice.id}>
                <PreChoiceAccordionGroup
                  item={pre_choice}
                  number={number}
                  title="Pre Choice"
                  type="preChoice"
                />
              </div>
            );
          })}
        </div>
      </Accordion>
    </>
  );
};

export default PreQuestionAccordion;
