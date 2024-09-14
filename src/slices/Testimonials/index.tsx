import { RichText } from "@/components/RichText";
import { Content } from "@prismicio/client";
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
        {!!slice.primary.testimonials && slice.primary.testimonials.map(({ author_image, author_name, quote, quote_url }, i) => (
          <Testimonial key={i} authorImage={author_image} authorName={author_name} quote={quote} quoteUrl={quote_url} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
