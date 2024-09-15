import React from 'react'
import { PostCard } from './PostCard'
import { Content } from '@prismicio/client'
import "./PostGallery.css"

/**
 * Props for `PostGrid`.
 */
type PostGridProps = {
  posts?: Content.PostDocument<string>[]
  cols?: number
  showPostTitles: boolean
}

/**
 * Component for "PostGrid" component.
 */
export const PostGrid: React.FC<PostGridProps> = ({ posts, showPostTitles, cols = 4 }) => (
  <div
    style={{ "--cols": cols }}
    className="my-3 grid gap-8 lg:gap-16 grid-cols-1 post-grid"
  >
    {posts?.map(post => (
      <PostCard
        key={post.id}
        post={post}
        showTitle={showPostTitles} />
    ))}
  </div>
)
