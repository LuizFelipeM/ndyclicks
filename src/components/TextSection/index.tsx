import { ImageField, isFilled, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import React from "react";

interface ImageProps {
  image: ImageField;
  textLeft?: boolean;
}

const Image: React.FC<ImageProps> = ({ image, textLeft }) => {
  return (
    <div
      className={clsx(
        "relative z-10 overflow-hidden aspect-[6/7] w-full max-w-[80vw]",
        "order-first rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]",
        {
          "md:order-last md:rounded-tr-md md:rounded-bl-md md:rounded-tl-[80px] md:rounded-br-[80px]":
            textLeft,
        }
      )}
    >
      {isFilled.image(image) && (
        <PrismicNextImage field={image} fill className="object-cover z-10" />
      )}
    </div>
  );
};

interface BodyProps {
  children?: React.ReactNode;
  textLeft?: boolean;
  className?: string;
}

const Body: React.FC<BodyProps> = ({ children, textLeft, className }) => {
  const componentWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        textLeft,
      } as any);
    }
    return child;
  });

  return (
    <div
      className={clsx(
        "text-center md:text-left h-full flex flex-col mt-10 md:mt-0",
        className
      )}
    >
      {componentWithProps}
    </div>
  );
};

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => (
  <div className="text-primary m-auto md:mx-10">{children}</div>
);

interface LinkProps {
  children: React.ReactNode;
  textLeft?: boolean;
  href: LinkField | string;
}

type PrismicLinkProps =
  | { field: LinkField; href: undefined }
  | { field: undefined; href: string };

const isString = (link: LinkField | string): link is string =>
  typeof link === "string";

const Link: React.FC<LinkProps> = ({ children, textLeft, href }) => {
  const props: PrismicLinkProps = {} as PrismicLinkProps;
  if (isString(href)) props.href = href;
  else props.field = href;

  return (
    <div
      className={clsx("relative flex px-10 py-7 bg-secondary justify-center", {
        "md:justify-start": !textLeft,
        "md:justify-end": textLeft,
      })}
    >
      <div
        className={clsx(
          "z-0 absolute w-screen h-full md:max-w-[50vw] top-0 bg-secondary",
          "after:-z-10 after:absolute after:content-[''] after:w-44 after:h-36 after:-top-5",
          "left-[calc((100% - 100vw) / 2)] md:right-0 after:right-0 after:bg-arabesco after:-scale-x-100",
          {
            "md:-left-2": !textLeft,
            "md:-right-1 md:after:left-0 md:after:scale-x-100": textLeft,
          }
        )}
      />
      <PrismicNextLink {...props} className="btn z-10">
        {children}
      </PrismicNextLink>
    </div>
  );
};

interface TextSectionProps {
  children: React.ReactNode;
  textLeft: boolean;
  className?: string;
}

interface TextSectionCoumpound extends React.FC<TextSectionProps> {
  Image: typeof Image;
  Text: typeof Text;
  Link: typeof Link;
  Body: typeof Body;
}

export const TextSection: TextSectionCoumpound = ({
  children,
  textLeft,
  className,
}) => {
  const componentWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        textLeft,
      } as any);
    }
    return child;
  });

  return (
    <div
      className={
        clsx("max-w-[80vw] md:max-w-6xl mx-auto",
              "grid md:grid-cols-2",
              "items-center",
              "mb-20 md:mb-32 last:mb-0",
              className
            )}
    >
      {componentWithProps}
    </div>
  );
};

TextSection.Image = Image;
TextSection.Text = Text;
TextSection.Link = Link;
TextSection.Body = Body;
