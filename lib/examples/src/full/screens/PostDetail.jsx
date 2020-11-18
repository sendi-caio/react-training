import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardLayout from '../layouts/Dashboard'
import DetailPosts from '../components/form/DetailPosts'
import { getPostById } from '../services/api'

function PostsDetail() {
  const params = useParams()
  const [post, setPost] = useState()
  const { postId } = params

  useEffect(() => {
    getPostById(postId).then(
      response => {
        setPost(response.data)
      },
    )
  }, [postId])

  return (
    <DashboardLayout>
      { post && <DetailPosts post={post} /> }
    </DashboardLayout>
  )
}

export default PostsDetail
