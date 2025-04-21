import { ImageField, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

interface ImageFullScreenProps {
  image: ImageField;
}

export const ImageFullScreen: React.FC<ImageFullScreenProps> = ({ image }) => {
  return (
    isFilled.image(image) && (
      <div className="relative max-w-6xl w-[80vw] md:w-screen h-[50vh] mx-auto items-center overflow-hidden aspect-[6/7] rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]">
        <PrismicNextImage field={image} fill className="object-cover" />
      </div>
    )
  );
};
