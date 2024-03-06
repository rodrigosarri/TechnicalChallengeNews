import React, { FC } from "react";

import { PostTitleProps } from "./interface";

import { PostTitleItem, PostTitleLink, PostTitleContainer } from "./styled";

export const PostTitle: FC<PostTitleProps> = ({
  highlight,
  label,
  onClick,
}) => {
  const handlerOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <PostTitleContainer>
      <PostTitleItem $highlight={highlight} data-testid="post-title-container" aria-label="postTitle">
        <PostTitleLink to="#" $highlight={highlight} onClick={handlerOnClick}>
          {label}
        </PostTitleLink>
      </PostTitleItem>
    </PostTitleContainer>
  );
};
