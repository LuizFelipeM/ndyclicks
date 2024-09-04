import { Button } from "@/components/Button";
import { RichText } from "@/components/ReachText";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string }
type PostProps = { params: Params }

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const client = createClient();
  const post = await client
    .getByUID("post", params.uid)
    .catch(() => notFound());

  return {
    title: asText(post.data.title),
    description: post.data.meta_description,
    openGraph: {
      title: post.data.meta_title ?? undefined,
      images: [{ url: post.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Post({ params }: PostProps) {
  const client = createClient();
  const post = await client
    .getByUID("post", params.uid, {
      graphQuery: `{
        post {
          title
          slices
        }
      }`
    })
    .catch(() => notFound());

  return (
    <main className="px-4 py-8 mt-0">
      <section className="mb-7 flex flex-row items-center">
        <RichText field={post.data.title} className="text-rose flex-1 m-0" overrideDefaultClassName />
        <Button href="/" icon={faArrowLeft}>
          Projetos
        </Button>
      </section>
      <SliceZone slices={post.data.slices} components={components} />
    </main>
  )
}
