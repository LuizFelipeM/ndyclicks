import React from 'react'
import { Button } from '@/components/Button'
import { RichText } from '@/components/ReachText'
import { Content, GroupField, RichTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { Simplify } from '../../../prismicio-types'
import { Carousel } from '@material-tailwind/react'

type HeroRightImageProps = {
  text: RichTextField
  carousel: GroupField<Simplify<Content.HeroSliceDefaultPrimaryCarouselItem>>
  buttons: GroupField<Simplify<Content.HeroSliceDefaultPrimaryButtonsItem>>
}

export const HeroRightImage: React.FC<HeroRightImageProps> = ({ text, carousel, buttons }) => {
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
            <Carousel className="rounded-xl" onPointerEnterCapture={() => console.log('first')} onPointerLeaveCapture={() => console.log('first')} placeholder={""}>
              {carousel?.map(({ image }, i) => (
                <PrismicNextImage
                  key={i}
                  field={image}
                  className="w-full max-w-[600px] m-auto rounded-lg"
                />
              ))}
            </Carousel>
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
