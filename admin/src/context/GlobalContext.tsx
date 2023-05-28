import React, { createContext, useEffect, useState } from "react";

interface IGlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any>({});

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => {
  const [pre_questions, set_pre_questions] = useState<any>([]);
  const [usersData, setUsersData] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  return (
    <GlobalContext.Provider
      value={{
        assessment: [pre_questions, set_pre_questions],
        usersData: [usersData, setUsersData],
        dataCount: [data, setData],
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
