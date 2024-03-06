import styled from "styled-components";
import { mediaQueries } from "src/utils";

const media = mediaQueries();

export const WrapperContainer = styled.div`
  width: 100%;
  padding-right: calc(1.5rem * 0.5);
  padding-left: calc(1.5rem * 0.5);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-wrap: inherit;
  justify-content: space-between;
  position: static;
  flex-wrap: wrap;

  ${media.sm`
    max-width: 540px;
  `}

  ${media.md`
    max-width: 720px;
  `}

  ${media.lg`
    max-width: 960px;
  `}

  ${media.xl`
    max-width: 1140px;
  `}

  ${media.xxl`
    max-width: 1320px;
  `}

  ${media.xxxl`
    max-width: 1260px;
  `}
`;
