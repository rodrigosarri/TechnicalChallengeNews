import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./interface";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const SpinnerItem = styled.div<SpinnerProps>`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ color }) => color || "#3498db"};
  border-radius: 50%;
  width: ${({ size }) => size || 40}px;
  height: ${({ size }) => size || 40}px;
  animation: ${spin} 1s linear infinite;
`;
