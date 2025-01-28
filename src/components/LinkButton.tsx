import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx'
import React from 'react'

type ButtonProps = React.PropsWithChildren<{
  href: LinkField | string
  className?: string
  overrideDefault?: boolean
}>

type LinkProps = { field: LinkField, href: undefined } | { field: undefined, href: string }

const isString = (link: LinkField | string): link is string => typeof link === 'string'

export const LinkButton: React.FC<ButtonProps> = ({ children, href, className, overrideDefault }) => {
  const props: LinkProps = {} as LinkProps
  if (isString(href)) props.href = href
  else props.field = href

  return (
    <PrismicNextLink
      {...props}
      className={
        clsx(
          !overrideDefault && "inline-flex items-center bg-primary text-neutral-white-smoke rounded-full px-4 h-10",
          className
        )
      }
    >
      {children}
    </PrismicNextLink>
  )
}
