"use client"
import { Content, GroupField } from '@prismicio/client'
import React, { useEffect, useState } from 'react'
import { Simplify } from '../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

type CarouselProps = {
  slides: GroupField<Simplify<Content.HeroSliceDefaultPrimaryCarouselItem>>
  ms?: number
}

export const Carousel: React.FC<CarouselProps> = ({ slides, ms = 3000 }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(next, ms)
    return () => clearInterval(interval)
  }, [current])

  const previous = () => setCurrent(a => a = a === 0 ? slides.length - 1 : a - 1)
  const next = () => setCurrent(a => a = a === slides.length - 1 ? 0 : a + 1)

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className={`relative w-[600px] h-full overflow-x-hidden flex rounded-xl`}>
        {slides.map(({ image }, i) => (
          <div
            key={i}
            style={{ transform: `translateX(-${current * 100}%)` }}
            className="w-full h-full inline-block flex-none"
          >
            <PrismicNextImage
              field={image}
              className={
                clsx(
                  "w-full max-w-[600px] m-auto flex items-center transition-all transform-gpu",
                  current === i ? "opacity-100" : "opacity-0"
                )}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex">
        <div className="flex items-center justify-start w-1/2">
          <button
            className="bg-rich-black hover:text-rose shadow-white-smoke hover:shadow-lg rounded-full w-12 h-12 -ml-6"
            onClick={previous}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="flex items-center justify-end w-1/2">
          <button
            className="bg-rich-black hover:text-rose hover:shadow rounded-full w-12 h-12 -mr-6"
            onClick={next}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="absolute w-full flex items-center justify-center px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            className={
              clsx(
                "flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-savoy-blue hover:shadow-lg cursor-pointer",
                current === i ? "bg-white-smoke" : "bg-dim-gray",
              )}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
