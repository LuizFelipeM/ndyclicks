import React from 'react'
import { LinkButton } from '@/components/LinkButton'
import { RichText } from '@/components/RichText'
import { Content, GroupField, isFilled, RichTextField } from '@prismicio/client'
import { Simplify } from '../../../prismicio-types'
import { Carousel } from '@/components/Carousel'
import { HeroComponents } from "./HeroComponents"
import clsx from 'clsx'

type HeroDefaultProps = {
  className?: string
  title: RichTextField
  text: RichTextField
  carousel: GroupField<Simplify<Content.HeroSliceDefaultPrimaryCarouselItem>>
  buttons: GroupField<Simplify<Content.HeroSliceDefaultPrimaryButtonsItem>>
}

export const HeroDefault: React.FC<HeroDefaultProps> = ({ title, text, carousel, buttons, className }) => {
  return (
    <div className={
      clsx(
        "relative isolate content-center h-auto min-h-screen",
        className
      )
    }>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary-olive-dark opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="flex px-6 md:px-20 items-center justify-center bg-hero md:overflow-hidden">
        <div className="flex flex-col gap-10 md:flex-row md:gap-6 items-center max-w-8xl w-full">
          <div className="w-full md:w-1/2 lg:px-4">
            <div className="text-center">
              <RichText
                field={title}
                components={HeroComponents}
              />
              <RichText field={text} />
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {buttons?.map(({ text, link }, i) =>
                  isFilled.keyText(text) &&
                  isFilled.link(link) &&
                  (
                    <LinkButton key={i} href={link} className="font-bold">
                      {text}
                    </LinkButton>
                  ))}
              </div>
            </div>
          </div>

          <div className="hidden w-full md:w-1/2 md:flex justify-center md:justify-end">
            {isFilled.group(carousel) && <Carousel slides={carousel} ms={5000} />}
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary-olive-dark opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}
