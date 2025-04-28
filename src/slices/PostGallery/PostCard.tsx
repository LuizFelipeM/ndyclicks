import { Content, RTHeading1Node, asLinkAttrs, isFilled } from "@prismicio/client";
import { defaultComponents, RichText } from "@/components/RichText";
import { TextSection } from "@/components/TextSection";

/**
 * Props for `PostCard`.
 */
type PostCardProps = {
  post: Content.PostDocument<string>;
  isTextLeft?: boolean;
};

/**
 * Component "PostCard".
 */
export const PostCard: React.FC<PostCardProps> = ({
  post,
  isTextLeft,
}): JSX.Element => {
  const { href, ...attributes } = asLinkAttrs(post);

  return (
    <TextSection textLeft={isTextLeft ?? false}>
      <TextSection.Image image={post.data.thumbnail} />
      <TextSection.Body>
        <TextSection.Text>
          {isFilled.richText(post.data.title) && (
            <RichText
              field={post.data.title}
              components={{
                heading1: defaultComponents({}).heading2 as any,
              }}
            />
          )}

          {isFilled.richText(post.data.short_description) && (
            <RichText field={post.data.short_description} />
          )}
        </TextSection.Text>
        <TextSection.Link {...attributes} href={href!}>
          Confira
        </TextSection.Link>
      </TextSection.Body>
    </TextSection>
  );
};
