import {
  GroupField,
  Content,
  RichTextField,
  isFilled,
} from "@prismicio/client";
import React from "react";
import { Simplify } from "../../../prismicio-types";
import { RichText } from "@/components/RichText";
import { LinkButton } from "@/components/LinkButton";
import { HeroComponents } from "./HeroComponents";
import { HeroCarousel } from "@/components/HeroCarousel";

type HeroProductsProps = {
  beforeHighlightedText: RichTextField;
  afterHighlightedText: RichTextField;
  carousel: GroupField<Simplify<Content.HeroSliceProductsPrimaryCarouselItem>>;
  buttons: GroupField<Simplify<Content.HeroSliceDefaultPrimaryButtonsItem>>;
};

export const HeroProducts: React.FC<HeroProductsProps> = ({
  beforeHighlightedText,
  afterHighlightedText,
  buttons,
  carousel,
}) => {
  return (
    <div className="relative bg-gray-100">
      {isFilled.group(carousel) && (
        <HeroCarousel
          beforeHighlightedText={beforeHighlightedText}
          afterHighlightedText={afterHighlightedText}
          slides={carousel}
          ms={5000}
        />
      )}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        {buttons?.map(
          ({ text, link }, i) =>
            isFilled.keyText(text) &&
            isFilled.link(link) && (
              <LinkButton key={i} href={link} className="font-bold shadow-md">
                {text}
              </LinkButton>
            )
        )}
      </div>
      <span className="absolute bottom-4 right-4 text-primary text-3xl font-bold font-serif md z-10">
        Nandayara
      </span>
    </div>
  );
};
