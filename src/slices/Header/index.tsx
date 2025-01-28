import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className="font-Roboto text-primary font-bold text-left text-[2.75rem] lg:text-center md:text-[10rem]">
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="font-Roboto font-light text-neutral-white-smoke text-left text-[1.5rem] lg:text-center lg:text-[2.25rem] mb-3">
      {children}
    </h2>
  ),
};

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <section
      className="mb-6 text-inherit"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        components={components}
        field={slice.primary.title}
      />

      <PrismicRichText
        components={components}
        field={slice.primary.subtitle}
      />
    </section>
  );
};

export default Header;
