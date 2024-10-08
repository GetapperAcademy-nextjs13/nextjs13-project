import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

type ExampleMultipleParamsProps = {};

const ExampleMultipleParams = memo(({}: ExampleMultipleParamsProps) => {
  return (
    <>
      <AppHead title="ExampleMultipleParams" description="" />
    </>
  );
});
ExampleMultipleParams.displayName = "ExampleMultipleParams";

export default ExampleMultipleParams;

export async function getStaticPaths(): Promise<GetStaticPathsResult<{}>> {
  return {
    paths: [
      {
        params: {
          params: ["4", "latest", "sortByDate"],
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps({
  params: { params },
}: GetStaticPropsContext<{ params: string[] }>): Promise<
  GetStaticPropsResult<ExampleMultipleParamsProps>
> {
  const newsId = params[0];
  const newsType = params[1];
  const newsSort = params[2];
  return {
    props: {
      newsId,
      newsType,
      newsSort,
    },
    revalidate: 100,
  };
}
