import { ImageField, isFilled, SelectField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'

type DefaultProps = {
  image: ImageField
  changeImageSize: boolean
  keepAspectRatio: SelectField<"Largura (ajustar altura automaticamente)" | "Altura (ajustar largura automaticamente)" | "Não manter proporção">
  height?: number
  width?: number
}

export const Default: React.FC<DefaultProps> = ({ changeImageSize, image, keepAspectRatio, height, width }) => {
  const changeHeight = ['Altura (ajustar largura automaticamente)', 'Não manter proporção']
  const changeWidth = ['Largura (ajustar altura automaticamente)', 'Não manter proporção']

  const canRender = isFilled.image(image) && (!changeImageSize || isFilled.select(keepAspectRatio))

  let imageHeight: string | undefined = undefined
  let imageWidth: string | undefined = undefined

  if (changeImageSize && isFilled.select(keepAspectRatio)) {
    if (changeHeight.includes(keepAspectRatio!) && height) imageHeight = `${height}px`
    else imageHeight = "auto"

    if (changeWidth.includes(keepAspectRatio!) && width) imageWidth = `${width}px`
    else imageWidth = "auto"
  }

  return canRender && (
    <div
      style={{
        height: imageHeight,
        width: imageWidth,
      }}
      className="overflow-hidden mx-auto max-w-full rounded-lg"
    >
      <PrismicNextImage
        field={image}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
