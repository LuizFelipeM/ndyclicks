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
    <div className="relative bg-gray-100 p-6 rounded-lg shadow-lg">
      {isFilled.group(carousel) && (
        <HeroCarousel
          beforeHighlightedText={beforeHighlightedText}
          afterHighlightedText={afterHighlightedText}
          slides={carousel}
          ms={5000}
        />
      )}
      <div className="absolute bottom-4 left-4">
        {buttons?.map(
          ({ text, link }, i) =>
            isFilled.keyText(text) &&
            isFilled.link(link) && (
              <LinkButton key={i} href={link} className="font-bold">
                {text}
              </LinkButton>
            )
        )}
      </div>
      <div className="absolute bottom-4 right-4 text-blue-500"> Nandayara </div>
    </div>
  );
};
