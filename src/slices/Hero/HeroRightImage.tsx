"use client"
import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { RichText } from '@/components/ReachText'
import { Content, GroupField, RichTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { Simplify } from '../../../prismicio-types'
import clsx from 'clsx'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type HeroRightImageProps = {
  text: RichTextField
  carousel: GroupField<Simplify<Content.HeroSliceDefaultPrimaryCarouselItem>>
  buttons: GroupField<Simplify<Content.HeroSliceDefaultPrimaryButtonsItem>>
}

export const HeroRightImage: React.FC<HeroRightImageProps> = ({ text, carousel, buttons }) => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <div className="relative isolate content-center h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-rose to-savoy-blue opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="flex px-6 md:px-20 items-center justify-center bg-hero overflow-hidden">
        <div className="flex flex-col gap-10 md:gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:px-4">
            <div className="text-center">
              <RichText
                field={text}
              />
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {buttons?.map(({ text, link }, i) => !!text && !!link && (
                  <Button key={i} href={link}>
                    {text}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {carousel && carousel.length > 0 &&
              <div className="max-w-4xl mx-auto relative">
                <div className="relative w-full h-full overflow-x-hidden flex rounded-xl">
                  {carousel.map(({ image }, i) => (
                    <div className="w-full h-full inline-block flex-none">
                      <PrismicNextImage
                        key={i}
                        field={image}
                        className={
                          clsx(
                            "w-full max-w-[600px] m-auto rounded-lg flex items-center transition-all",
                            activeSlide !== i ? "opacity-0" : "opacity-100"
                          )}
                      />
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 flex">
                  <div className="flex items-center justify-start w-1/2">
                    <button
                      className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
                      onClick={() => setActiveSlide(a => a = a === 0 ? carousel.length - 1 : a - 1)}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                  </div>
                  <div className="flex items-center justify-end w-1/2">
                    <button
                      className="bg-teal-100 text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
                      onClick={() => setActiveSlide(a => a = a === carousel.length - 1 ? 0 : a + 1)}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>

                <div className="absolute w-full flex items-center justify-center px-4">
                  {carousel.map((_, i) => (
                    <button
                      key={i}
                      className={
                        clsx(
                          "flex-1 w-4 h-2 mt-4 mx-2 mb-0 rounded-full overflow-hidden transition-colors duration-200 ease-out hover:bg-savoy-blue hover:shadow-lg cursor-pointer",
                          activeSlide === i ? 'bg-white-smoke' : 'bg-dim-gray',
                        )}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              </div>}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-full -z-10 -translate-y-full transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-rose to-savoy-blue opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}
