import { LinkButton } from "@/components/LinkButton";
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
      <LinkButton href={slice.primary.destination}>
        <PrismicText field={slice.primary.text} />
      </LinkButton>
    </section>
  );
};

export default CallToAction;
