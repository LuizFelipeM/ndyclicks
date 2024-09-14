import { GroupField, isFilled, NumberField } from '@prismicio/client'
import React from 'react'
import { ImageSliceImagesInColumnsPrimaryImagesItem, Simplify } from '../../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'

type ImagesInMasonryProps = {
  colsWidth: NumberField
  images: GroupField<Simplify<ImageSliceImagesInColumnsPrimaryImagesItem>>
}

export const ImagesInMasonry: React.FC<ImagesInMasonryProps> = ({ images, colsWidth }) => {
  return (
    <div style={{ columns: `${colsWidth?.valueOf()}px` }}>
      {isFilled.group(images) &&
        images.map(({ image }, i) => isFilled.image(image) && (
          <PrismicNextImage
            key={i}
            field={image}
            className="w-full mb-3 rounded-lg"
          />
        ))}
    </div>
  )
}
