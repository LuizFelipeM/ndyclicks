import { JSXMapSerializer } from "@prismicio/react";

export const TextComponents: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="font-semibold leading-tight tracking-wide md:leading-tight text-4xl md:text-5xl">
      {children}
    </h2>
  ),
  strong: ({ children }) => (
    <strong className="text-primary">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="text-secondary-olive-dark font-serif">
      {children}
    </em>
  )
}