import styled from "styled-components";

export const PostMetaContainer = styled.div`
  display: flex;
`;

export const PostMetaItem = styled.li`
  position: relative;
  padding-right: 20px;

  &:after {
    content: "•";
    color: #7b7b7b;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  &:last-child::after {
    content: none;
  }
`;

export const PostMetaList = styled.ul`
  align-items: center;
  color: var(--color-pewter-chime);
  display: flex;
  flex-wrap: wrap;
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: var(--weight-light);
  gap: 16px;
  line-height: 2.1rem;
  margin: 0;
`;