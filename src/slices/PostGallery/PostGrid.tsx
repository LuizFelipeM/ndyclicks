import React from "react";
import { PostCard } from "./PostCard";
import { Content } from "@prismicio/client";

/**
 * Props for `PostGrid`.
 */
type PostGridProps = {
  posts?: Content.PostDocument<string>[];
  cols?: number;
  showPostTitles: boolean;
};

/**
 * Component for "PostGrid" component.
 */
export const PostGrid: React.FC<PostGridProps> = ({ posts, showPostTitles }) =>
  posts?.map((post, index) => (
    <PostCard
      key={post.id}
      post={post}
      showTitle={showPostTitles}
      left={index % 2 === 0}
    />
  ));
