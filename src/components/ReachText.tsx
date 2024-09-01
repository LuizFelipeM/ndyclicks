import {
  PrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Heading } from "./Heading";
import clsx from "clsx";

type DefaultComponentsProps = {
  className?: string
  overrideDefaultClassName?: boolean
}

const defaultComponents = ({ className, overrideDefaultClassName = false }: DefaultComponentsProps): JSXMapSerializer => {
  return {
    //#region Headings
    heading1: ({ children }) => (
      <Heading as="h1" className={
        clsx(
          overrideDefaultClassName ? null : "mb-7 mt-12 first:mt-0 last:mb-0",
          className
        )}
      >
        {children}
      </Heading>
    ),
    heading2: ({ children }) => (
      <Heading as="h2" size="md" className={
        clsx(
          overrideDefaultClassName ? null : "mb-7 mt-12 first:mt-0 last:mb-0",
          className
        )}
      >
        {children}
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading as="h3" size="sm" className={
        clsx(
          overrideDefaultClassName ? null : "mb-7 mt-12 first:mt-0 last:mb-0",
          className
        )}
      >
        {children}
      </Heading>
    ),
    heading4: ({ children }) => (
      <Heading as="h4" size="sm" className={
        clsx(
          overrideDefaultClassName ? null : "mb-7 mt-12 first:mt-0 last:mb-0",
          className
        )}
      >
        {children}
      </Heading>
    ),
    heading5: ({ children }) => (
      <Heading as="h5" size="sm" className={
        clsx(
          overrideDefaultClassName ? null : "mb-7 mt-12 first:mt-0 last:mb-0",
          className
        )
      }>
        {children}
      </Heading>
    ),
    heading6: ({ children }) => (
      <Heading as="h6" size="sm" className={
        clsx(
          overrideDefaultClassName ? null : "mb-7 mt-12 first:mt-0 last:mb-0",
          className
        )}
      >

        {children}
      </Heading >
    ),
    //#endregion

    //#region Lists
    oList: ({ children }) => (
      <ol className={
        clsx(
          overrideDefaultClassName ? null : "mb-4 pl-4 last:mb-0 md:pl-6",
          className
        )}
      >
        {children}
      </ol>
    ),
    oListItem: ({ children }) => (
      <li className={
        clsx(
          overrideDefaultClassName ? null : "mb-1 list-decimal pl-1 last:mb-0 md:pl-2",
          className
        )}
      >
        {children}
      </li>
    ),

    list: ({ children }) => (
      <ul className={
        clsx(
          overrideDefaultClassName ? null : "mb-4 pl-4 last:mb-0 md:pl-6",
          className
        )}
      >
        {children}
      </ul>
    ),
    listItem: ({ children }) => (
      <li className={
        clsx(
          overrideDefaultClassName ? null : "mb-1 list-disc pl-1 last:mb-0 md:pl-2",
          className
        )}
      >
        {children}
      </li>
    ),
    //#endregion

    //#region Text
    paragraph: ({ children }) => (
      <p className={
        clsx(
          overrideDefaultClassName ? null : "mb-4 last:mb-0",
          className
        )}
      >
        {children}
      </p>
    ),

    strong: ({ children }) => (
      <strong className={
        clsx(
          overrideDefaultClassName ? null : "font-semibold",
          className
        )}
      >
        {children}
      </strong>
    ),

    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className={
          clsx(
            overrideDefaultClassName ? null : "underline decoration-1 underline-offset-2",
            className
          )}
      >
        {children}
      </PrismicNextLink>
    ),
    //#endregion

    //#region Misc
    image: ({ node }) => (
      <PrismicNextImage
        field={node}
        className={
          clsx(
            overrideDefaultClassName ? null : "mb-4",
            className
          )}
      />
    ),

    preformatted: ({ children }) => (
      <pre className={
        clsx(
          overrideDefaultClassName ? null : "mb-4 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg",
          className
        )}
      >
        <code>{children}</code>
      </pre>
    ),
    //#endregion
  }
};

export function RichText({
  components,
  className,
  overrideDefaultClassName,
  ...props
}: PrismicRichTextProps & DefaultComponentsProps) {
  return (
    <PrismicRichText
      components={{ ...defaultComponents({ className, overrideDefaultClassName }), ...components }}
      {...props}
    />
  );
}
