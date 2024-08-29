import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string }
type Arguments = { params: Params }

export async function generateMetadata({ params }: Arguments): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("page", params.uid).catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default function Page({ params }: Arguments) {
  return (
    <div>Page {params.uid}</div>
  )
}
