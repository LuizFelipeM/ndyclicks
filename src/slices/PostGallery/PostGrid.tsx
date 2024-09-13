"use client"
import React, { useEffect, useRef } from 'react'
import { PostCard } from './PostCard'
import { Content } from '@prismicio/client'
import "./PostGallery.css"

/**
 * Props for `PostGrid`.
 */
type PostGridProps = {
  posts?: Content.PostDocument<string>[]
  cols: number | undefined
  showPostTitles: boolean
}

/**
 * Component for "PostGrid" component.
 */
export const PostGrid: React.FC<PostGridProps> = ({ posts, cols, showPostTitles }) => {
  const postGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => postGridRef.current?.style.setProperty("--cols", String(cols)), [postGridRef, cols])

  useEffect(() => {
    console.log('showPostTitles', showPostTitles)
  }, [showPostTitles])

  return (
    <div
      ref={postGridRef}
      className="my-3 grid gap-8 lg:gap-16 post-grid"
    >
      {posts?.map(post => <PostCard key={post.id} post={post} showTitle={showPostTitles} />)}
    </div>
  )
}
