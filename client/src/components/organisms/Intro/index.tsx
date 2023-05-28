import React, { useState } from "react";
import Image from "next/image";

import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import Checkbox from "~/components/atoms/Checkbox";

const Intro = ({
  setActiveComponent,
}: {
  setActiveComponent: (value: string) => void;
}) => {
  const [isChecked, setIsChecked] = useState<boolean | undefined>(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pb-10">
        <NextHead title="SleepWell | Welcome"></NextHead>
        <section className="flex flex-col items-center mb-7">
          <Image
            priority
            src="/images/Thankyou.png"
            alt="welcome"
            width="400"
            height="400"
            className="w-[205px] h-[160px]"
          ></Image>
          <p className=" text-3xl font-semibold">Welcome to SleepWell</p>
          <p className="text-base">A sleep cycle assessment app! </p>
        </section>
        <section className="space-y-6">
          <p>
            In order to provide you with the most accurate recommendations, we
            will be collecting some additional information.{" "}
          </p>
          <p>
            This information will be used to tailor our recommendations to your
            specific needs.
          </p>
          <p>
            We appreciate your participation and look forward to helping you
            improve your sleep.
          </p>
        </section>
      </div>
      <div className="flex flex-col space-y-5 pb-16">
        <Checkbox
          handleClick={handleCheck}
          name="welcome"
          label="Yes, I agree."
        ></Checkbox>
        <Button
          isDisabled={!isChecked}
          onClick={() => setActiveComponent("Gender")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Intro;
