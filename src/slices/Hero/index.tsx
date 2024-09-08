import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { HeroRightImage } from "./HeroRightImage";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const HeroVariation: React.FC<{ slice: HeroProps["slice"] }> = ({ slice }) => {
  switch (slice.variation) {
    case "left":
    case "default":
    case "right":
      return (
        <HeroRightImage
          text={slice.primary.text}
          carousel={slice.primary.carousel}
          buttons={slice.primary.buttons}
        />
      )
    // return <HeroWithoutImage text={slice.primary.text} buttons={slice.primary.buttons} />
    default:
      throw new Error("No variation found")
  }
}

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroVariation slice={slice} />
    </section>
  );
};

export default Hero;
