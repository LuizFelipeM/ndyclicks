import { RichText } from '@/components/RichText'
import { ImageField, RichTextField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import clsx from 'clsx'
import React from 'react'
import { TextComponents } from './TextComponents'

type TextWithHeaderAndImageProps = {
  text: RichTextField
  header: RichTextField
  image: ImageField
  isTextLeft: boolean
}

export const TextWithHeaderAndImage: React.FC<TextWithHeaderAndImageProps> = ({ text, header, image, isTextLeft }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full py-3 border-b border-t border-jet">
    <div className={
      clsx(
        "w-full md:w-3/5 p-4",
        isTextLeft ? "order-first" : "order-last"
      )
    }>
      <RichText
        field={header}
        components={TextComponents}
      />
      <RichText field={text} />
    </div>

    <div className="w-full md:w-2/5 p-4">
      <PrismicNextImage
        field={image}
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
)
