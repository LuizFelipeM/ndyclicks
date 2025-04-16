import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", "home").catch(() => notFound());

  return (
    <main className="min-h-screen">
      {/* <SliceZone slices={page.data.slices} components={components} /> */}

      {/* Hero Section */}
      <section className="relative h-screen bg-secondary-dark/20">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-abhaya font-extrabold text-6xl md:text-8xl text-white mb-4">
            Agende sua Sessão
          </h1>

          {/* TODO: Mover o after e before do p para um arquivo css */}
          <p
            className="
            flex items-center gap-2
            font-abhaya text-3xl md:text-5xl text-white
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-direita.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-esquerda-BRANCO.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            Eventos
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="
            flex items-center justify-center gap-2
            font-abhaya font-extrabold text-3xl md:text-4xl text-primary mb-4
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-botao-direita-MARROM.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-botao-esquerda-MARROM.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            Portfólio
          </h2>
          <p className="text-secondary-dark max-w-2xl mx-auto mb-12">
            O impacto que sua marca precisa começa com imagens que chamam
            atenção.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
          <div className="overflow-hidden relative  aspect-[6/7] rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px] border-b">
            {/* talvez adicionar max-w-[390px] caso necessário */}
            <Image
              src="/example.avif"
              alt="Eventos e ensaios"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left h-full flex flex-col">
            <div className="text-primary m-auto mx-10">
              <h2
                className="
              font-abhaya font-extrabold text-center text-3xl md:text-4xl mb-4
              after:content-[''] after:m-auto after:block after:w-32 after:h-5 after:bg-[url('/divisa-marrom-PEQUENA.svg')] after:bg-contain after:bg-no-repeat after:bg-center"
              >
                Eventos e ensaios
              </h2>
              <p className="mb-6 text-left text-xl md:text-2xl">
                Nossos ensaios e eventos são registrados com olhar sensível e
                composição cuidadosa. Cada projeto destaca a beleza dos
                detalhes.
              </p>
            </div>
            <div
              className="relative flex px-10 py-7 bg-secondary
              after:content-[''] after:w-44 after:h-36 after:absolute after:-top-5 after:right-0
              after:bg-[url('/arabesco.svg')] after:bg-contain after:bg-no-repeat after:bg-center after:scale-x-[-1]"
            >
              <Link href="/portfolio" className="btn">
                Confira
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Market Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left md:order-2">
            <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-primary mb-4">
              Mercado Pet
            </h2>
            <p className="text-secondary-dark mb-6">
              As fotos para o mercado pet juntam cores vivas e arranjos bem
              pensados, mostrando a alma das peças e o carinho em cada
              acessório.
            </p>
            <Link href="/mercado-pet" className="btn">
              Confira
            </Link>
          </div>
          <div className="relative aspect-square md:order-1">
            <Image
              src="/fotografias.png"
              alt="Mercado Pet"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary-dark/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square">
            <Image
              src="/fotografias.png"
              alt="Culinária"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-primary mb-4">
              Culinária
            </h2>
            <p className="text-secondary-dark mb-6">
              Nossas fotografias destacam a harmonia das cores, das formas e dos
              detalhes. Cada imagem valoriza o capricho presente em cada mesa.
            </p>
            <Link href="/culinaria" className="btn">
              Confira
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-primary mb-12">
            Depoimentos
          </h2>
          <p className="text-secondary-dark mb-8">
            Histórias reais de pessoas reais que experienciaram ter momentos
            mágicos registrados.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial cards would go here - this is a placeholder */}
            <div className="bg-secondary-dark/20 p-6 rounded-lg">
              <p className="text-primary italic mb-4">
                "Estou emocionada! Nunca tinha um registro da minha barriga que
                realmente amasse — agora tenho. As fotos ficaram perfeitas!"
              </p>
              <p className="font-bold text-primary">- Ana Carolina</p>
            </div>
            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}
