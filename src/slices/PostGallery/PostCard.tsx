import { Content, asLinkAttrs, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { RichText } from "@/components/RichText";

/**
 * Props for `PostCard`.
 */
type PostCardProps = {
  post: Content.PostDocument<string>;
  showTitle: boolean;
  left?: boolean;
};

/**
 * Component "PostCard".
 */
export const PostCard: React.FC<PostCardProps> = ({
  post,
  showTitle,
  left,
}): JSX.Element => {
  const { href, ...attributes } = asLinkAttrs(post);

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center mb-32 last:mb-0">
      <div
        className={clsx("relative z-10 overflow-hidden aspect-[6/7]", {
          "order-first rounded-tl-md rounded-br-md rounded-tr-[80px] rounded-bl-[80px]":
            left,
          "order-last rounded-tr-md rounded-bl-md rounded-tl-[80px] rounded-br-[80px]":
            !left,
        })}
      >
        {isFilled.image(post.data.thumbnail) && (
          <PrismicNextImage
            field={post.data.thumbnail}
            fill
            className="object-cover z-10"
          />
        )}
      </div>

      <div className="text-left h-full flex flex-col">
        <div className="text-primary m-auto mx-10">
          {showTitle && <RichText field={post.data.title} />}

          {isFilled.richText(post.data.short_description) && (
            <RichText field={post.data.short_description} />
          )}
        </div>
        <div
          className={clsx("relative flex px-10 py-7 bg-secondary", {
            "justify-start": left,
            "justify-end": !left,
          })}
        >
          <div
            className={clsx(
              "z-0 absolute w-screen max-w-[50vw] h-full top-0 bg-secondary",
              "after:-z-10 after:absolute after:content-[''] after:w-44 after:h-36 after:-top-5",
              {
                "-left-2 after:right-0 after:bg-arabesco-right": left,
                "-right-1 after:left-0 after:bg-arabesco-left": !left,
              }
            )}
          />
          <PrismicNextLink {...attributes} href={href!} className="btn z-10">
            Confira
          </PrismicNextLink>
        </div>
      </div>
    </div>
  );
};
