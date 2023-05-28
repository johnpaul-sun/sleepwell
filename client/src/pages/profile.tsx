import React, { useContext, useEffect, useState } from "react";

import NextHead from "~/components/atoms/NextHead";
import Accordion from "~/components/atoms/Accordion";
import SettingsIcon from "~/shared/icons/SettingsIcon";
import FooterNavbar from "~/components/atoms/FooterNavbar";
import UserSettingModal from "~/components/molecules/UserSettingsModal";
import HistoryProfileCard from "~/components/molecules/HistoryProfileCard";
import moment from "moment";
import { GlobalContext } from "~/context/GlobalContext";
import UserApi from "~/api/user/UserApi";
import Assessment from "~/api/user/Assessment";

const History = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { completedRecomm, auth } = useContext(GlobalContext) as any;
  const [completedRecommendations, setCompletedRecommendations] =
    completedRecomm;
  const [authUser, setAuthUser] = auth;
  const recommendations =
    completedRecommendations && completedRecommendations?.completed;

  const handleClick = () => {
    setShowModal(true);
  };

  useEffect(() => {
    Assessment.getRecommendations().then((res) => {
      setCompletedRecommendations(res?.data);
    });
    UserApi.getUser().then((res) => {
      setAuthUser(res.data);
    });
  }, []);
  
  const profile = {
    full_name: authUser?.full_name || "Loading...",
    created_at: authUser?.created_at || "20220909",
    completed_recommendations_count: recommendations?.length,
  };

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
        <HistoryProfileCard
          full_name={profile.full_name}
          created_at={profile.created_at}
          completed_recommendations_count={
            profile.completed_recommendations_count
          }
          avatar={authUser?.avatar}
        />

        {/* Recommendation content */}
        <h1 className="text-xl font-medium border-b-2">
          Completed recommendations
        </h1>

        <section className="flex flex-col space-y-2">
          {recommendations?.length > 0 ? (
            recommendations?.map((recommendation: any) => {
              return (
                <div key={recommendation.id}>
                  <Accordion
                    isDisabledButtons={true}
                    status={recommendation.status}
                    data={recommendation}
                    title={moment(recommendation.updated_at).format(
                      "MMM DD, YYYY"
                    )}
                  >
                    <div className="flex flex-col space-y-4 pb-4">
                      <div className="flex flex-col space-y-2">
                        <h3 className="text-xl font-medium text-swell-30">
                          Question:
                        </h3>
                        <p className="text-base">
                          {recommendation.main_question}
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
        <FooterNavbar activePage="profile" />
      </div>
    </>
  );
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default History;
