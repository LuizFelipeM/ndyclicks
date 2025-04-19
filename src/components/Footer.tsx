import Image from "next/image";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full bg-secondary py-10">
      <div className="relative w-48 h-12 max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo2.svg" alt="Logo" fill className="object-contain" />
        </Link>
      </div>
      <div className="relative flex items-center justify-center gap-3 max-w-screen-xl mx-auto px-4 text-center text-white text-footer py-4">
        <a
          href="https://www.instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest size={25} />
        </a>
        <a
          href="https://www.instagram.com/seuperfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill size={25} />
        </a>
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <p className="text-center text-white text-footer">
          © 2025 Nome da Empresa.
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
