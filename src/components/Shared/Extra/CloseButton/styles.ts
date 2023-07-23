import { styled } from "@mui/material";

export interface Props {
  color?: string;
  size?: string;
}

export const CloseButtonContent = styled("button")<Props>`
  background-color: transparent;
  border: 0;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  padding: 0;
  position: relative;
  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  cursor: pointer;
`;
