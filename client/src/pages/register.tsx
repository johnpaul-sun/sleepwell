import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

import redirect from "~/shared/utils/redirect";
import AuthApi, { IUserParams } from "~/api/user/AuthApi";
import NextHead from "~/components/atoms/NextHead";
import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";

const Register: NextPage = (): JSX.Element => {
  const initialParams = {
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [params, setParams] = useState<IUserParams>(initialParams);

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.promise(
      AuthApi.register(params).then(() => {
        redirect("/");
      }),
      {
        loading: "Loading..",
        success: (data) => `Successfully registered.`,
        error: (err) => `${err.response.data.message}`,
      }
    );
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pb-10">
        <NextHead key="signup" title="SleepWell | Sign Up" />
        <div className="relative flex justify-center">
          <Image
            priority
            src="/images/Signup.png"
            alt="signup"
            width="400"
            height="400"
            className="w-[225px] h-[230px]"
          />
          <p className="absolute bottom-0 text-3xl font-semibold">
            Create an account
          </p>
        </div>
        <div className="py-6">
          <Input
            name="email"
            label="Email address"
            placeholder="johndoe@gmail.com"
            onChange={handleChange}
          ></Input>
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••••"
            onChange={handleChange}
          ></Input>
          <Input
            name="password_confirmation"
            label="Confirm password"
            type="password"
            placeholder="••••••••••"
            onChange={handleChange}
          ></Input>
          <div className="flex w-full mt-4 justify-center font-medium text-base">
            <p>Already have an account?&nbsp;</p>
            <Link href="/" className="text-swell-30">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-16">
        <Button onClick={handleSubmit}>Sign Up</Button>
      </div>
    </div>
  );
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Register;
