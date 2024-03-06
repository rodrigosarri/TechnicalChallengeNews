import styled from "styled-components";
import { mediaQueries } from "src/utils";

const media = mediaQueries();

export const ColumnContainer = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 2rem;

  ${media.lg`
    max-width: 50%;
  `}
`;