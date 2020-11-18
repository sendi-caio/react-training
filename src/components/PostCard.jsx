import React from 'react'
import { Link } from 'react-router-dom'

function PostCard(props) {
  const { post } = props
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <Link className="btn btn-primary" to={`/posts/${post.id}`}>Detail</Link>
      </div>
    </div>
  )
}

export default PostCard
