import React, { FC } from "react";

import { ColumnProps } from "./interface";
import { ColumnContainer } from "./styled";

export const Column: FC<ColumnProps> = ({ children }) => {
  return (
    <ColumnContainer>{ children }</ColumnContainer>
  );
};
