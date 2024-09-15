import { JSXMapSerializer } from "@prismicio/react";

export const HeroComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1
      className="
        mb-6 mt-12 first:mt-0 last:mb-0
        text-rose text-shadow-md font-serif font-extrabold
        tracking-tighter leading-none md:leading-tight
        text-[16vw] md:text-[6rem]
        fancy-wipe
      "
    >
      {/* <!-- Adapted fancy wipe animation provided by Jesse in https://codepen.io/Chester/pen/LYKWMxO --> */}
      <span className="block text">
        {children}
      </span>
      <span className="absolute top-0 left-0 w-full h-full wipe">
        {children}
      </span>
      <span className="absolute top-0 left-0 w-full h-full blur">
        {children}
      </span>
    </h1>
  ),
  heading2: ({ children }) => (
    <h2 className="text-2xl font-semibold tracking-wide">
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="mt-4 max-w-xs text-lg">
      {children}
    </p>
  )
};