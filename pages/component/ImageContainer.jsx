import React from "react";
import Image from "next/image";

const ImageContainer = (props) => {
  const { classes = "w-40 h-40", alt = "alviro" } = props;
  return (
    <Image
      className={classes}
      src={props.src}
      alt={alt}
      width={500}
      height={500}
    />
  );
};

export default ImageContainer;
