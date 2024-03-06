import React, { FC } from "react";
import { Link } from "react-router-dom";

import { PostCategoryProps } from "./interface";

import { PostMetaContainer, PostMetaList, PostMetaItem } from "./styled";

export const PostMeta: FC<PostCategoryProps> = ({
  highlight,
  author,
  date,
  views,
  shares,
}) => {
  return (
    <PostMetaContainer>
      <PostMetaList>
        <PostMetaItem>
          <strong>Autor: </strong>
          <Link to={`/autor/${author.url}`}>{author.name}</Link>
        </PostMetaItem>
        {date && <PostMetaItem>{date}</PostMetaItem>}
        {highlight && (
          <>
            {views && views > 0 && (
              <PostMetaItem>
                {views} <i data-testid="views" className="fa-solid fa-chart-line"></i>
              </PostMetaItem>
            )}
            {shares && shares > 0 && (
              <PostMetaItem>
                {shares} <i data-testid="shares" className="fa-solid fa-share"></i>
              </PostMetaItem>
            )}
          </>
        )}
      </PostMetaList>
    </PostMetaContainer>
  );
};
