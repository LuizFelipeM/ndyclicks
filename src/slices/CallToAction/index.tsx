import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "flex",
        slice.variation === "center" && "lg:align-middle lg:justify-center"
      )}
    >
      <PrismicNextLink
        field={slice.primary.destination}
        className="inline-flex items-center bg-savoy-blue text-white-smoke rounded-full px-4 h-10"
      >
        <PrismicText field={slice.primary.text} />
      </PrismicNextLink>
    </section>
  );
};

export default CallToAction;
