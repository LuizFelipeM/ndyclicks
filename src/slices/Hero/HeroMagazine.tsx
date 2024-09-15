import { LinkButton } from "@/components/LinkButton";
import { RichText } from "@/components/RichText";
import { RichTextField, GroupField, Content, ImageField, isFilled } from "@prismicio/client";
import { Simplify } from "../../../prismicio-types";
import { HeroComponents } from "./HeroComponents";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { faBarcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HeroMagazineProps = {
  className?: string
  title: RichTextField
  text: RichTextField
  buttons: GroupField<Simplify<Content.HeroSliceDefaultPrimaryButtonsItem>>
  image: ImageField
  isTextLeft: boolean
  isTitleLeft?: boolean
}

export const HeroMagazine: React.FC<HeroMagazineProps> = ({ title, text, buttons, image, className, isTextLeft, isTitleLeft }) => {
  const margin = isTextLeft ? "mr-auto" : "ml-auto"

  return (
    <div className={
      clsx(
        "relative w-full h-screen bg-gray-100 flex flex-col justify-between p-6",
        className
      )
    }>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {isFilled.image(image) &&
          <PrismicNextImage
            field={image}
            className="w-full h-full object-cover"
          />}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-rich-black from-5%
            via-transparent via-30%
            to-rich-black to-95%
            opacity-35
          "
        />
      </div>

      {/* Magazine title at the top */}
      <div className={
        clsx(
          "relative z-10 mt-[20%] md:mt-[5%]",
          isTitleLeft || isTitleLeft === undefined ? "text-left" : "text-right"
        )
      }>
        <RichText
          field={title}
          components={HeroComponents}
        />
      </div>

      {/* Remaining content aligned to the right */}
      <div className={
        clsx(
          "relative z-10 flex flex-col items-end mt-auto mb-[45%] md:mb-[10%] max-w-[75%]",
          margin,
          isTextLeft ? "text-left" : "text-right"
        )
      }>
        <RichText
          field={text}
          components={HeroComponents}
        />

        <div className={
          clsx(
            "mt-6 flex gap-x-4",
            margin
          )
        }>
          {buttons?.map(({ text, link }, i) =>
            isFilled.keyText(text) &&
            isFilled.link(link) &&
            (
              <LinkButton
                key={i}
                href={link}
                className="font-bold"
              >
                {text}
              </LinkButton>
            ))}
        </div>
      </div>

      {/* Additional elements for magazine style */}
      <div className="absolute top-6 left-6 font-bold text-sm tracking-wider z-10">
        <p>Exclusive</p>
        <p>Fashion & Style</p>
      </div>

      <div className="absolute bottom-6 left-6 font-bold tracking-wider z-10">
        <FontAwesomeIcon icon={faBarcode} size="3x" />
      </div>
      <div className="absolute bottom-8 right-6 font-bold text-base tracking-wider z-10">
        <p>$5.99</p>
      </div>
    </div>
  );
};
