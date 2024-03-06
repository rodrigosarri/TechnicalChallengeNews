import React, { FC } from "react";

import { WrapperProps } from "./interface";
import { WrapperContainer } from "./styled";

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <WrapperContainer data-testid="wrapper-container">{ children }</WrapperContainer>
  );
};