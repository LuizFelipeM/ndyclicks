import { createClient } from "@/prismicio";
import { asLinkAttrs, Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React from "react";

const components: JSXMapSerializer = {
  heading3: ({ children }) => (
    <h3 className="text-white-smoke font-Roboto">
      {children}
    </h3>
  ),
};

/**
 * Props for `PostCard`.
 */
type PostCardProps = { key?: string, post: Content.PostDocument<string> }

/**
 * Component "PostCard".
 */
const PostCard: React.FC<PostCardProps> = ({ post }): JSX.Element => {
  const { href, ...attributes } = asLinkAttrs(post)
  return (
    <div className="img-group">
      <PrismicNextLink href={href!} {...attributes}>
        <PrismicNextImage field={post.data.thumbnail} className="mb-2 rounded-lg object-cover min-w-[180px]" />
        <PrismicRichText field={post.data.title} components={components} />
      </PrismicNextLink>
    </div>
  )
}

/**
 * Props for `PostGallery`.
 */
export type PostGalleryProps = SliceComponentProps<Content.PostGallerySlice>;

/**
 * Component for "PostGallery" Slices.
 */
const PostGallery = async ({ slice }: PostGalleryProps): Promise<JSX.Element> => {
  const client = createClient();
  const posts = await client
    .getAllByType("post", {
      graphQuery: `{
        post {
          title
          thumbnail
        }
      }`
    })
    .catch(() => console.error("Error getting posts list"));

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-3 grid gap-4 grid-cols-2 md:grid-cols-4"
    >
      {posts?.map(post => <PostCard key={post.id} post={post} />)}
    </section>
  );
};

export default PostGallery;
