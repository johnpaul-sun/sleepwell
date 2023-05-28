import React, { useContext, useEffect, useState } from "react";

import NextHead from "~/components/atoms/NextHead";
import Accordion from "~/components/atoms/Accordion";
import SettingsIcon from "~/shared/icons/SettingsIcon";
import FooterNavbar from "~/components/atoms/FooterNavbar";
import AssessmentCard from "~/components/molecules/AssessmentCard";
import UserSettingModal from "~/components/molecules/UserSettingsModal";
import { GlobalContext } from "~/context/GlobalContext";
import Assessment from "~/api/user/Assessment";
import UserApi from "~/api/user/UserApi";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { latestRecomm, auth } = useContext(GlobalContext) as any;
  const [latestRecommendations, setLatestRecommendations] = latestRecomm; 
  const [authUser, setAuthUser] = auth; 

  const recommendations = latestRecommendations?.latest || [];

  const message =
    recommendations?.length === 0
      ? "You completed all the recommendations for better sleep habits. "
      : "Complete all recommendations before taking new assessment for better sleep habits.";

  const handleClick = () => {
    setShowModal(true);
  };
  
  useEffect(() => {
    Assessment.getRecommendations().then((res) => {
      setLatestRecommendations(res?.data);
    });
    UserApi.getUser().then((res)=>{
      setAuthUser(res.data)
    })
  }, []);

  return (
    <>
      <UserSettingModal showModal={showModal} setShowModal={setShowModal} />
      <div className="flex flex-col min-h-screen space-y-5 pb-32">
        <div className="flex justify-between items-center">
          <NextHead title="SleepWell | Recommendation">
            <button onClick={handleClick}>
              <SettingsIcon />
            </button>
          </NextHead>
        </div>

        {/* Top section */}
        <AssessmentCard recommendations={recommendations} message={message} avatar={authUser?.avatar}/>

        {/* Recommendation content */}
        <h1 className="text-xl font-medium border-b-2">
          Latest recommendations
        </h1>

        <section className="flex flex-col space-y-2">
          {recommendations?.length > 0 ? (
            recommendations.map((recommendation: any, index: number) => {
              return (
                <div key={index}>
                  <Accordion status="inProgress" title="In Progress" data={recommendation}>
                    <div className="flex flex-col space-y-4 pb-4">
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Question:
                        </h3>
                        <p className="text-base">
                          {recommendation?.main_question}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Your Answer:
                        </h3>
                        <p className="text-base">
                          {recommendation?.main_choice?.toUpperCase()}
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Recommendation:
                        </h3>
                        <p className="text-base">
                          {recommendation?.recommendation}
                        </p>
                      </div>
                    </div>
                  </Accordion>
                </div>
              );
            })
          ) : (
            <p className="text-failed text-center opacity-60">
              No available data
            </p>
          )}
        </section>
        {/* footer */}
        <FooterNavbar activePage="checklist" />
      </div>
    </>
  );
}

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
