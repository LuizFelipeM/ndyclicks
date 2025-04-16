import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-32 h-12">
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
