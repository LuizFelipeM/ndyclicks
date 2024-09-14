import { RichText } from "@/components/RichText";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { Testimonial } from "./Testimonial";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full bg-gray-100 py-16 px-8"
    >
      <div className="text-center mb-12">
        <RichText field={slice.primary.text} />
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {isFilled.group(slice.primary.testimonials) &&
          slice.primary.testimonials.map(({ author_image, author_name, quote }, i) =>
            isFilled.richText(author_name) &&
            isFilled.richText(quote) &&
            (
              <Testimonial
                key={i}
                authorImage={author_image}
                authorName={author_name}
                quote={quote}
              />
            ))}
      </div>
    </section>
  );
};

export default Testimonials;
