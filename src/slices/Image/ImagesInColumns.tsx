import { GroupField, isFilled } from '@prismicio/client'
import React from 'react'
import { ImageSliceImagesInColumnsPrimaryImagesItem, Simplify } from '../../../prismicio-types'
import { PrismicImage } from '@prismicio/react'
import "./ImagesInColumns.css"

type ImagesInColumnsProps = {
  cols?: number
  imagesHeight?: number
  images: GroupField<Simplify<ImageSliceImagesInColumnsPrimaryImagesItem>>
}

export const ImagesInColumns: React.FC<ImagesInColumnsProps> = ({ images, imagesHeight = 600, cols = 2 }) => {
  return (
    <div
      style={{ "--cols": cols }}
      className="my-3 grid gap-8 md:gap-x-8 md:gap-y-4 images-grid"
    >
      {isFilled.group(images) &&
        images.map(({ image }, i) => (
          <PrismicImage
            key={i}
            field={image}
            style={{ height: `${imagesHeight}px` }}
            className="w-auto m-auto"
          />
        ))}
    </div>
  )
}
