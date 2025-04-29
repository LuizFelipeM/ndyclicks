import { ImageField, isFilled, NumberField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

interface ImageFullScreenProps {
  image: ImageField;
  bottom?: NumberField;
}

export const ImageFullScreen: React.FC<ImageFullScreenProps> = ({
  image,
  bottom,
}) => {
  return (
    isFilled.image(image) && (
      <div className="relative max-w-6xl w-[80vw] md:w-screen h-[50vh] mx-auto items-center overflow-hidden aspect-[6/7] rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]">
        <PrismicNextImage
          field={image}
          fill
          className={clsx(
            "object-cover",
            isFilled.number(bottom) && `h-auto bottom-[${bottom}px]`
          )}
        />
      </div>
    )
  );
};
