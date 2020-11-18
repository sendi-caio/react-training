/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../layouts/Dashboard'
import { getPost } from '../services/api'
import PostCard from '../components/PostCard'
function PostsList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost().then(
      (response) => {
        setPosts(response.data)
      },
    )
  }, [])

  function handleDelete() {
  }

  return (
    <DashboardLayout>
      {
        posts.length > 0 && posts.map((post) => (<PostCard onDelete={handleDelete} key={post.id} post={post} />))
      }
      {
        posts.length < 1 && (<p>Tidak Ada Data</p>)
      }
    </DashboardLayout>
  )
}

export default PostsList
