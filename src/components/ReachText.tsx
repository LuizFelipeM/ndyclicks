import {
  PrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { Heading } from "./Heading";
import clsx from "clsx";

type ClassNameModifier = {
  className: string
  overrideDefault?: boolean
}

type DefaultComponentsProps = {
  classNames?: Partial<Record<keyof JSXMapSerializer, string | ClassNameModifier>>
}

const isClassNameModifier = (className: string | ClassNameModifier | undefined): className is ClassNameModifier =>
  !!className && !(typeof className === "string") && "className" in className

const defaultComponents = ({ classNames }: DefaultComponentsProps): JSXMapSerializer => ({
  //#region Headings
  heading1: ({ children }) => (
    <Heading as="h1" className={
      clsx(
        isClassNameModifier(classNames?.heading1) ? classNames?.heading1?.overrideDefault : "mb-7 mt-12 first:mt-0 last:mb-0",
        isClassNameModifier(classNames?.heading1) ? classNames?.heading1?.className : classNames?.heading1
      )}
    >
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className={
      clsx(
        isClassNameModifier(classNames?.heading2) ? classNames?.heading2?.overrideDefault : "mb-7 mt-12 first:mt-0 last:mb-0",
        isClassNameModifier(classNames?.heading2) ? classNames?.heading2?.className : classNames?.heading2
      )}
    >
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className={
      clsx(
        isClassNameModifier(classNames?.heading3) ? classNames?.heading3?.overrideDefault : "mb-7 mt-12 first:mt-0 last:mb-0",
        isClassNameModifier(classNames?.heading3) ? classNames?.heading3?.className : classNames?.heading3
      )}
    >
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="sm" className={
      clsx(
        isClassNameModifier(classNames?.heading4) ? classNames?.heading4?.overrideDefault : "mb-7 mt-12 first:mt-0 last:mb-0",
        isClassNameModifier(classNames?.heading4) ? classNames?.heading4?.className : classNames?.heading4
      )}
    >
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" size="sm" className={
      clsx(
        isClassNameModifier(classNames?.heading5) ? classNames?.heading5?.overrideDefault : "mb-7 mt-12 first:mt-0 last:mb-0",
        isClassNameModifier(classNames?.heading5) ? classNames?.heading5?.className : classNames?.heading5
      )
    }>
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" size="sm" className={
      clsx(
        isClassNameModifier(classNames?.heading6) ? classNames?.heading6?.overrideDefault : "mb-7 mt-12 first:mt-0 last:mb-0",
        isClassNameModifier(classNames?.heading6) ? classNames?.heading6?.className : classNames?.heading6
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
        isClassNameModifier(classNames?.oList) ? classNames?.oList?.overrideDefault : "mb-4 pl-4 last:mb-0 md:pl-6",
        isClassNameModifier(classNames?.oList) ? classNames?.oList?.className : classNames?.oList
      )}
    >
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className={
      clsx(
        isClassNameModifier(classNames?.oListItem) ? classNames?.oListItem?.overrideDefault : "mb-1 list-decimal pl-1 last:mb-0 md:pl-2",
        isClassNameModifier(classNames?.oListItem) ? classNames?.oListItem?.className : classNames?.oListItem
      )}
    >
      {children}
    </li>
  ),

  list: ({ children }) => (
    <ul className={
      clsx(
        isClassNameModifier(classNames?.list) ? classNames?.list?.overrideDefault : "mb-4 pl-4 last:mb-0 md:pl-6",
        isClassNameModifier(classNames?.list) ? classNames?.list?.className : classNames?.list
      )}
    >
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className={
      clsx(
        isClassNameModifier(classNames?.listItem) ? classNames?.listItem?.overrideDefault : "mb-1 list-disc pl-1 last:mb-0 md:pl-2",
        isClassNameModifier(classNames?.listItem) ? classNames?.listItem?.className : classNames?.listItem
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
        isClassNameModifier(classNames?.paragraph) ? classNames?.paragraph?.overrideDefault : "mb-4 last:mb-0",
        isClassNameModifier(classNames?.paragraph) ? classNames?.paragraph?.className : classNames?.paragraph
      )}
    >
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className={
      clsx(
        isClassNameModifier(classNames?.strong) ? classNames?.strong?.overrideDefault : "font-semibold",
        isClassNameModifier(classNames?.strong) ? classNames?.strong?.className : classNames?.strong
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
          isClassNameModifier(classNames?.hyperlink) ? classNames?.hyperlink?.overrideDefault : "underline decoration-1 underline-offset-2",
          isClassNameModifier(classNames?.hyperlink) ? classNames?.hyperlink?.className : classNames?.hyperlink
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
          isClassNameModifier(classNames?.image) ? classNames?.image?.overrideDefault : "mb-4",
          isClassNameModifier(classNames?.image) ? classNames?.image?.className : classNames?.image
        )}
    />
  ),

  preformatted: ({ children }) => (
    <pre className={
      clsx(
        isClassNameModifier(classNames?.preformatted) ? classNames?.preformatted?.overrideDefault : "mb-4 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg",
        isClassNameModifier(classNames?.preformatted) ? classNames?.preformatted?.className : classNames?.preformatted
      )}
    >
      <code>{children}</code>
    </pre>
  ),
  //#endregion
});

export function RichText({
  components,
  classNames,
  ...props
}: PrismicRichTextProps & DefaultComponentsProps) {
  return (
    <PrismicRichText
      components={{ ...defaultComponents({ classNames }), ...components }}
      {...props}
    />
  );
}
