import { RichText } from '@/components/RichText'
import { RichTextField, ImageField, isFilled } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import clsx from 'clsx'
import React from 'react'

type TextAndImageProps = {
  text: RichTextField
  image: ImageField
  isTextLeft: boolean
}

export const TextAndImage: React.FC<TextAndImageProps> = ({ text, image, isTextLeft }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full py-3 border-b border-t border-neutral-jet">
    {isFilled.richText(text) &&
      <div className={
        clsx(
          "w-full md:w-3/5 p-4",
          isTextLeft ? "order-first" : "order-last"
        )
      }>
        <RichText field={text} />
      </div>}

    {isFilled.image(image) &&
      <div className="w-full md:w-2/5 p-4">
        <PrismicNextImage
          field={image}
          className="w-full h-auto object-cover"
        />
      </div>}
  </div>
)
