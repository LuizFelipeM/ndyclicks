import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";

/**
 * Props for `Divider`.
 */
export type DividerProps = SliceComponentProps<Content.DividerSlice>;

/**
 * Component for "Divider" Slices.
 */
const Divider: React.FC<DividerProps> = ({ slice }) => {
  return (
    <span
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="divider"
    />
  );
};

export default Divider;
