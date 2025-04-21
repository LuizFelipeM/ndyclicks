import { ImageFullScreen } from "@/components/ImageFullScreen";
import { ImageField } from "@prismicio/client";
import React from "react";

type DefaultProps = {
  image: ImageField;
};

export const Default: React.FC<DefaultProps> = ({ image }) => {
  return <ImageFullScreen image={image} />;
};
