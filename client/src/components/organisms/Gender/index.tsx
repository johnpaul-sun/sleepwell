import React, { useState } from "react";
import Image from "next/image";

import NextHead from "~/components/atoms/NextHead";
import Button from "~/components/atoms/Button";
import Radio from "~/components/organisms/Radio";

interface IGender {
  setActiveComponent: (value: string) => void;
  handleInput: (value: {}) => void;
}

const Gender = ({ setActiveComponent, handleInput }: IGender) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [gender, setGender] = useState<any>(null);

  const options = [
    { id: 1, choice: "Male" },
    { id: 2, choice: "Female" },
    { id: 3, choice: "Non-binary" },
    { id: 4, choice: "Prefer not to say" },
  ];

  const handleOnchange = (event: any) => {
    setGender(event.choice);
    setButtonDisabled(false);
  };

  const handleNext = () => {
    handleInput({ gender });
    setActiveComponent("Info");
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div>
        <NextHead title="SleepWell | Welcome"></NextHead>
        <section className="flex flex-col items-center mb-7">
          <Image
            priority
            src="/images/Gender.png"
            alt="welcome"
            width="400"
            height="400"
            className="w-[205px] h-[160px]"
          ></Image>
          <p className=" text-3xl font-semibold">What is your gender?</p>
        </section>
        <Radio
          callback={handleOnchange}
          options={options}
          keyValue={"choice"}
        />
      </div>
      <div className="flex flex-col space-y-5 pb-16">
        <Button isDisabled={buttonDisabled} onClick={handleNext}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Gender;
