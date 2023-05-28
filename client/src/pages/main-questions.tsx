import { NextPage } from "next";
import React, { useContext, useState } from "react";
import Assessment from "~/api/user/Assessment";
import UserApi from "~/api/user/UserApi";

import Radio from "~/components/organisms/Radio";
import Questionnaire from "~/components/templates/Questionnaire";
import { GlobalContext } from "~/context/GlobalContext";

const MainQuestions: NextPage = (): JSX.Element => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const { main, recommendation, auth, latestRecomm } = useContext(GlobalContext) as any;
  const [main_questions] = main;
  const [x, setAuthUser] = auth;
  const [_, setGivenRecommendations] = recommendation;
  const totalPage = main_questions && main_questions?.length;
  const [latestRecommendations, setLatestRecommendations] = latestRecomm;

  const [result, setResult] = useState<any[]>([]);
  const [value, setValue] = useState({});

  const handleOnchange = (event: any) => {
    const newValue = {
      main_question_id: main_questions[currentPage]?.id,
      main_choice_id: event.id,
    };

    setValue({
      ...value,
      ...newValue,
    });

    setButtonDisabled(false);
  };
  
  const handleNext = () => {
    setResult([...result, value]);
    if (currentPage == totalPage - 1) {
      Assessment.setRecommendations([...result, value]).then((_) => {
        Assessment.getRecommendations().then((res) => {
          setGivenRecommendations(res?.data);
          setLatestRecommendations(res?.data);
        });
      });
      UserApi.getUser().then((res)=>{
        setAuthUser(res.data)
      })
    }
  };

  return (
    <>
      <Questionnaire
        totalPage={totalPage}
        questions={main_questions && main_questions}
        page={[currentPage, setCurrentPage]}
        buttonState={[buttonDisabled, setButtonDisabled]}
        callback={handleNext}
        image={"/images/main-question.png"}
        imageHeight="216"
        imageWidth="260"
        loaderUrl={"/recommendations"}
        loaderMessage={"Generating Recommendations"}
        hasGetResult={true}
        finalButtonMessage="Get Result"
      >
        <p className="text-xl font-semibold">
          {currentPage + 1}.&#41; {main_questions && main_questions[currentPage]?.main_question}
        </p>
        <Radio
          callback={handleOnchange}
          options={main_questions && main_questions[currentPage]?.main_choices}
          keyValue="main_choice"
        />
      </Questionnaire>
    </>
  );
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default MainQuestions;
