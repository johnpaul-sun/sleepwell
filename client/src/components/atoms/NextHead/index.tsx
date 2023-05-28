import Head from "next/head";
import React, { FC, ReactNode } from "react";

import LogoIcon from "~/shared/icons/LogoIcon";

type Props = {
  title: string;
  children?: ReactNode;
  hasIcon?: boolean;
};

const NextHead: FC<Props> = (props): JSX.Element => {
  const { title, children, hasIcon = true } = props;

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>
      {hasIcon && (
        <div className="flex w-full justify-between mt-5">
          <LogoIcon />
          {children}
        </div>
      )}
    </>
  );
};

export default NextHead;
