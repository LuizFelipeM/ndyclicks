import { GroupField, isFilled } from "@prismicio/client";
import React from "react";
import {
  ImageSliceImagesInColumnsPrimaryImagesItem,
  Simplify,
} from "../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";

type ImagesInColumnsProps = {
  images: GroupField<Simplify<ImageSliceImagesInColumnsPrimaryImagesItem>>;
};

export const ImagesInColumns: React.FC<ImagesInColumnsProps> = ({ images }) => {
  if (!isFilled.group(images)) return;

  const sectionCount = Array(Math.ceil(images.length / 2)).fill(null);

  return sectionCount.map((_, index) => {
    const [imageIndex1, imageIndex2] = [2 * index, 2 * index + 1];

    return (
      <div
        key={index}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12 last:mb-0"
      >
        {images[imageIndex1] && isFilled.image(images[imageIndex1].image) && (
          <div
            className="
              relative z-10 overflow-hidden aspect-[6/7]
              rounded-tr-md rounded-bl-md rounded-tl-[80px] rounded-br-[80px]"
          >
            <PrismicNextImage
              field={images[imageIndex1].image}
              fill
              className="object-cover z-10"
            />
          </div>
        )}
        {images[imageIndex2] && isFilled.image(images[imageIndex2].image) && (
          <div
            className="
              relative z-10 overflow-hidden aspect-[6/7]
              rounded-tr-md rounded-bl-md rounded-tl-[80px] rounded-br-[80px]
              md:rounded-tl-md md:rounded-br-md md:rounded-tr-[80px] md:rounded-bl-[80px]"
          >
            <PrismicNextImage
              field={images[imageIndex2].image}
              fill
              className="object-cover z-10"
            />
          </div>
        )}
      </div>
    );
  });
};
