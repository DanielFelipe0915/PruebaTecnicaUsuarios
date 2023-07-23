import { styled } from "@mui/material";

export const CubeImageWrapper = styled("div")`
  width: 100%;
  padding-top: 100%;
  position: relative;
  & .image {
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Children = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
