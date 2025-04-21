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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-12 last:mb-0">
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
              rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]"
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

  // return (
  //   <div
  //     style={{ "--cols": cols }}
  //     className="my-3 grid gap-8 md:gap-x-8 md:gap-y-4 images-grid"
  //   >
  //     {isFilled.group(images) &&
  //       images.map(({ image }, i) => (
  //         <div
  //           key={i}
  //           style={{ height: `${imagesHeight}px` }}
  //           className="relative w-full rounded-lg"
  //         >
  //           <PrismicImage
  //             field={image}
  //             className="absolute inset-0 w-auto h-full m-auto rounded-lg"
  //           />
  //         </div>
  //       ))}
  //   </div>
  // );
};
