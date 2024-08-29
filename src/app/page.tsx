import type { Metadata } from "next";
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

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
    <main className="px-4 py-8 mt-0">
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
