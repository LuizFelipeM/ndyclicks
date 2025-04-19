import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { TestimonialCard } from "@/components/TestimonialCard";

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

const testimonials = [
  {
    id: 1,
    imageSrc: "/foto-ana.avif",
    testimonial:
      "Estou emocionada! Nunca tinha um registro da minha barriga que realmente amasse - agora tenho. As fotos ficaram perfeitas [...] Muito obrigada!",
    author: "Ana Carolina",
  },
  {
    id: 2,
    imageSrc: "/testimonial2.jpg",
    testimonial:
      "Uma experiência incrível! As fotos capturaram exatamente o que eu queria transmitir. Cada detalhe foi pensado com muito carinho.",
    author: "Maria Silva",
  },
  {
    id: 3,
    imageSrc: "/testimonial3.jpg",
    testimonial:
      "Um olhar único e sensível que transformou momentos em memórias eternas. Gratidão por todo o profissionalismo.",
    author: "Ana Oliveira",
  },
];

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
          <div className="relative z-10 overflow-hidden aspect-[6/7] rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]">
            {/* talvez adicionar max-w-[390px] caso necessário */}
            <Image
              src="/example.avif"
              alt="Eventos e ensaios"
              fill
              className="object-cover z-10"
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
            <div className="relative flex px-10 py-7 bg-secondary">
              <div
                className="
                z-0 absolute w-screen max-w-[50vw] h-full top-0 -left-2 bg-secondary
                after:z-0 after:absolute after:content-[''] after:w-44 after:h-36 after:-top-5 after:right-0 after:bg-arabesco-right"
              />
              <Link href="/portfolio" className="btn z-10">
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
              className="relative flex justify-end px-10 py-7 bg-secondary"
            >
              <div
                className="
                z-0 absolute w-screen max-w-[50vw] h-full top-0 -right-2 bg-secondary
                after:z-0 after:absolute after:content-[''] after:w-44 after:h-36 after:-top-5 after:left-0 after:bg-arabesco-left"
              />
              <Link href="/mercado-pet" className="btn z-10">
                Confira
              </Link>
            </div>
          </div>

          <div className="relative z-10 overflow-hidden aspect-[6/7] rounded-tr-md rounded-bl-md rounded-tl-[80px] rounded-br-[80px]">
            <Image
              src="/example2.avif"
              alt="Mercado Pet"
              fill
              className="object-cover z-10"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center pb-32 px-4 md:px-8">
          <h2
            className="
            flex items-center justify-center gap-2
            font-abhaya font-extrabold text-title text-primary mb-4
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-botao-direita-MARROM.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-botao-esquerda-MARROM.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
          >
            Depoimentos
          </h2>
          <p className="text-paragraph text-primary max-w-2xl mx-auto">
            Histórias reais de pessoas reais que experienciaram ter momentos
            mágicos registrados.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <TestimonialSlider>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                imageSrc={testimonial.imageSrc}
                testimonial={testimonial.testimonial}
                author={testimonial.author}
                // isActive={testimonial.isActive}
              />
            ))}
          </TestimonialSlider>
        </div>
      </section>
    </main>
  );
}
