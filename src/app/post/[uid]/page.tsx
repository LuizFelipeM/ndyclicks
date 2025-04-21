import { ImageFullScreen } from "@/components/ImageFullScreen";
import { RichText } from "@/components/RichText";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { asText, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceZone } from "@prismicio/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string };
type PostProps = { params: Params };

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
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
      // TODO: Verificar se é possível pegar o short_description, show_short_description_on_post e show_thumbnail_on_post
      graphQuery: `{
        post {
          title
          thumbnail
          slices
        }
      }`,
    })
    .catch(() => notFound());

  return (
    <main className="min-h-screen">
      <section className="py-32 px-4 md:px-8">
        <div className="text-primary max-w-6xl mx-auto text-center">
          {isFilled.richText(post.data.title) && (
            <RichText field={post.data.title} />
          )}

          {post.data.show_short_description_on_post &&
            isFilled.richText(post.data.short_description) && (
              <RichText field={post.data.short_description} />
            )}
        </div>
      </section>
      {post.data.show_thumbnail_on_post &&
        isFilled.image(post.data.thumbnail) && (
          <section className="mb-20 px-4 md:px-8">
            <ImageFullScreen image={post.data.thumbnail} />
          </section>
        )}
      <SliceZone slices={post.data.slices} components={components} />
    </main>
  );
}
