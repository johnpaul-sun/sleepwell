import React, { useState } from "react";
import { NextPage } from "next";

import redirect from "~/shared/utils/redirect";
import Info from "~/components/organisms/Info";
import Intro from "~/components/organisms/Intro";
import Gender from "~/components/organisms/Gender";

const Welcome: NextPage = (): JSX.Element => {
  const [activeComponent, setActiveComponent] = useState<string>("Intro");

  const [result, setResult] = useState<any>({});

  const handleInput = (newValue: any) => {
    setResult({ ...result, ...newValue });
  };

  const pages = (active: string) => {
    switch (active) {
      case "Intro":
        return <Intro setActiveComponent={setActiveComponent} />;
      case "Gender":
        return (
          <Gender
            handleInput={handleInput}
            setActiveComponent={setActiveComponent}
          />
        );
      case "Info":
        return <Info result={result} />;
      default:
        redirect("/error");
        break;
    }
  };

  return <>{pages(activeComponent)}</>;
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Welcome;
