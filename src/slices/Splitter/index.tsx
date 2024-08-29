import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Splitter`.
 */
export type SplitterProps = SliceComponentProps<Content.SplitterSlice>;

/**
 * Component for "Splitter" Slices.
 */
const Splitter = ({ slice }: SplitterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="splitter">
        <div className="splitter-component">
          <figure className="size-full image-wrapper before">
            <PrismicNextImage field={slice.primary.before} />
          </figure>

          <figure className="size-full image-wrapper after">
            <PrismicNextImage field={slice.primary.after} />
          </figure>

          <div className="splitter-handle-component is-transparent is-1" style={{ left: "52.77%" }}>
            <div className="splitter-handle-wrapper">
              <div className="line" />
              <div className="circle is-1">
                <FontAwesomeIcon icon={faCaretLeft} />
                <FontAwesomeIcon icon={faCaretRight} />
              </div>
              <div className="line" />
            </div>
          </div>

          <div className="splitter-text after">Depois</div>
          <div className="splitter-text before">Antes</div>
        </div>
      </div>
    </section>
  );
};

export default Splitter;
