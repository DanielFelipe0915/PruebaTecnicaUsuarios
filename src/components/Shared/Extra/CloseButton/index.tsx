import { Tooltip } from "@mui/material";
import React from "react";
import { Callback } from "../../Types/types";
import { CloseButtonContent, Props as StyleProps } from "./styles";

interface Props extends StyleProps {
  id?: string;
  title?: string;
  className?: string;
  onClick?: Callback;
}

const CloseButton: React.FC<Props> = ({
  id,
  title = "Cerrar",
  color = "#FFFFFF",
  size = "2rem",
  className,
  onClick,
}) => {
  return (
    <Tooltip title={title}>
      <CloseButtonContent
        id={id}
        type="button"
        className={className}
        color={color}
        size={size}
        onClick={onClick}
      >
        <span>&times;</span>
      </CloseButtonContent>
    </Tooltip>
  );
};

export default CloseButton;
