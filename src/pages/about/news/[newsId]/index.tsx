import React, { memo } from "react";
import { AppHead } from "@/components/AppHead";
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";

type NewsDetailsProps = {
  news: {
    id: string;
    title: string;
  };
};

const NewsDetails = memo(({ news }: NewsDetailsProps) => {
  return (
    <>
      <AppHead title="NewsDetails" description="" />
      <div>NewsDetails</div>
      <div>{news.id}</div>
      <div>{news.title}</div>
    </>
  );
});
NewsDetails.displayName = "NewsDetails";

export default NewsDetails;

//specifichiamo a Next un array di possibili valori che la newsId può assumere
export async function getStaticPaths(): Promise<
  GetStaticPathsResult<{
    newsId: string;
  }>
> {
  //leggo dal db fake tutti gli id delle news

  const newsList = [
    {
      id: "1",
      title: "Titolo della news 1",
    },
    {
      id: "2",
      title: "Titolo della news 2",
    },
    {
      id: "3",
      title: "Titolo della news 3",
    },
  ];
  return {
    paths: newsList.map((news) => ({
      params: {
        newsId: news.id,
      },
    })),
    fallback: "blocking", //true, false
  };
}

export async function getStaticProps({
  params: { newsId },
}: GetStaticPropsContext<{ newsId: string }>): Promise<
  GetStaticPropsResult<NewsDetailsProps>
> {
  //Controllo se newsId è valido o esiste, se non esiste ritorno 404
  /* return {
    notFound: true,
  };
  
  */
  //Altrimenti leggo dal db fake la news con id = newsId
  const news = {
    id: newsId,
    title: "Titolo della news" + newsId,
  };
  return {
    props: {
      news,
    },
  };
}
