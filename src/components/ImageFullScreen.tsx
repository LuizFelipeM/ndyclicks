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
}) =>
  isFilled.image(image) && (
    <div className="relative max-w-6xl w-[80vw] md:w-screen h-[50vh] mx-auto items-center overflow-hidden aspect-[6/7] rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]">
      <PrismicNextImage
        field={image}
        className={clsx(
          "object-cover absolute h-full w-full inset-0 mt-0",
          {
            [`md:h-[unset] md:mt-[-${bottom}px]`]:
              isFilled.number(bottom),
          }
        )}
      />
    </div>
  );
