import { Button } from "@/components/Button";
import { Heading } from "@/components/Heading";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, asLinkAttrs } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { useEffect } from "react";

/**
 * Components map for `PrismicRichText`.
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h3" size="sm">
      {children}
    </Heading>
  ),
};

/**
 * Props for `PostCard`.
 */
type PostCardProps = {
  post: Content.PostDocument<string>
  showTitle: boolean
}

/**
 * Component "PostCard".
 */
export const PostCard: React.FC<PostCardProps> = ({ post, showTitle }): JSX.Element => {
  const { href, ...attributes } = asLinkAttrs(post)

  useEffect(() => {
    console.log('showTitle', showTitle)
  }, [showTitle])

  return (
    <div className="img-group text-center">
      <PrismicNextLink {...attributes} href={href!} className="text-center">
        <PrismicNextImage field={post.data.thumbnail} className="mb-4 rounded-lg object-cover min-w-[180px]" />
        {showTitle &&
          <PrismicRichText
            field={post.data.title}
            components={components}
          />}
      </PrismicNextLink>
      <Button href={href!} className="mt-3">
        Confira
        <FontAwesomeIcon icon={faArrowRight} className="ml-1.5" />
      </Button>
    </div>
  )
}