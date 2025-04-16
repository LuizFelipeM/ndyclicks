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
      <section className="relative h-screen bg-olive/20">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-inspiration text-6xl md:text-8xl text-brown mb-4">
            Agende sua Sessão
          </h1>
          <p className="font-abhaya text-xl md:text-2xl text-brown">Eventos</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-brown mb-4">
            Portfólio
          </h2>
          <p className="text-olive max-w-2xl mx-auto mb-12">
            O impacto que sua marca precisa começa com imagens que chamam atenção.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-8 bg-olive/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[3/4]">
            <Image
              src="/fotografias.png"
              alt="Eventos e ensaios"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-brown mb-4">
              Eventos e ensaios
            </h2>
            <p className="text-olive mb-6">
              Nossos ensaios e eventos são registrados com olhar sensível e composição cuidadosa. Cada projeto destaca a beleza dos detalhes.
            </p>
            <Link
              href="/portfolio"
              className="btn"
            >
              Confira
            </Link>
          </div>
        </div>
      </section>

      {/* Pet Market Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left md:order-2">
            <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-brown mb-4">
              Mercado Pet
            </h2>
            <p className="text-olive mb-6">
              As fotos para o mercado pet juntam cores vivas e arranjos bem pensados, mostrando a alma das peças e o carinho em cada acessório.
            </p>
            <Link
              href="/mercado-pet"
              className="btn"
            >
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
      <section className="py-16 px-4 md:px-8 bg-olive/10">
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
            <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-brown mb-4">
              Culinária
            </h2>
            <p className="text-olive mb-6">
              Nossas fotografias destacam a harmonia das cores, das formas e dos detalhes. Cada imagem valoriza o capricho presente em cada mesa.
            </p>
            <Link
              href="/culinaria"
              className="btn"
            >
              Confira
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-abhaya font-extrabold text-3xl md:text-4xl text-brown mb-12">
            Depoimentos
          </h2>
          <p className="text-olive mb-8">
            Histórias reais de pessoas reais que experienciaram ter momentos mágicos registrados.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial cards would go here - this is a placeholder */}
            <div className="bg-olive/20 p-6 rounded-lg">
              <p className="text-brown italic mb-4">
                "Estou emocionada! Nunca tinha um registro da minha barriga que realmente amasse — agora tenho. As fotos ficaram perfeitas!"
              </p>
              <p className="font-bold text-brown">- Ana Carolina</p>
            </div>
            {/* Add more testimonial cards as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}
