import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PostItem } from "src/components/Post/interface";

import { NewsImage } from "./styled";

import { Header, Wrapper, PostMeta } from "src/components";

import { selectNews } from "src/redux/news/slice";

import { formatDate } from "src/utils";

import { getNews } from "src/services";


export const News = () => {
  const [news, setNews] = useState<PostItem>();
  const allNews = useSelector(selectNews);

  const { slug } = useParams();

  const reduxNews = allNews.find((news) => news.slug === slug);

  const fetchNews = async (): Promise<void> => {
    const data = await getNews({slug: slug, limit: 1});
    setNews(data[0]);
  };

  useEffect(() => {
    if (!reduxNews) {
      fetchNews();
    } else {
      setNews(reduxNews);
    }
  }, [slug, reduxNews]);

  return (
    <>
      <Header />
      {news && (
        <Wrapper>
          <h2>{news.title}</h2>
          <NewsImage src={news.image} alt={news.title} title={news.title} />
          <p>{ news.description }</p>
          <PostMeta
            highlight={true}
            date={formatDate(news.createdAt)}
            author={news.newsAuthor}
            views={news.newsMetadata?.views}
            shares={news.newsMetadata?.shares}
          />
        </Wrapper>
      )}
    </>
  );
};
