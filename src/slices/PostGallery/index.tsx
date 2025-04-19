import { RichText } from "@/components/RichText";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, SliceComponentProps } from "@prismicio/react";
import React from "react";
import { PostGrid } from "./PostGrid";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h2
      className="
            flex items-center justify-center gap-2
            font-abhaya font-extrabold text-title text-primary mb-4
            after:content-[''] after:block after:w-32 after:h-5 after:bg-[url('/semi-divisa-botao-direita-MARROM.svg')] after:bg-contain after:bg-no-repeat after:bg-center
            before:content-[''] before:block before:w-32 before:h-5 before:bg-[url('/semi-divisa-botao-esquerda-MARROM.svg')] before:bg-contain before:bg-no-repeat before:bg-center"
    >
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className="text-paragraph text-primary max-w-2xl mx-auto">{children}</p>
  ),
};
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
        }
      }`,
    })
    .catch(() => console.error("Error getting posts list"));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-32 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto text-center mb-32">
        {isFilled.richText(slice.primary.title) && (
          // <RichText field={slice.primary.title} />
          <RichText components={components} field={slice.primary.title} />
        )}

        {isFilled.richText(slice.primary.subtitle) && (
          <RichText components={components} field={slice.primary.subtitle} />
        )}
      </div>

      <PostGrid
        posts={posts!}
        showPostTitles={slice.primary.show_post_titles}
      />
    </section>
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 lg:px-16"
    >
      <div className="text-center mb-6">
        {isFilled.richText(slice.primary.title) && (
          <RichText field={slice.primary.title} />
        )}
        {isFilled.richText(slice.primary.subtitle) && (
          <RichText field={slice.primary.subtitle} />
        )}
      </div>
      <PostGrid
        posts={posts!}
        showPostTitles={slice.primary.show_post_titles}
        // cols={
        //   isFilled.number(slice.primary.cols) ? slice.primary.cols : undefined
        // }
      />
    </section>
  );
};

export default PostGallery;
