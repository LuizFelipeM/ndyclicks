import { RichText } from '@/components/RichText'
import { RichTextField } from '@prismicio/client'
import clsx from 'clsx'
import React from 'react'
import { TextComponents } from './TextComponents'

type TextAndHeaderProps = {
  text: RichTextField
  header: RichTextField
  isTextLeft: boolean
}

export const TextAndHeader: React.FC<TextAndHeaderProps> = ({ text, header, isTextLeft }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full py-3 border-b border-t border-jet">
    <div className={
      clsx(
        "w-full md:w-3/5 p-4",
        isTextLeft ? "order-first" : "order-last"
      )
    }>
      <RichText field={text} />
    </div>

    <div className="w-full md:w-2/5 p-4">
      <RichText
        field={header}
        components={TextComponents}
      />
    </div>
  </div>
)
