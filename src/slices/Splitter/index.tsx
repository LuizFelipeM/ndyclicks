'use client'
import { useEffect, useRef } from "react";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import "./style.css"

/**
 * Props for `Splitter`.
 */
export type SplitterProps = SliceComponentProps<Content.SplitterSlice>;

/**
 * Component for "Splitter" Slices.
 */
const Splitter = ({ slice }: SplitterProps): JSX.Element => {
  const splitterRef = useRef<HTMLDivElement>(null)
  const splitterBeforeRef = useRef<HTMLDivElement>(null)
  const splitterAfterRef = useRef<HTMLDivElement>(null)
  const splitterHandlerRef = useRef<HTMLDivElement>(null)

  let isHandleLocked = useRef(false)

  useEffect(() => {
    splitterRef.current?.addEventListener("mousemove", splitterMouseMove)
    splitterRef.current?.addEventListener("mousedown", splitterMouseDown)
    splitterRef.current?.addEventListener("touchmove", splitterMouseMove, {
      passive: false
    })
  }, [])

  function splitterMouseDown(ev: MouseEvent): any {
    isHandleLocked.current && (isHandleLocked.current = false)
    splitterMouseMove(ev)
  }

  const isMouseEvent = (ev: MouseEvent | TouchEvent): ev is MouseEvent => 'clientX' in ev

  function splitterMouseMove(ev: MouseEvent | TouchEvent) {
    ev.preventDefault()
    if (isHandleLocked.current) return

    const e = splitterRef.current?.getBoundingClientRect()!
    const n = splitterHandlerRef.current!
    const x = isMouseEvent(ev) ? ev.clientX : ev.touches[0].clientX

    let s = Number((x - e.left).toFixed())
    if (s < 0) {
      s = 0
    } else {
      s > e.width && (s = e.width)
      splitterAfterRef.current!.style.width = `${((1 - s / e.width) * 100).toFixed(2)}%`
      splitterHandlerRef.current!.style.left = `${Number((s / e.width * 100).toFixed(2)) - Number((n.clientWidth / e.width / 2 * 100).toFixed(2))}%`
    }
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="splitter">
        <div className="splitter-component" ref={splitterRef}>
          <figure className="size-full image-wrapper before" ref={splitterBeforeRef}>
            <PrismicNextImage field={slice.primary.before} />
          </figure>

          <figure className="size-full image-wrapper after" ref={splitterAfterRef}>
            <PrismicNextImage field={slice.primary.after} />
          </figure>

          <div className="splitter-handle-component is-transparent is-1" style={{ left: "52.77%" }} ref={splitterHandlerRef}>
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
