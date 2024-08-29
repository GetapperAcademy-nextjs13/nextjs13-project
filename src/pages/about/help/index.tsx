import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import { GetServerSidePropsResult, GetServerSidePropsContext } from "next";
import { AppContext } from "next/app";

type HelpProps = {
  helpRequests: number;
};

const Help = memo(({ helpRequests }: HelpProps) => {
  return (
    <>
      <AppHead title="Help" description="" />
      <div>Help</div>
      <div>{helpRequests}</div>
    </>
  );
});
Help.displayName = "Help";

export default Help;

//viene eseguito ogni volta che viene fatta una richiesta al server, anche in fase di build
export async function getServerSideProps({}: GetServerSidePropsContext<{}>): Promise<
  GetServerSidePropsResult<HelpProps>
> {
  const helpRequests = Math.random();
  return {
    props: {
      helpRequests,
    },
  };
}
