import styled from "styled-components";
import { mediaQueries } from "src/utils";

const media = mediaQueries();

export const MenuContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${media.lg`
    flex-wrap: nowrap;
  `}
`;

export const MenuItem = styled.li`
  color: #fff;
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: var(--weight-medium);
  line-height: 2.4rem;
  margin-right: 2rem;
  padding: 3.1rem 0.5rem 3rem;
  position: relative;

  a {
    color: var(--color-night-sky);
    position: relative;

    &:before {
      background-color: currentColor;
      bottom: -4px;
      content: "";
      height: 0.2rem;
      left: 0;
      position: absolute;
      transition: all 0.5s;
      width: 0;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;

export const MenuNavigation = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
  transition: opacity 0.2s;
  width: 100%;
`;
