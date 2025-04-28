import { RichText } from '@/components/RichText'
import { RichTextField } from '@prismicio/client'
import React from 'react'

type DefaultProps = {
  text: RichTextField
}

export const Default: React.FC<DefaultProps> = ({ text }) => (
  <div className="relative max-w-6xl w-[80vw] mx-auto">
    <RichText field={text} />
  </div>
)
