import styled from "styled-components";

export const ResourceLinksItem = styled.li`
  display: block;
  font-family: var(--font-secondary);
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--color-silver-lining);
  padding: 0.5rem;
  transition: all 0.3s;

  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

export const ResourceLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
`;
