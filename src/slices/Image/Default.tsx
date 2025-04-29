import { ImageFullScreen } from "@/components/ImageFullScreen";
import { ImageField, NumberField } from "@prismicio/client";
import React from "react";

type DefaultProps = {
  image: ImageField;
  bottom?: NumberField;
};

export const Default: React.FC<DefaultProps> = ({ image, bottom }) => {
  return <ImageFullScreen image={image} bottom={bottom} />;
};
