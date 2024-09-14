import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ImagesInColumns } from "./ImagesInColumns";
import { ImagesInMasonry } from "./ImagesInMasonry";

const VariationSelector: React.FC<{ slice: Content.ImageSlice }> = ({ slice }) => {
  switch (slice.variation) {
    case "imagesInColumns":
      return (
        isFilled.group(slice.primary.images) &&
        <ImagesInColumns
          images={slice.primary.images}
          cols={isFilled.number(slice.primary.col_quantity) ? slice.primary.col_quantity : undefined}
        />
      )

    case "imagesInMasonry":
      return (
        isFilled.group(slice.primary.images) &&
        <ImagesInMasonry
          images={slice.primary.images}
          colsWidth={slice.primary.col_width}
        />
      )

    default:
      return isFilled.image(slice.primary.image) && <PrismicNextImage field={slice.primary.image} />
  }
}

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <VariationSelector slice={slice} />
    </section>
  );
};

export default Image;
