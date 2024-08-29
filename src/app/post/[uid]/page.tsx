import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
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
    .getByUID("post", params.uid)
    .catch(() => notFound());

  return (
    <div>Post</div>
  )
}
