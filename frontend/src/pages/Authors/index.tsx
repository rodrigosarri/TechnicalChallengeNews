import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PostItem } from "src/components/Post/interface";

import { Header, SectionGrid, Spinner } from "src/components";

import { QueryStringProps } from "src/services/interface";
import { getNews, getNewsAuthor } from "src/services";

export const Authors = () => {
  const [newsItem, setNewsItem] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { slug } = useParams();

  const fetchNews = async (): Promise<void> => {
    setIsLoading(true);
    const newsCategory = await getNewsAuthor({ slug: slug, limit: 1 });

    let newsOptions: QueryStringProps = { orderBy: "desc" };

    if (newsCategory) {
      const newsAuthorUuid = newsCategory[0].uuid;

      newsOptions = {
        ...newsOptions,
        newsAuthorUuid: newsAuthorUuid,
      };
    }

    const data = await getNews(newsOptions);
    setNewsItem(data);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Header />
      {!isLoading && newsItem.length > 0 && (
        <SectionGrid posts={newsItem} type="list" />
      )}
      {isLoading && <Spinner />}
    </>
  );
};
