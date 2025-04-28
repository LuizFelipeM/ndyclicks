import React from "react";
import { PostCard } from "./PostCard";
import { Content } from "@prismicio/client";

/**
 * Props for `PostGrid`.
 */
type PostGridProps = {
  posts?: Content.PostDocument<string>[];
};

/**
 * Component for "PostGrid" component.
 */
export const PostGrid: React.FC<PostGridProps> = ({ posts }) =>
  posts?.map((post, index) => (
    <PostCard
      key={post.id}
      post={post}
      isTextLeft={index % 2 !== 0}
    />
  ));
