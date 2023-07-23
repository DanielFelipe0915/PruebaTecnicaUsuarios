import { Theme } from "@mui/material";

type breackpoint = "xs" | "sm" | "md" | "lg" | "xl";

type resultType = "px" | "value";

export const getMaxBreakPoint = (theme: Theme, breackpoint: breackpoint) => {
  return getMaxBreakPointFn(theme, breackpoint, "px");
};

export const getMaxBreakPointServer = (
  theme: Theme,
  breackpoint: breackpoint
) => {
  return getMaxBreakPointFn(theme, breackpoint, "value");
};

const getMaxBreakPointFn = (
  theme: Theme,
  breackpoint: breackpoint,
  resultType: resultType
): string | number => {
  let result = theme.breakpoints.values.xl * 5;
  switch (breackpoint) {
    case "xs":
      result = theme.breakpoints.values.sm - 1;
      break;
    case "sm":
      result = theme.breakpoints.values.md - 1;
      break;
    case "md":
      result = theme.breakpoints.values.lg - 1;
      break;
    case "lg":
      result = theme.breakpoints.values.xl - 1;
      break;
  }
  return resultType === "px" ? `${result}px` : result;
};

export const getMinBreackPoint = (
  theme: Theme,
  breackpoint: breackpoint,
  resultType: resultType
) => {
  const result = theme.breakpoints.values[breackpoint];
  return resultType === "px" ? `${result}px` : result;
};
