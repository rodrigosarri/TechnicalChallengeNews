import styled from "styled-components";

import { PostStyleProps } from "./interface";

export const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const PostContainer = styled.div<PostStyleProps>`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;

  ${({ $highlight }) =>
    $highlight &&
    `
    flex-direction: column;
  `}
`;

export const PostImage = styled.img`
  display: flex;
  object-fit: cover;
  width: 100%;
`;

export const PostImageContainer = styled.figure<PostStyleProps>`
  display: flex;

  ${({ $highlight }) =>
    !$highlight &&
    `
    max-height: 150px;
    max-width: 150px;
    overflow: hidden;
  `}
`;

export const PostViewMoreButton = styled.button`
  font-family: var(--font-primary);
  font-size: 1.5rem;
  display: flex;
  margin-left: auto;
  border: 0 none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  background-color: var(--color-morning-mist);

  &:hover {
    color: var(--color-night-sky);
    background-color: var(--color-silver-lining);
  }
`;