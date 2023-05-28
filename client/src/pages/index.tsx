import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { setCookie } from "cookies-next";

import AuthApi from "~/api/user/AuthApi";
import Input from "~/components/atoms/Input";
import redirect from "~/shared/utils/redirect";
import Button from "~/components/atoms/Button";
import NextHead from "~/components/atoms/NextHead";
import { setBearerToken } from "~/api/instance";

const Login: NextPage = (): JSX.Element => {
  const initialParams = {
    email: "",
    password: "",
  };

  const [params, setParams] = useState(initialParams);

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.promise(
      AuthApi.login(params).then((res) => {
        const token = res.data.token;
        const user = res.data.user;
        
        setBearerToken(token);
        setCookie("token", token);
        user.full_name ? redirect("/checklist") : redirect("/welcome");
      }),
      {
        loading: "Loading",
        success: (data) => "Successfully logged in",
        error: (err) => `${err.response.data.message}`,
      }
    );
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="pb-10">
        <NextHead key="login" title="SleepWell | Login" />
        <div className="relative flex justify-center">
          <Image
            priority
            src="/images/Login.png"
            alt="login"
            width="400"
            height="400"
            className="w-[235px] h-[225px]"
          />
          <p className="absolute bottom-0 text-3xl font-semibold">
            Welcome Back!
          </p>
        </div>
        <div className="py-6">
          <Input
            onChange={handleChange}
            name="email"
            label="Email address"
            placeholder="johndoe@gmail.com"
          ></Input>
          <Input
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••••"
          ></Input>
          <div className="flex w-full mt-4 justify-center font-medium text-base">
            <p>Don&#39;t have an account yet?&nbsp;</p>
            <Link href="/register" className="text-swell-30">
              Register
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-16">
        <Button onClick={handleSubmit}>Login</Button>
      </div>
    </div>
  );
};

// export { UserSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
export default Login;
