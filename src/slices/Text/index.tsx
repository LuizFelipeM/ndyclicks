import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { Default } from "./Default";
import { TextAndImage } from "./TextAndImage";
import { TextAndHeader } from "./TextAndHeader";
import { TextWithHeaderAndImage } from "./TextWithHeaderImage";

const VariationSelector: React.FC<{ slice: Content.TextSlice }> = ({ slice }) => {
  switch (slice.variation) {
    case "textAndImage":
      return (
        <TextAndImage
          text={slice.primary.text}
          image={slice.primary.image}
          isTextLeft={slice.primary.is_text_left}
        />
      )

    case "textAndHeader":
      return (
        <TextAndHeader
          text={slice.primary.text}
          header={slice.primary.header}
          isTextLeft={slice.primary.is_text_left}
        />
      )

    case "textWithHeaderAndImage":
      return (
        <TextWithHeaderAndImage
          text={slice.primary.text}
          header={slice.primary.header}
          image={slice.primary.image}
          isTextLeft={slice.primary.is_text_left}
        />
      )

    default:
      return <Default text={slice.primary.text} />
  }
}

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-4 mb-4"
    >
      <VariationSelector slice={slice} />
    </section>
  );
};

export default Text;
