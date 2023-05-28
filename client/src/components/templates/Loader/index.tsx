import React from "react";
import Image from "next/image";

import redirect from "~/shared/utils/redirect";
import NextHead from "~/components/atoms/NextHead";
import LoadingIcon from "~/shared/icons/LoadingIcon";

const Loader = ({ message, url }: { url: string; message?: string }) => {
  setTimeout(() => {
    redirect(url);
  }, 1500);

  return (
    <>
      <div className="absolute top-0">
        <NextHead key="404" title="SleepWell | Loading"></NextHead>
      </div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-5">
          <Image src="/images/Time.png" alt="time" width="330" height="270" />
          <div className="animate-spin ">
            <LoadingIcon />
          </div>
          <p className="text-center text-3xl font-semibold">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Loader;
