import React from "react";
import Image from "../../Image";
import { Children, CubeImageWrapper } from "./styles";

interface Props {
  src: string;
  className?: string;
  children?: any;
}

const CubeImage: React.FC<Props> = ({ src, className, children }) => {
  return (
    <CubeImageWrapper className={className}>
      <Image src={src} className="image" alt="Cube-Image" />
      <Children>{children}</Children>
    </CubeImageWrapper>
  );
};

export default CubeImage;
