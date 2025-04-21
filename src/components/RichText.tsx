import {
  PrismicRichText,
  type PrismicRichTextProps,
  type JSXMapSerializer,
} from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import { ImageFullScreen } from "./ImageFullScreen";

type DefaultComponentsProps = {
  classNames?: Partial<Record<keyof JSXMapSerializer, string>>;
};

const defaultComponents = ({
  classNames,
}: DefaultComponentsProps): JSXMapSerializer => ({
  //#region Headings
  heading1: ({ children }) => (
    <h1
      className={clsx(
        "flex items-center justify-center gap-2",
        "font-abhaya font-extrabold text-title text-primary mb-4",
        "after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-botao-direita-MARROM.svg')] after:bg-contain after:bg-no-repeat after:bg-center",
        "before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-botao-esquerda-MARROM.svg')] before:bg-contain before:bg-no-repeat before:bg-center",
        classNames?.heading1
      )}
    >
      {children}
    </h1>
  ),
  heading2: ({ children }) => (
    <h2
      className={clsx(
        "font-abhaya font-extrabold text-center text-subtitle text-primary mb-4",
        "after:content-[''] after:m-auto after:block after:w-52 after:h-8 after:mt-4 after:bg-[url('/divisa-marrom-PEQUENA.svg')] after:bg-contain after:bg-no-repeat after:bg-center",
        classNames?.heading2
      )}
    >
      {children}
    </h2>
  ),
  heading3: ({ children }) => (
    <h3
      className={clsx(
        "font-abhaya font-extrabold text-center text-subtitle text-primary mb-4",
        classNames?.heading3
      )}
    >
      {children}
    </h3>
  ),
  //#endregion

  //#region Lists
  oList: ({ children }) => (
    <ol
      className={clsx(
        "list-decimal list-inside text-primary text-paragraph mb-5",
        classNames?.oList
      )}
    >
      {children}
    </ol>
  ),
  oListItem: ({ children }) => (
    <li className={clsx("mb-2", classNames?.oListItem)}>{children}</li>
  ),

  list: ({ children }) => (
    <ul
      className={clsx(
        "list-disc list-inside text-primary text-paragraph mb-5",
        classNames?.list
      )}
    >
      {children}
    </ul>
  ),
  listItem: ({ children }) => (
    <li className={clsx("mb-2", classNames?.listItem)}>{children}</li>
  ),
  //#endregion

  //#region Text
  paragraph: ({ children }) => (
    <p
      className={clsx(
        "text-primary text-paragraph mb-5",
        classNames?.paragraph
      )}
    >
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className={clsx("text-primary font-bold", classNames?.strong)}>
      {children}
    </strong>
  ),

  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className={clsx(
        "underline text-primary hover:text-primary-light",
        classNames?.hyperlink
      )}
    >
      {children}
    </PrismicNextLink>
  ),
  //#endregion

  //#region Misc
  image: ({ node }) => <ImageFullScreen image={node} />,

  preformatted: ({ children }) => <pre>{children}</pre>,
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
