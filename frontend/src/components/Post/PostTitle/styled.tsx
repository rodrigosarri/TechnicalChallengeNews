import styled from "styled-components";
import { Link } from "react-router-dom";

import { PostStyleProps } from "src/components/Post/interface";

export const PostTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostTitleItem = styled.h3<PostStyleProps>`
  ${({ $highlight }) => !$highlight &&`
    margin: 0;
`}`;

export const PostTitleLink = styled(Link)<PostStyleProps>`
  background-image: linear-gradient(90deg, currentColor 0, currentColor);
  background-position: 0 95%;
  background-repeat: no-repeat;
  background-size: 0 2px;
  color: inherit;
  display: inline;
  font-size: 2.8rem;
  line-height: 1.4;
  padding: 0.1% 0;
  position: relative;
  transition: background-size 0.25s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  cursor: pointer;

  &:hover {
    background-size: 100% 2px;
  }

  ${({ $highlight }) =>
    !$highlight &&
    `
    font-size: 1.8rem;
  `}
`;