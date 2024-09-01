import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import React from 'react'

type ButtonProps = React.PropsWithChildren<{
  href: LinkField | string
  icon?: IconProp
}>

type LinkProps = { field: LinkField, href: undefined } | { field: undefined, href: string }

const isString = (link: LinkField | string): link is string => typeof link === 'string'

export const Button: React.FC<ButtonProps> = ({ children, icon, href }) => {
  const props: LinkProps = {} as LinkProps
  if (isString(href)) props.href = href
  else props.field = href

  return (
    <PrismicNextLink
      {...props}
      className="inline-flex items-center bg-savoy-blue text-white-smoke rounded-full px-4 h-10"
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-1.5" />}
      {children}
    </PrismicNextLink>
  )
}
