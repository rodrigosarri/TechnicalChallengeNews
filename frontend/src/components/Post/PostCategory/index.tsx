import React, { FC } from "react";

import { PostCategoryProps } from "./interface";

import { PostCategoryContainer, PostCategoryLink } from "./styled";

export const PostCategory: FC<PostCategoryProps> = ({
  highlight = false,
  label,
  url,
  backgroundColor,
}) => {
  return (
    <PostCategoryContainer $highlight={highlight} data-testid="post-category-container">
      <PostCategoryLink style={{ backgroundColor }} href={`/categoria/${url}`}>
        {label}
      </PostCategoryLink>
    </PostCategoryContainer>
  );
};
