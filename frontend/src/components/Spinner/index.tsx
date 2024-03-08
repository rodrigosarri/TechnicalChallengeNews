import React, { FC } from "react";
import { SpinnerProps } from "./interface";
import { SpinnerContainer, SpinnerItem } from "./styled";

export const Spinner: FC<SpinnerProps> = ({ size, color }) => {
  return (
    <SpinnerContainer aria-label="loading">
      <SpinnerItem size={size} color={color} data-testid="spinner" />
    </SpinnerContainer>
  );
};
