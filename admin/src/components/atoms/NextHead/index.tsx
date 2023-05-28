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
      {hasIcon && <LogoIcon className="mt-5" />}
      <Head>
        <title>{`${title}`}</title>
        {children}
      </Head>
    </>
  );
};

export default NextHead;
