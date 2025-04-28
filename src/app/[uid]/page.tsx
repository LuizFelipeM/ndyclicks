import { RichText } from "@/components/RichText";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { asText, isFilled } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string };
type Arguments = { params: Params };

export async function generateMetadata({
  params,
}: Arguments): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title ?? undefined,
      images: [{ url: page.data.meta_image.url ?? "" }],
    },
  };
}

export default async function Page({ params }: Arguments) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return (
    <main className="min-h-screen">
      <section className="py-32 px-4 md:px-8">
        <div className="text-primary m-auto mx-10">
          {isFilled.richText(page.data.title) && (
            <RichText field={page.data.title} />
          )}

          {isFilled.richText(page.data.short_description) && (
            <RichText field={page.data.short_description} />
          )}
        </div>
      </section>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
