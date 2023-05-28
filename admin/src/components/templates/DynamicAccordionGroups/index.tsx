import React from "react";
import DynamicPrimaryAccordion from "~/components/organisms/DynamicPrimaryAccordion";

const DynamicAccordionGroups = ({ usersData }: any) => {
  return (
    <div className="flex flex-col space-y-2 pb-20">
      {usersData.map((userData: any, number: number) => {
        const { full_name, avatar } = userData;
        return (
          <div key={number}>
            <DynamicPrimaryAccordion
              usersData={userData}
              number={number}
              title={full_name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DynamicAccordionGroups;
