import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";

export const HomeHeader = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl md:max-w-[80%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <PrismicNextLink href="/" className="relative w-32 h-16 md:w-48 md:h-20">
            <Image
              src="/logo1.svg"
              alt="Ndy Clicks"
              fill
              className="object-contain"
              priority
            />
          </PrismicNextLink>

          <nav className="flex items-center gap-8">
            <PrismicNextLink href="/contato" className="btn">
              Contato
            </PrismicNextLink>
          </nav>
        </div>
      </div>
    </header>
  );
}; 