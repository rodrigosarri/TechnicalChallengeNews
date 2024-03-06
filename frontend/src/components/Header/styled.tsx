import styled from "styled-components";
import { mediaQueries } from "src/utils";

const media = mediaQueries();

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderContainerCol = styled.div`
  display: flex;
  padding-left: 15px;
`;

export const HeaderContainerTop = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: 0;
  width: 100%;
`;

export const HeaderCurrentDate = styled.div`
  color: var(--color-silver-lining);
  display: block;
  font-family: var(--font-secondary);
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 0.5rem;
  transition: all 0.3s;
`;

export const HeaderNav = styled.nav`
  align-items: center;
  border-bottom: 1px solid var(--color-morning-mist);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  position: relative;
  z-index: 999;
`;

export const HeaderTop = styled.div`
  background-color: var(--color-night-sky);
  display: none;
  padding: 0.5rem 0;
  position: relative;
  z-index: 999;

  ${media.lg`
    display: flex;
  `}
`;
