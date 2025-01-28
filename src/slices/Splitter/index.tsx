"use client";
import React, { useEffect, useRef, useState } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, ImageField, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

const isMouseEvent = (ev: MouseEvent | TouchEvent): ev is MouseEvent =>
  "clientX" in ev;

/**
 * Props for `Splitter`.
 */
export type SplitterProps = SliceComponentProps<Content.SplitterSlice>;

/**
 * Component for "Splitter" Slices.
 */
const Splitter: React.FC<SplitterProps> = ({ slice }) => {
  const [dividerPosition, setDividerPosition] = useState(50);
  const [imagesMinWidth, setImagesMinWidth] = useState<string>();

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refCurrentValue = containerRef.current;
    setImagesMinWidth(`${refCurrentValue?.offsetWidth}px`);

    refCurrentValue?.addEventListener("mousemove", handleDrag);
    refCurrentValue?.addEventListener("touchmove", handleDrag, {
      passive: false,
    });

    return () => {
      refCurrentValue?.removeEventListener("mousemove", handleDrag);
      refCurrentValue?.removeEventListener("touchmove", handleDrag);
    };
  }, []);

  useEffect(
    () => setImagesMinWidth(`${containerRef.current?.offsetWidth}px`),
    [containerRef.current?.offsetWidth]
  );

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    e.preventDefault();

    const container = containerRef.current;
    const rect = container!.getBoundingClientRect();
    const x = isMouseEvent(e) ? e.clientX : e.touches[0].clientX;
    const offsetX = x - rect.left;
    const newPosition = (offsetX / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setDividerPosition(newPosition);
    }
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={containerRef}
      className="mb-5 relative h-auto md:h-[40rem] md:max-h-[80vh] w-full overflow-hidden cursor-ew-resize rounded-lg"
    >
      {/* Before Image with Clipping */}
      {!!imagesMinWidth && isFilled.image(slice.primary.before) && (
        <div
          className="absolute inset-0 overflow-hidden z-20"
          style={{ width: `${dividerPosition}%` }}
        >
          <PrismicNextImage
            field={slice.primary.before}
            style={{ minWidth: imagesMinWidth }}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      {/* After Image */}
      {isFilled.image(slice.primary.after) && (
        <PrismicNextImage
          field={slice.primary.after}
          style={{ minWidth: imagesMinWidth }}
          className="inset-0 h-auto md:h-full w-full object-cover z-10"
        />
      )}

      {/* Divider */}
      <div
        className="absolute inset-y-0 z-30"
        style={{ left: `${dividerPosition}%` }}
      >
        {/* Line */}
        <div className="h-full w-[2px] bg-neutral-white-smoke" />

        {/* Resize icon */}
        <div
          className="
          bg-neutral-jet bg-opacity-70
          absolute flex
          justify-center items-center cursor-ew-resize
          -left-4 top-1/2
          transform -translate-y-1/2
          w-8 h-8
          border-2 border-neutral-white-smoke rounded-full"
        >
          <div className="w-2 h-2 flex gap-1 justify-center items-center text-neutral-white-smoke">
            <FontAwesomeIcon icon={faCaretLeft} />
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-2 z-40 text-xs text-neutral-white-smoke bg-neutral-jet-dark rounded-full py-2 px-3">
        Depois
      </div>
      <div className="absolute top-2 left-2 z-40 text-xs text-neutral-white-smoke bg-neutral-jet-dark rounded-full py-2 px-3">
        Antes
      </div>
    </section>
  );
};

export default Splitter;
