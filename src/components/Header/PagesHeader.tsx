import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";

export const PagesHeader = () => {
  return (
    <header className="relative w-full z-50 bg-secondary">
      <div className="max-w-7xl md:max-w-[80%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <PrismicNextLink href="/" className="relative w-48 h-20">
            <Image
              src="/logo1.svg"
              alt="Ndy Clicks"
              fill
              className="object-contain"
              priority
            />
          </PrismicNextLink>

          <nav className="flex items-center gap-8">
            <PrismicNextLink href="/" className="btn-reverse">
              Voltar
            </PrismicNextLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
