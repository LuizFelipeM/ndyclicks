import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl md:max-w-[80%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-48 h-20">
            <Image
              src="/logo1.svg"
              alt="Ndy Clicks"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <nav className="flex items-center gap-8">
            <Link href="/contato" className="btn">
              Contanto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
