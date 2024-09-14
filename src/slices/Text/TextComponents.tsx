import { JSXMapSerializer } from "@prismicio/react";

export const TextComponents: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="font-semibold leading-tight tracking-wide md:leading-tight text-4xl md:text-5xl">
      {children}
    </h2>
  ),
  strong: ({ children }) => (
    <strong className="text-savoy-blue">
      {children}
    </strong>
  ),
  em: ({ children }) => (
    <em className="text-rose font-serif">
      {children}
    </em>
  )
}