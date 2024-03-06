import styled from "styled-components";

import { PostStyleProps } from "src/components/Post/interface";

export const PostCategoryContainer = styled.div<PostStyleProps>`
  display: flex;

  ${({ $highlight }) => $highlight &&
    `
    left: 1rem;
    position: absolute;
    top: 1rem;
  `}
`;

export const PostCategoryLink = styled.a`
  border-radius: 8px;
  color: var(--color-white);
  display: flex;
  font-family: var(--font-secondary);
  font-size: 1.1rem;
  font-weight: var(--weight-bold);
  letter-spacing: 0.1rem;
  line-height: 1.4rem;
  margin: 0 1rem 1rem 0;
  padding: 0.6rem 1.1rem 0.4rem;
  text-transform: uppercase;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;
  border: 0 none;

  &:hover {
    color: var(--color-white);
    filter: brightness(120%);
  }
`;