import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { PostItem } from "src/components/Post/interface";

import { Header, SectionGrid } from "src/components";

import { addMultipleNewsItems } from "src/redux/news/slice";
import { getNews } from "src/services";

export const Home = () => {
  const [newsItem, setNewsItem] = useState<PostItem[]>([]);
  const [othersNewsItem, setOthersNewsItem] = useState<PostItem[]>([]);

  const dispatch = useDispatch();

  const fetchNews = async (): Promise<void> => {
    const data = await getNews({orderBy: "desc", limit: 5});
    setNewsItem(data);

    const others = await getNews({orderBy: "desc", offset: 5});
    setOthersNewsItem(others);

    const uniqueItems = Array.from(new Map([...data, ...others].map(item => [item.uuid, item])).values());
    dispatch(addMultipleNewsItems(uniqueItems));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Header />
      <SectionGrid posts={newsItem} type="highlight" />
      <SectionGrid posts={othersNewsItem} type="list" />
    </>
  );
};