import React from "react";
interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const resolvePath = (src: string): string => {
  return `/static/${src}`;
};

const Image: React.FC<Props> = ({ src, alt, className }) => {
  const resolvedPath = resolvePath(src);
  return <img src={resolvedPath} alt={alt} className={className} />;
};

export default Image;
