import { ImageField, isFilled, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { ImQuotesLeft } from "react-icons/im";
import { RichText } from "./RichText";
import { PiTildeBold } from "react-icons/pi";
import { Card } from "./Card";

interface TestimonialCardProps {
  image: ImageField<never>;
  testimonial: RichTextField;
  author: RichTextField;
  isActive?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  testimonial,
  author,
  isActive = true,
}) => {
  return (
    <Card
      className="cursor-grab select-none pt-32 md:pt-32 mt-20"
      style={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
      }}
    >
      <div className="absolute z-50 -top-16 left-1/2 -translate-x-1/2 w-32 h-32">
        <div className="relative w-full h-full rounded-tr-md rounded-bl-md rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
          {isFilled.image(image) && (
            <PrismicNextImage field={image} fill className="object-cover" />
          )}
        </div>
      </div>

      <div
        className="
        absolute top-20 left-1/2 -translate-x-1/2
        text-hero-title text-white text-opacity-55"
      >
        <ImQuotesLeft size={40} />
      </div>

      {isFilled.richText(testimonial) && (
        <RichText
          field={testimonial}
          classNames={{ paragraph: "text-white mb-10" }}
        />
      )}
      <span className="flex items-center gap-2 justify-center">
        <PiTildeBold size={25} className="text-white" />{" "}
        {isFilled.richText(author) && (
          <RichText field={author} classNames={{ paragraph: "text-white" }} />
        )}
      </span>
    </Card>
  );
};
