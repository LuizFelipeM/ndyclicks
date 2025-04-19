import { Content, isFilled } from "@prismicio/client";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import React from "react";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="font-abhaya font-extrabold text-hero-title text-white mb-4">
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p
      className="
            flex items-center gap-2
            font-abhaya text-title text-white
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-direita.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-esquerda-BRANCO.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
    >
      {children}
    </p>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: React.FC<HeroProps> = ({ slice }): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-6"
    >
      <section className="overflow-hidden relative h-[73vh]">
        <div className="absolute inset-0 w-full h-full">
          {isFilled.image(slice.primary.background_image) && (
            <PrismicNextImage
              field={slice.primary.background_image}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="absolute inset-0 w-full h-full bg-[#676767] bg-opacity-35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {isFilled.richText(slice.primary.title) && (
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
          )}

          {isFilled.richText(slice.primary.subtitle) && (
            <PrismicRichText
              field={slice.primary.subtitle}
              components={components}
            />
          )}
        </div>

        <div className="w-2/6 h-4/6 absolute -bottom-[45%] left-1/2 -translate-x-1/2 ">
          {isFilled.image(slice.primary.left_card) && (
            <div className="w-[21rem] h-[32rem] p-3 z-10 absolute left-[28%] 2xl:left-1/3 -translate-x-1/2 border-[14px] border-white shadow-md -rotate-[22deg]">
              <PrismicNextImage
                field={slice.primary.left_card}
                fill
                className="object-cover"
              />
            </div>
          )}
          {isFilled.image(slice.primary.right_card) && (
            <div className="w-[21rem] h-[32rem] p-3 z-20 absolute right-[28%] 2xl:right-1/3 translate-x-1/2 border-[14px] border-white shadow-md rotate-[22deg]">
              <PrismicNextImage
                field={slice.primary.right_card}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default Hero;
