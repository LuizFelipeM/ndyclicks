import { RichText } from "@/components/RichText";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { Testimonial } from "./Testimonial";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";

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
      className="pb-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center pb-32 px-4 md:px-8">
        {isFilled.richText(slice.primary.text) && (
          <RichText field={slice.primary.text} />
        )}
      </div>

      <div className="max-w-6xl mx-auto">
        <TestimonialSlider>
          {isFilled.group(slice.primary.testimonials) &&
            slice.primary.testimonials.map(
              ({ author_image, author_name, quote }, index) =>
                isFilled.richText(author_name) &&
                isFilled.richText(quote) && (
                  <TestimonialCard
                    key={index}
                    image={author_image}
                    testimonial={quote}
                    author={author_name}
                  />
                )
            )}
        </TestimonialSlider>
      </div>
    </section>
  );
};

export default Testimonials;
