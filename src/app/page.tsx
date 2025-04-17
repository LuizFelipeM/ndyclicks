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
      <section className="overflow-hidden relative h-[73vh] bg-[#6767676E] bg-[url('/example.avif')] bg-blend-luminosity bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-abhaya font-extrabold text-hero-title text-white mb-4">
            Agende sua Sessão
          </h1>

          {/* TODO: Mover o after e before do p para um arquivo css */}
          <p
            className="
            flex items-center gap-2
            font-abhaya text-title text-white
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-direita.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-esquerda-BRANCO.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            Eventos
          </p>
        </div>

        {/* <div className="w-2/6 h-4/6 absolute -bottom-full -translate-y-full left-1/2 -translate-x-1/2 "> */}
        <div className="w-2/6 h-4/6 absolute -bottom-80 left-1/2 -translate-x-1/2 ">
          <div className="w-[21rem] h-[32rem] p-3 z-10 absolute left-1/3 -translate-x-1/2 border-[14px] border-white shadow-md -rotate-[22deg]">
            <Image
              src="/example2.avif"
              alt="Mercado Pet"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-[21rem] h-[32rem] p-3 z-20 absolute right-1/3 translate-x-1/2 border-[14px] border-white shadow-md rotate-[22deg]">
            <Image
              src="/example2.avif"
              alt="Mercado Pet"
              fill
              className="object-cover"
            />
          </div>
          {/* <Image
            src="/fotografias.png"
            alt="Eventos e ensaios"
            fill
            className="object-contain"
          /> */}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="
            flex items-center justify-center gap-2
            font-abhaya font-extrabold text-title text-primary mb-4
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-botao-direita-MARROM.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-botao-esquerda-MARROM.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            Portfólio
          </h2>
          <p className="text-paragraph text-primary max-w-2xl mx-auto">
            O impacto que sua marca precisa começa com imagens que chamam
            atenção.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="pb-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
          <div className="overflow-hidden relative aspect-[6/7] rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]">
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
                font-abhaya font-extrabold text-center text-subtitle mb-4
                after:content-[''] after:m-auto after:block after:w-52 after:h-8 after:mt-4 after:bg-[url('/divisa-marrom-PEQUENA.svg')] after:bg-contain after:bg-no-repeat after:bg-center"
              >
                Eventos e ensaios
              </h2>
              <p className="mb-6 text-left text-paragraph">
                Nossos ensaios e eventos são registrados com olhar sensível e
                composição cuidadosa. Cada projeto destaca a beleza dos
                detalhes.
              </p>
            </div>
            <div
              className="relative flex px-10 py-7 bg-secondary
              after:content-[''] after:w-44 after:h-36 after:absolute after:-top-5 after:right-0
              after:bg-arabesco-right"
            >
              <Link href="/portfolio" className="btn">
                Confira
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Market Section */}
      <section className="pb-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
          <div className="text-left h-full flex flex-col">
            <div className="text-primary m-auto mx-10">
              <h2
                className="
              font-abhaya font-extrabold text-center text-subtitle mb-4
              after:content-[''] after:m-auto after:block after:w-52 after:h-8 after:mt-4 after:bg-[url('/divisa-marrom-PEQUENA.svg')] after:bg-contain after:bg-no-repeat after:bg-center"
              >
                Mercado Pet
              </h2>
              <p className="mb-6 text-left text-paragraph">
                As fotos para o mercado pet juntam cores vivas e arranjos bem
                pensados, mostrando a alma das peças e o carinho em cada
                acessório.
              </p>
            </div>
            <div
              className="relative flex justify-end px-10 py-7 bg-secondary
              after:content-[''] after:w-44 after:h-36 after:absolute after:-top-5 after:left-0
              after:bg-arabesco-left"
            >
              <Link href="/mercado-pet" className="btn">
                Confira
              </Link>
            </div>
          </div>

          <div className="overflow-hidden relative aspect-[6/7] rounded-tr-md rounded-bl-md rounded-tl-[80px] rounded-br-[80px]">
            <Image
              src="/example2.avif"
              alt="Mercado Pet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="pb-16 px-4 md:px-8 bg-secondary-dark/10">
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
      <section className="pb-16 px-4 md:px-8">
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
