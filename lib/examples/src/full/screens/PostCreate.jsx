import React from 'react'
import DashboardLayout from '../layouts/Dashboard'
import CreatePosts from '../components/form/CreatePosts'

function PostsList() {
  return (
    <DashboardLayout>
      <CreatePosts />
    </DashboardLayout>
  )
}

export default PostsList
