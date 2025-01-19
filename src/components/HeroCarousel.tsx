"use client";
import {
  Content,
  GroupField,
  ImageField,
  isFilled,
  RichTextField,
} from "@prismicio/client";
import React, {
  createRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Simplify } from "../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { RichText } from "./RichText";
import { JSXMapSerializer } from "@prismicio/react";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
import { v4 as uuid } from "uuid";
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

// const HighlightedRichTextComponents: JSXMapSerializer = {
//   strong: ({ children }) => (
//     <span className="text-rose text-shadow-md font-serif">
//       <s>{children}</s>
//     </span>
//   ),
//   paragraph: ({ children }) => (
//     <span className="text-rose text-shadow-md font-serif">{children}</span>
//   ),
//   em: ({ children }) => (
//     <span className="text-rose text-shadow-md font-serif">
//       <i>{children}</i>
//     </span>
//   ),
//   heading1: ({ children }) => (
//     <h1
//       className="
//         text-rose text-shadow-md font-serif font-extrabold
//         tracking-tighter leading-none md:leading-tight
//         text-[3rem]
//       "
//     >
//       {children}
//     </h1>
//   ),
// };

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  beforeHighlightedText,
  afterHighlightedText,
  slides,
  // ms = 3000,
  ms = 200,
}) => {
  const [index, setIndex] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, ms);
    return () => clearInterval(interval);
  });

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="relative w-[600px] h-full overflow-x-hidden flex">
        {/* absolute */}
        <div className=" top-4 left-4 text-white">
          <h1
            className="
            text-white-smoke font-Roboto font-semibold
              tracking-tighter leading-none md:leading-tight
              text-[3rem] w-96
            "
          >
            <RichText
              field={beforeHighlightedText}
              components={DefaultRichTextComponents}
            />

            <br />
            <div className="h-16 w-fit overflow-hidden">
              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={index}
                  nodeRef={nodeRef}
                  classNames="top-text"
                  timeout={500}
                >
                  <span
                    ref={nodeRef}
                    className="block text-rose text-shadow-md font-serif mr-4"
                  >
                    <RichText
                      field={slides[index].highlighted_text}
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

        {/* {slides.map(
          ({ image }, i) =>
            isFilled.image(image) && (
              <div
                key={i}
                style={{ transform: `translateX(-${current * 100}%)` }}
                className="w-full h-full inline-block flex-none"
              >
                <PrismicNextImage
                  field={image}
                  className={clsx(
                    "w-full max-w-[600px] m-auto flex items-center transition-all transform-gpu",
                    current === i ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            )
        )} */}
      </div>

      {/* <div className="absolute inset-0 flex">
        <div className="flex items-center justify-start w-1/2">
          <button
            className="bg-rich-black hover:text-rose shadow-white-smoke hover:shadow-lg rounded-full w-12 h-12 -ml-6"
            onClick={previous}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <button
            className="bg-rich-black hover:text-rose hover:shadow rounded-full w-12 h-12 -mr-6"
            onClick={next}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="absolute w-full flex items-center justify-center px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            className={clsx(
              "flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-savoy-blue hover:shadow-lg cursor-pointer",
              current === i ? "bg-white-smoke" : "bg-dim-gray"
            )}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div> */}
    </div>
  );
};
