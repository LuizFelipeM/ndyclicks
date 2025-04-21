import { Content, asLinkAttrs, isFilled } from "@prismicio/client";
import { RichText } from "@/components/RichText";
import { TextSection } from "@/components/TextSection";

/**
 * Props for `PostCard`.
 */
type PostCardProps = {
  post: Content.PostDocument<string>;
  showTitle: boolean;
  isTextLeft?: boolean;
};

/**
 * Component "PostCard".
 */
export const PostCard: React.FC<PostCardProps> = ({
  post,
  showTitle,
  isTextLeft,
}): JSX.Element => {
  const { href, ...attributes } = asLinkAttrs(post);

  return (
    <TextSection textLeft={isTextLeft ?? false}>
      <TextSection.Image image={post.data.thumbnail} />
      <TextSection.Body>
        <TextSection.Text>
          {showTitle && <RichText field={post.data.title} />}

          {isFilled.richText(post.data.short_description) && (
            <RichText field={post.data.short_description} />
          )}
        </TextSection.Text>
        <TextSection.Link {...attributes} href={href!}>Confira</TextSection.Link>
      </TextSection.Body>
    </TextSection>
  );
};
