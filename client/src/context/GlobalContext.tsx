import React, { createContext, useEffect, useState } from "react";
import UserApi from "~/api/user/UserApi";

interface IGlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any>({});

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => { 
  const [main_questions, set_main_questions] = useState<any>([
    {
      main_question: "Loading...",
      main_choices: [
        {
          id: 1,
          main_choice: "...",
        },
      ],
    },
  ]);
  const [givenRecommendations, setGivenRecommendations] = useState<any>();
  const [latestRecommendations, setLatestRecommendations] = useState<any>();
  const [completedRecommendations, setCompletedRecommendations] = useState<any>();
  const [authUser, setAuthUser] = useState<any>(); 
  
  return (
    <GlobalContext.Provider
      value={{
        auth: [authUser, setAuthUser],
        main: [main_questions, set_main_questions],
        recommendation: [givenRecommendations, setGivenRecommendations],
        latestRecomm: [latestRecommendations, setLatestRecommendations],
        completedRecomm: [completedRecommendations, setCompletedRecommendations],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
