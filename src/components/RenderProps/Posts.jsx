import React from "react"

export const Posts = ({ posts }) => {

  return (
    <div>
      {posts.map(post => <div style={{padding: '10px'}} key={post.id}>{post.title}</div>)}
    </div>
  )
}