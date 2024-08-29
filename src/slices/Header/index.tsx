import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Heading } from "@/components/Heading";
import { RichText } from "@/components/ReachText";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

// const components: JSXMapSerializer = {
//   heading1: ({ children }) => (
//     <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
//       {children}
//     </Heading>
//   ),
// };

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
      <RichText
        field={slice.primary.title}
        className="font-Roboto text-rose font-bold text-left text-[2.75rem] lg:text-center md:text-[10rem]"
      />

      <RichText
        field={slice.primary.subtitle}
        className="font-Roboto font-light text-white-smoke text-left text-[1.5rem] lg:text-center lg:text-[2.25rem] mb-3"
      />
    </section>
  );
};

export default Header;
