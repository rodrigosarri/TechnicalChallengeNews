import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PostItem } from "src/components/Post/interface";

import { Header, SectionGrid, Spinner } from "src/components";

import { QueryStringProps } from "src/services/interface";
import { getNews, getNewsCategory } from "src/services";

export const Categories = () => {
  const [newsItem, setNewsItem] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { slug } = useParams();

  const fetchNews = async (): Promise<void> => {
    setIsLoading(true);
    const newsCategory = await getNewsCategory({ slug: slug, limit: 1 });

    let newsOptions: QueryStringProps = {orderBy: "desc"};

    if (newsCategory) {
      const newsCategoryUuid = newsCategory[0].uuid;

      newsOptions = {
        ...newsOptions,
        newsCategoryUuid: newsCategoryUuid,
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