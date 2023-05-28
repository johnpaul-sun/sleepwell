/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";

import Button from "~/components/atoms/Button";
import Layout from "~/layout/Layout";
import PreQuestionModal from "~/components/molecules/PreQuestionModal";
import AccordionGroups from "~/components/templates/AccordionGroups";
import UserApi from "~/api/admin/UserApi";
import { GlobalContext } from "~/context/GlobalContext";
import ConfirmationModal from "~/components/molecules/ConfirmationModal";
import Chart from "react-google-charts";

const Dashboard = () => {
  const { assessment, dataCount } = useContext(GlobalContext) as any;
  const [pre_questions, set_pre_questions] = assessment;
  const [data, setData] = dataCount;
  const [showModal, setShowModal] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState<any>(
    typeof window !== "undefined" && window.innerWidth
  );

  useEffect((): any => {
    function handleResize() {
      setScreenWidth(typeof window !== "undefined" && window.innerWidth);
    }

    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);

  const onClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    UserApi.getAssessment().then((res) => {
      set_pre_questions(res?.data?.assessment);
      setData(res?.data?.data);
      setIsLoading(false);
    });
  }, []);

  const pieChartData = [
    ["Task", "Assessment Data"],
    ["Pre Question", data?.total_pre_questions],
    ["Pre Choice", data?.total_pre_choices],
    ["Main Question", data?.total_main_questions],
    ["Main Choice", data?.total_main_choices],
    ["Recommendations", data?.total_recommendations],
  ];

  const options = {
    title: "Assessment Pie Chart",
    backgroundColor: "transparent",
    is3D: true,
  };

  return (
    <>
      <PreQuestionModal
        showModal={showModal}
        setShowModal={setShowModal}
        title="Add new Pre Question"
        data={{ type: "pre_question" }}
        method="CREATE"
      />
      <Layout>
        <Head>
          <title>Admin | Dashboard</title>
        </Head>
        {loading ? (
          <div className="w-full text-center">
            <h1 className="text-lg text-failed">Loading...</h1>
          </div>
        ) : (
          <div className="flex flex-col space-y-8 min-h-full pt-16 max-w-[1056px] flex-1">
            <div
              className={`flex gap-5 w-full ${
                screenWidth <= 500 && "flex-wrap"
              }`}
            >
              <div
                className={`w-1/2 ${screenWidth <= 500 && "!w-full h-[300px]"}`}
              >
                <Chart
                  chartType="PieChart"
                  data={pieChartData}
                  options={options}
                  width={"100%"}
                  height={screenWidth <= 500 ? "400px" : "300px"}
                />
              </div>
              <div
                className={`h-fit w-1/2 flex flex-col space-y-2 sm:grid sm:gap-4 sm:grid-cols-1 sm:space-y-0 ${
                  screenWidth <= 500 && "!w-full"
                }`}
              >
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-2 bg-swell-card">
                  <div className="text-medium font-medium">
                    Total Pre Questions
                  </div>
                  <div className="text-xl font-bold">
                    {data?.total_pre_questions}
                  </div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-2 bg-swell-card">
                  <div className="text-medium font-medium">
                    Total Pre Choices
                  </div>
                  <div className="text-xl font-bold">
                    {data?.total_pre_choices}
                  </div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-2 bg-swell-card">
                  <div className="text-medium font-medium">
                    Total Main Questions
                  </div>
                  <div className="text-xl font-bold">
                    {data?.total_main_questions}
                  </div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-2 bg-swell-card">
                  <div className="text-medium font-medium">
                    Total Main Choice
                  </div>
                  <div className="text-xl font-bold">
                    {data?.total_main_choices}
                  </div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-2 bg-swell-card">
                  <div className="text-medium font-medium">
                    Total Recommendations
                  </div>
                  <div className="text-xl font-bold">
                    {data?.total_recommendations}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ml-auto">
              <Button
                onClick={onClick}
                className="bg-swell-10 border-none text-lg px-6 py-2"
              >
                Add New Pre Question
              </Button>
            </div>

            {/* PreQuestions Nested Accordions */} 
              <AccordionGroups
                pre_questions={pre_questions}
                showModal={showModal}
                setShowModal={setShowModal}
              /> 
            {pre_questions?.length === 0 && (
              <div className="w-full text-center">
                <h1 className="text-lg text-failed">No available data.</h1>
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  );
};

export { AdminSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Dashboard;
