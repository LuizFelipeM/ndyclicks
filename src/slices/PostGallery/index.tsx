import { RichText } from "@/components/RichText";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";
import { PostGrid } from "./PostGrid";

/**
 * Props for `PostGallery`.
 */
export type PostGalleryProps = SliceComponentProps<Content.PostGallerySlice>;

/**
 * Component for "PostGallery" Slices.
 */
const PostGallery = async ({
  slice,
}: PostGalleryProps): Promise<JSX.Element> => {
  const client = createClient();
  const posts = await client
    .getAllByType("post", {
      // TODO: Verificar se é possível pegar o short_description
      graphQuery: `{
        post {
          title
          thumbnail
          short_description
        }
      }`,
    })
    .catch(() => console.error("Error getting posts list"));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mb-14 md:mb-32 mx-4 md:mx-8"
    >
      <div className="max-w-6xl mx-auto text-center mb-14 md:mb-32">
        {isFilled.richText(slice.primary.title) && (
          <RichText field={slice.primary.title} />
        )}

        {isFilled.richText(slice.primary.subtitle) && (
          <RichText field={slice.primary.subtitle} />
        )}
      </div>

      <PostGrid posts={posts!} />
    </section>
  );
};

export default PostGallery;
