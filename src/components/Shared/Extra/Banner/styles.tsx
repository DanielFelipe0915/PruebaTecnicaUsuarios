import { styled } from "@mui/material";
import { getMaxBreakPoint } from "../../../../utils/StyledUtil";
import { resolvePath } from "../../Image";

export type aling = "center" | "left" | "right";

export interface BannerWrapperProps {
  srcBackground: string;
  textColor?: string;
  textMobileColor?: string;
  align?: aling;
}

export const BannerWrapper = styled("article")<BannerWrapperProps>`
  width: 100%;
  display: block;
  background-image: url(${({ srcBackground }) => resolvePath(srcBackground)});
  background-size: cover;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}) {
    background-position: center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(0 0 0 / 33%);
    }
  }
  background-repeat: no-repeat;
  padding-top: 26%;
  @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
    padding-top: 100%;
  }
  position: relative;
  & .banner-container {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 25px;
      & .btn-primary  {
        width: 80%;
      }
    }
    & .title,
    & .description {
      color: ${({ textColor }) => (textColor ? textColor : "#FFFFFF")};
      text-align: center;
      font-weight: 300;
      @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
        color: ${({ textColor, textMobileColor }) =>
          textMobileColor
            ? textMobileColor
            : textColor
            ? textColor
            : "#FFFFFF"};
      }
    }
    & .title {
      font-size: 1.88em;
      @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
        font-size: 1.6em;
        display: block;
        padding-bottom: 15px;
      }
    }
    & .description {
      font-size: 1.2em;
      @media (max-width: ${({ theme }) => getMaxBreakPoint(theme, "sm")}) {
        font-size: 1.1em;
      }
    }
    & .btn-primary {
      margin-top: 3rem;
    }
  }
`;
