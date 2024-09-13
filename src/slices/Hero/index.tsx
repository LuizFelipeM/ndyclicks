import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { HeroDefault } from "./HeroDefault";
import "./Hero.css"
import { HeroMagazine } from "./HeroMagazine";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const HeroVariation: React.FC<{ slice: HeroProps["slice"] }> = ({ slice }) => {
  switch (slice.variation) {
    case "default":
      return (
        <HeroDefault
          title={slice.primary.title}
          text={slice.primary.text}
          carousel={slice.primary.carousel}
          buttons={slice.primary.buttons}
        />
      )
    case "magazineMobile":
      return (
        <>
          <HeroDefault
            className="hidden md:block"
            title={slice.primary.title}
            text={slice.primary.text}
            carousel={slice.primary.carousel}
            buttons={slice.primary.buttons}
          />
          <HeroMagazine
            className="md:hidden"
            title={slice.primary.title}
            text={slice.primary.text}
            buttons={slice.primary.buttons}
            image={slice.primary.mobile_image}
          />
        </>
      )
    case "magazineMobileAndDesktop":
      return (
        <HeroMagazine
          title={slice.primary.title}
          text={slice.primary.text}
          buttons={slice.primary.buttons}
          image={slice.primary.image}
        />
      )
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
      className="mb-6"
    >
      <HeroVariation slice={slice} />
    </section>
  );
};

export default Hero;
