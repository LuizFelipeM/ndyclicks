import {
  PrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
  PrismicLink,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import { Heading } from "./Heading";
import clsx from "clsx";

type DefaultComponentsProps = { className?: string }

const defaultComponents = ({ className }: DefaultComponentsProps): JSXMapSerializer => {
  return {
    heading1: ({ children }) => (
      <Heading as="h1" className={clsx("mb-7 mt-12 first:mt-0 last:mb-0", className)}>
        {children}
      </Heading>
    ),
    heading2: ({ children }) => (
      <Heading as="h2" size="md" className={clsx("mb-7 mt-12 first:mt-0 last:mb-0", className)}>
        {children}
      </Heading>
    ),
    heading3: ({ children }) => (
      <Heading as="h3" size="sm" className={clsx("mb-7 mt-12 first:mt-0 last:mb-0", className)}>
        {children}
      </Heading>
    ),
    paragraph: ({ children }) => (
      <p className={clsx("mb-7 last:mb-0", className)}>
        {children}
      </p>
    ),
    oList: ({ children }) => (
      <ol className={clsx("mb-7 pl-4 last:mb-0 md:pl-6", className)}>
        {children}
      </ol>
    ),
    oListItem: ({ children }) => (
      <li className={clsx("mb-1 list-decimal pl-1 last:mb-0 md:pl-2", className)}>
        {children}
      </li>
    ),
    list: ({ children }) => (
      <ul className={clsx("mb-7 pl-4 last:mb-0 md:pl-6", className)}>
        {children}
      </ul>
    ),
    listItem: ({ children }) => (
      <li className={clsx("mb-1 list-disc pl-1 last:mb-0 md:pl-2", className)}>
        {children}
      </li>
    ),
    preformatted: ({ children }) => (
      <pre className={clsx("mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg", className)}>
        <code>{children}</code>
      </pre>
    ),
    strong: ({ children }) => (
      <strong className={clsx("font-semibold", className)}>
        {children}
      </strong>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className={clsx("underline decoration-1 underline-offset-2", className)}
      >
        {children}
      </PrismicNextLink>
    ),
  }
};

export function RichText({
  components,
  className,
  ...props
}: PrismicRichTextProps & DefaultComponentsProps) {
  return (
    <PrismicRichText
      components={{ ...defaultComponents({ className }), ...components }}
      {...props}
    />
  );
}
