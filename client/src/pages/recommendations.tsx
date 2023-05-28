import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";

import Card from "~/components/atoms/Card";
import { GlobalContext } from "~/context/GlobalContext";
import Recommendation from "~/components/templates/Recommendation";

const Recommendations: NextPage = (): JSX.Element => {
  const { recommendation, latestRecomm } = useContext(GlobalContext) as any;
  const [recommendations] = recommendation;
  const [_, setLatestRecommendations] = latestRecomm;
  const { latest } = recommendations || [];

  const [currentPage, setCurrentPage] = useState(0);
  const totalPage = latest && latest.length;

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => { 
    setLatestRecommendations(latest);
  }, []);

  return (
    <>
      <Recommendation
        totalPage={totalPage}
        page={[currentPage, setCurrentPage]}
        callback={handleNext}
        imageHeight={300}
        imageWidth={250}
        loaderUrl={"/checklist"}
        loaderMessage={"Finalizing and saving data..."}
        finalButtonMessage="Go to checklist"
      >
        <div className="text-xl font-medium space-y-5 mb-6">
          <section className="space-y-1">
            <h2>Question:</h2>
            <p className="text-base font-normal">
              {latest && latest[currentPage]?.main_question}
            </p>
          </section>
          <section className="space-y-1">
            <h2>Your Answer:</h2>
            <p className="text-base font-normal">
              {latest && latest[currentPage]?.main_choice}
            </p>
          </section>
        </div>
        <Card
          title="Recommendation"
          message={latest && latest[currentPage]?.recommendation}
        />
      </Recommendation>
    </>
  );
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Recommendations;
