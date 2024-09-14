import { RichText } from '@/components/RichText'
import { RichTextField } from '@prismicio/client'
import React from 'react'

type DefaultProps = {
  text: RichTextField
}

export const Default: React.FC<DefaultProps> = ({ text }) => (
  <div className="px-4 py-3">
    <RichText field={text} />
  </div>
)
