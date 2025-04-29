import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { ImagesInColumns } from "./ImagesInColumns";
import { Default } from "./Default";

const VariationSelector: React.FC<{ slice: Content.ImageSlice }> = ({
  slice,
}) => {
  switch (slice.variation) {
    case "imagesInColumns":
      return <ImagesInColumns images={slice.primary.images} />;

    default:
      return (
        <Default
          image={slice.primary.image}
          bottom={slice.primary.change_image_position}
        />
      );
  }
};

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
      className="mb-10 px-4 md:px-8"
    >
      <VariationSelector slice={slice} />
    </section>
  );
};

export default Image;
