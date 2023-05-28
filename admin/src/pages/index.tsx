/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import Head from "next/head";
import { NextPage } from "next";
import { toast, Toaster } from "react-hot-toast";
import { setCookie } from "cookies-next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import AuthApi from "~/api/admin/AuthApi";
import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import LogoIcon from "~/shared/icons/LogoIcon";
import redirect from "~/shared/utils/redirect";
import { setBearerToken } from "~/api/instance";

export default function Home() {
  const initialParams = {
    email: "super@admin.com",
    password: "",
  };

  const [params, setParams] = useState(initialParams);

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => { 
    toast.promise(
      AuthApi.login(params)
        .then((res) => { 
          const token = res.data.token;
          setBearerToken(token);
          setCookie("token", token);
          redirect("/dashboard");
        }) ,
      {
        loading: "Loading",
        success: (data) => `Logged in successfully!`,
        error: (err) => `${err?.response?.data?.message}`,
      }
    );
  };

  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>Admin | Login</title>
      </Head>
      <div className="flex flex-col h-screen w-full justify-center sm:w-80 sm:h-full sm:mt-32">
        <div className="space-y-14">
          <div className="flex flex-col items-center space-y-8">
            <img src="/images/logo.png" className="mr-[20px]"/>
            <h1 className="font-semibold text-4xl">Admin Login</h1>
          </div>
          <div>
            <Input
              onChange={handleChange}
              name="email"
              label="Email address"
              placeholder="super@admin.com"
              defaultValue="super@admin.com"
            ></Input>
            <Input
              onChange={handleChange}
              name="password"
              label="Password"
              type="password"
              placeholder="••••••••••"
            ></Input>
          </div>
          <div className="pb-16">
            <Button onClick={handleSubmit}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AdminSignInOutAuthCheck as getServerSideProps } from "~/utils/getServerSideProps";
