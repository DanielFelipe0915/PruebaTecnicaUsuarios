import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { aling, BannerWrapper, BannerWrapperProps } from "./styles";

interface Props extends BannerWrapperProps {
  title?: any;
  description?: any;
  href?: string;
  onClick?: any;
  textColor?: string;
  textMobileColor?: string;
  renderButton?: boolean;
  align?: aling;
  className?: string;
}

const Banner: React.FC<Props> = ({
  srcBackground,
  title,
  description,
  renderButton,
  href,
  textColor,
  textMobileColor,
  onClick,
  align,
  className,
}) => {
  const renderButtonFn = () => {
    return (
      <Button
        variant="contained"
        size="large"
        color="primary"
        className="btn-primary"
        onClick={onClick}
      >
        Compra colección verde
      </Button>
    );
  };

  const getStyles = (): Object => {
    switch (align) {
      case "center":
        return {
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      case "right":
        return {
          left: "unset",
          right: "10%",
        };
    }
    return {};
  };

  return (
    <BannerWrapper
      className={className}
      textColor={textColor}
      textMobileColor={textMobileColor}
      align={align}
      srcBackground={srcBackground}
    >
      <div className="banner-container" style={getStyles()}>
        {title && <h2 className="title">{title}</h2>}
        {description && <p className="description">{description}</p>}
        {href && <Link href={href}>{renderButtonFn()}</Link>}
        {!href && renderButton && renderButtonFn()}
      </div>
    </BannerWrapper>
  );
};

export default Banner;
