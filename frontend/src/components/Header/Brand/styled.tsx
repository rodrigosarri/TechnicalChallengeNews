import styled from "styled-components";
import { mediaQueries } from "src/utils";

const media = mediaQueries();

export const BrandContainer = styled.div`
  display: flex;
  padding-right: 2rem;
  padding-top: 2rem;

  ${media.lg`
    padding-top: 0;
  `}
`;