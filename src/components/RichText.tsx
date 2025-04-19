import {
  PrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type DefaultComponentsProps = {
  classNames?: Partial<Record<keyof JSXMapSerializer, string>>;
};

const defaultComponents = ({
  classNames,
}: DefaultComponentsProps): JSXMapSerializer => ({
  //#region Headings
  heading1: ({ children }) => (
    <h1
      className="
                flex items-center justify-center gap-2
                font-abhaya font-extrabold text-title text-primary mb-4
                after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-botao-direita-MARROM.svg')] after:bg-contain after:bg-no-repeat after:bg-center
                before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-botao-esquerda-MARROM.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
    >
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2
      className="
                font-abhaya font-extrabold text-center text-subtitle text-primary mb-4
                after:content-[''] after:m-auto after:block after:w-52 after:h-8 after:mt-4 after:bg-[url('/divisa-marrom-PEQUENA.svg')] after:bg-contain after:bg-no-repeat after:bg-center"
    >
      {children}
    </h2>
  ),
  //#endregion

  //#region Lists
  oList: ({ children }) => <ol className="">{children}</ol>,
  oListItem: ({ children }) => <li className="">{children}</li>,

  list: ({ children }) => <ul className="">{children}</ul>,
  listItem: ({ children }) => <li className="">{children}</li>,
  //#endregion

  //#region Text
  paragraph: ({ children }) => (
    <p className={clsx("text-primary text-paragraph", classNames?.paragraph)}>
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="text-primary font-bold">{children}</strong>
  ),

  hyperlink: ({ children, node }) => (
    <PrismicNextLink field={node.data} className="">
      {children}
    </PrismicNextLink>
  ),
  //#endregion

  //#region Misc
  image: ({ node }) => <PrismicNextImage field={node} className="" />,

  preformatted: ({ children }) => (
    <pre className="">
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
