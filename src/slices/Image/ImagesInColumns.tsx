import { GroupField } from '@prismicio/client'
import React from 'react'
import { ImageSliceImagesInColumnsPrimaryImagesItem, Simplify } from '../../../prismicio-types'

type ImagesInColumnsProps = {
  cols?: number
  images: GroupField<Simplify<ImageSliceImagesInColumnsPrimaryImagesItem>>
}

export const ImagesInColumns: React.FC<ImagesInColumnsProps> = ({ images, cols = 2 }) => {
  return (
    <div>
    </div>
  )
}
