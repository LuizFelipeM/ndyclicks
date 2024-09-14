import { RichText } from "@/components/RichText";
import { ImageField, LinkField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type TestimonialProps = {
  authorImage: ImageField<never>
  authorName: RichTextField
  quote: RichTextField
  quoteUrl: LinkField
}

export const Testimonial: React.FC<TestimonialProps> = ({ authorImage, authorName, quote, quoteUrl }) => (
  <div className="bg-white p-6 shadow-lg w-full md:w-1/3 relative rounded-lg bg-oxford-blue">
    <div className="absolute -top-4 -left-8 w-20 h-20">
      <PrismicNextImage
        field={authorImage}
        className="w-full h-full rounded-full object-cover border-4 border-gray-200"
      />
    </div>
    <blockquote
      cite={quoteUrl?.link_type === "Web" ? (quoteUrl as any)["url"] : undefined}
      className="mt-10 text-left"
    >
      <RichText field={quote} />
    </blockquote>
    <div className="mt-4 text-right font-semibold">
      – <RichText field={authorName} classNames={{ paragraph: "inline" }} />
    </div>
  </div>
)