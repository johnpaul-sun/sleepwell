/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";

import Layout from "~/layout/Layout";
import UserApi from "~/api/admin/UserApi";
import { GlobalContext } from "~/context/GlobalContext";
import DynamicAccordionGroups from "~/components/templates/DynamicAccordionGroups";
import Chart from "react-google-charts";

const ManageUser = () => {
  const { assessment } = useContext(GlobalContext) as any;
  const [usersData, setUsersData] = assessment;
  const [userVisual, setUserVisual] = useState<any>();
  const [loading, setIsLoading] = useState(true);
  const [screenWidth, setScreenWidth] = useState<any>(
    typeof window !== "undefined" && window.innerWidth
  );
  const {
    total_assessment_takers,
    total_recommended_dislikers,
    total_recommended_likers,
    total_users,
  } = userVisual || {}; 

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

  useEffect(() => {
    UserApi.getUsersAssessment().then((res) => {
      setUsersData(res?.data?.userData);
      setUserVisual(res?.data?.data);
      setIsLoading(false);
    });
  }, []);

  const data = [
    ["Task", "Users Data"],
    ["Total Users", total_users],
    ["Assessment Takers", total_assessment_takers],
    ["Recommended Likers", total_recommended_likers],
    ["Recommended Dislikers", total_recommended_dislikers],
  ];

  const options = {
    title: "Users Data Pie Chart",
    backgroundColor: "transparent",
    is3D: true,
  };

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Array<any>>([]);

  useEffect(() => {
    setFilteredData(
      usersData.filter((item: any) =>
        item?.full_name?.toLowerCase()?.includes(searchInput?.toLowerCase())
      )
    );
  }, [searchInput, usersData]);
 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      setFilteredData(usersData);
    }
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Admin | Dashboard</title>
        </Head>
        {loading ? (
          <div className="w-full text-center">
            <h1 className="text-lg text-failed">Loading...</h1>
          </div>
        ) : (
          <div className="flex flex-col space-y-8 h-full pt-[100px] max-w-[1056px] flex-1">
            <div
              className={`flex gap-5 w-full ${
                screenWidth <= 500 && "flex-wrap"
              }`}
            >
              <div
                className={`w-[55%] ${
                  screenWidth <= 500 && "!w-full h-[300px]"
                }`}
              >
                <Chart
                  chartType="PieChart"
                  data={data}
                  options={options}
                  width={"100%"}
                  height={screenWidth <= 500 ? "400px" : "300px"}
                />
              </div>
              <div
                className={`h-fit w-[45%] flex flex-col space-y-2 sm:grid sm:gap-4 sm:grid-cols-1 sm:space-y-0 ${
                  screenWidth <= 500 && "!w-full"
                }`}
              >
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-3 bg-swell-card">
                  <div className="text-medium font-medium">Total Users</div>
                  <div className="text-xl font-bold">{total_users}</div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-3 bg-swell-card">
                  <div className="text-medium font-medium">
                    Assessment Takers
                  </div>
                  <div className="text-xl font-bold">
                    {total_assessment_takers}
                  </div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-3 bg-swell-card">
                  <div className="text-medium font-medium">
                    Recommended Likers
                  </div>
                  <div className="text-xl font-bold">
                    {total_recommended_likers}
                  </div>
                </div>
                <div className="flex justify-between rounded-lg shadow-sm px-6 py-3 bg-swell-card">
                  <div className="text-medium font-medium">
                    Recommended Dislikers
                  </div>
                  <div className="text-xl font-bold">
                    {total_recommended_dislikers}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ml-auto">
              <div className="w-full my-2 flex flex-row gap-3 p-2 border-2 border-slate-900 rounded-lg">
                <img src="/images/search.png" alt="search" width="20" />
                <input
                  type="text"
                  className="w-full h-full border-none bg-transparent outline-none"
                  placeholder="Search by name"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Users Nested Accordions */}
            <DynamicAccordionGroups usersData={filteredData} />
            {filteredData?.length === 0 && (
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
export default ManageUser;
