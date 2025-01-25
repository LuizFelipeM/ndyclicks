"use client";
import {
  Content,
  GroupField,
  ImageField,
  isFilled,
  RichTextField,
} from "@prismicio/client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Simplify } from "../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "./RichText";
import { JSXMapSerializer } from "@prismicio/react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { v4 as uuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import "./HeroCarousel.css";

type HeroCarouselProps = {
  beforeHighlightedText: RichTextField;
  afterHighlightedText: RichTextField;
  slides: GroupField<Simplify<Content.HeroSliceProductsPrimaryCarouselItem>>;
  ms?: number;
};

const DefaultRichTextComponents: JSXMapSerializer = {
  strong: ({ children }) => <s>{children}</s>,
  paragraph: ({ children }) => <>{children}</>,
  em: ({ children }) => <i>{children}</i>,
};

interface MappedSlides<T> {
  key: string;
  value: T;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  beforeHighlightedText,
  afterHighlightedText,
  slides,
  ms = 200,
}) => {
  const [index, setIndex] = useState(0);

  const topTextRef = useRef<HTMLSpanElement>(null);

  const [highlightedTexts, images] = useMemo(
    () =>
      slides
        .filter(
          (slide) =>
            isFilled.richText(slide?.highlighted_text) &&
            isFilled.image(slide?.image)
        )
        .reduce<
          [MappedSlides<RichTextField>[], MappedSlides<ImageField<never>>[]]
        >(
          (acc, { highlighted_text, image }) => [
            [...acc[0], { key: uuid(), value: highlighted_text }],
            [...acc[1], { key: uuid(), value: image }],
          ],
          [[], []]
        ),
    [slides]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, ms);
    return () => clearInterval(interval);
  });

  return (
    <div className="relative h-screen w-full overflow-x-hidden">
      <div
        className="
          absolute inset-0 z-10
          h-1/3 w-full p-4
          bg-gradient-to-b from-rich-black to-transparent
        "
      >
        <h1
          className="
            text-white-smoke font-Roboto font-semibold
              tracking-tighter leading-none md:leading-tight
              text-[2.3rem] md:text-[3rem]
              w-96
            "
        >
          <RichText
            field={beforeHighlightedText}
            components={DefaultRichTextComponents}
          />

          <br />
          <div className="h-[2.6rem] md:h-16 w-fit overflow-hidden">
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={highlightedTexts[index].key}
                nodeRef={topTextRef}
                classNames="top-text"
                timeout={350}
              >
                <span
                  ref={topTextRef}
                  className="block text-rose text-shadow-md font-serif mr-4"
                >
                  <RichText
                    field={highlightedTexts[index].value}
                    components={DefaultRichTextComponents}
                  />
                </span>
              </CSSTransition>
            </SwitchTransition>{" "}
          </div>

          <RichText
            field={afterHighlightedText}
            components={DefaultRichTextComponents}
          />
        </h1>
      </div>

      <AnimatePresence>
        <motion.div
          key={images[index].key}
          className="absolute inset-0 w-full h-full max-h-svh overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.35 }}
        >
          <PrismicNextImage
            field={images[index].value}
            className="object-cover w-full h-full absolute top-0 left-0"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
