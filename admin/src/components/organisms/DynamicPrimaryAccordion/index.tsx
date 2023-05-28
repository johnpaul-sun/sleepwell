/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import Accordion from "~/components/atoms/Accordion";

const DynamicPrimaryAccordion = ({ usersData, title, type, number }: any) => {
  const {
    gender,
    email,
    avatar,
    age,
    total_disliked_recommendations,
    total_liked_recommendations,
    total_in_progress_recommendations,
  } = usersData;

  return (
    <>
      <Accordion
        title={`${number + 1}.) ${title}`}
        avatar_state={true}
        avatar={avatar}
      >
        <div className="flex w-full flex-wrap justify-start items-center p-4 gap-5 px-10">
          <div className="flex items-center">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-5">
                <h1 className="text-xl text-[#3D2988] font-semibold">Age:</h1>
                <p className="text-lg font-medium">{age}</p>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-xl text-[#3D2988] font-semibold">
                  Gender:
                </h1>
                <p className="text-lg font-medium">{gender}</p>
              </div>
              <div className="flex items-center flex-wrap gap-5 max-w[50px]">
                <h1 className="text-xl text-[#3D2988] font-semibold">Email:</h1>
                <p
                  className="text-lg font-medium transition duration-150 ease-in-out"
                  data-bs-toggle="tooltip"
                  title={email}
                >
                  {email?.length > 33
                    ? email?.slice(0, email.length - 10) + "..." 
                    : email}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <h1 className="text-xl text-[#3D2988] font-semibold">
                Total In Progress Recommendations:
              </h1>
              <p className="text-lg font-medium">
                {total_in_progress_recommendations}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-xl text-[#3D2988] font-semibold">
                Total Liked Recommendations:
              </h1>
              <p className="text-lg font-medium">
                {total_liked_recommendations}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <h1 className="text-xl text-[#3D2988] font-semibold">
                Total Disliked Recommendations:
              </h1>
              <p className="text-lg font-medium">
                {total_disliked_recommendations}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Accordion title={`In progress recommendations`} type="warning">
            <div className="space-y-1">
              {usersData?.in_progress_recommendations?.map(
                (in_progress_recommendation: any, number: number) => {
                  const {
                    pre_question,
                    pre_choice,
                    main_question,
                    main_choice,
                    recommendation,
                  } = in_progress_recommendation;

                  return (
                    <div className="flex flex-col space-y-2" key={number}>
                      <Accordion
                        title={`${number + 1}.) ${pre_question}`}
                        type="preQuestion"
                      >
                        <div className="px-10 flex flex-col gap-5">
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Pre Choice:
                            </h1>
                            <p className="text-lg font-medium">{pre_choice}</p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Main Question:
                            </h1>
                            <p className="text-lg font-medium">
                              {main_question}
                            </p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Main Choice:
                            </h1>
                            <p className="text-lg font-medium">{main_choice}</p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Recommendation:
                            </h1>
                            <p className="text-lg font-medium">
                              {recommendation ? recommendation : "If the recommendations we gave you did not help you, you can take another assessment, or it is better to see a sleep doctor. Maybe the symptoms that you feel need serious treatment."}
                            </p>
                          </div>
                        </div>
                      </Accordion>
                    </div>
                  );
                }
              )}
            </div>
          </Accordion>
          <Accordion title={`Liked recommendations`} type="success">
            <div className="space-y-1">
              {usersData?.liked_recommendations?.map(
                (liked_recommendation: any, number: number) => {
                  const {
                    pre_question,
                    pre_choice,
                    main_question,
                    main_choice,
                    recommendation,
                  } = liked_recommendation;

                  return (
                    <div className="flex flex-col space-y-2" key={number}>
                      <Accordion
                        title={`${number + 1}.) ${pre_question}`}
                        type="preQuestion"
                      >
                        <div className="px-10 flex flex-col gap-5">
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Pre Choice:
                            </h1>
                            <p className="text-lg font-medium">{pre_choice}</p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Main Question:
                            </h1>
                            <p className="text-lg font-medium">
                              {main_question}
                            </p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Main Choice:
                            </h1>
                            <p className="text-lg font-medium">{main_choice}</p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Recommendation:
                            </h1>
                            <p className="text-lg font-medium">
                              {recommendation ? recommendation : "If the recommendations we gave you did not help you, you can take another assessment, or it is better to see a sleep doctor. Maybe the symptoms that you feel need serious treatment."}
                            </p>
                          </div>
                        </div>
                      </Accordion>
                    </div>
                  );
                }
              )}
            </div>
          </Accordion>
          <Accordion title={`Disliked recommendations`} type="failed">
            <div className="space-y-1">
              {usersData?.disliked_recommendations?.map(
                (disliked_recommendation: any, number: number) => {
                  const {
                    pre_question,
                    pre_choice,
                    main_question,
                    main_choice,
                    recommendation,
                  } = disliked_recommendation;

                  return (
                    <div className="flex flex-col space-y-2" key={number}>
                      <Accordion
                        title={`${number + 1}.) ${pre_question}`}
                        type="preQuestion"
                      >
                        <div className="px-10 flex flex-col gap-5">
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Pre Choice:
                            </h1>
                            <p className="text-lg font-medium">{pre_choice}</p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Main Question:
                            </h1>
                            <p className="text-lg font-medium">
                              {main_question}
                            </p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Main Choice:
                            </h1>
                            <p className="text-lg font-medium">{main_choice}</p>
                          </div>
                          <div className="flex items-start flex-wrap gap-5">
                            <h1 className="text-xl text-[#3D2988] font-semibold">
                              Recommendation:
                            </h1>
                            <p className="text-lg font-medium">
                              {recommendation ? recommendation : "If the recommendations we gave you did not help you, you can take another assessment, or it is better to see a sleep doctor. Maybe the symptoms that you feel need serious treatment."}
                            </p>
                          </div>
                        </div>
                      </Accordion>
                    </div>
                  );
                }
              )}
            </div>
          </Accordion>
        </div>
      </Accordion>
    </>
  );
};

export default DynamicPrimaryAccordion;
