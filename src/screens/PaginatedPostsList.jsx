import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DashboardLayout from '../layouts/Dashboard'
import { getPaginatedPost } from '../services/api'
import PostCard from '../components/PostCard'
import PaginationInput from '../components/PaginationInput'
import Pagination from '../components/Pagination'
function PostsList() {
  const routeParams = useParams()
  const { page } = routeParams
  const [posts, setPosts] = useState([])
  const [params, setParams] = useState([1, 2])
  const [total, setTotal] = useState(1)

  useEffect(() => {
    const [, perPage] = params
    getPaginatedPost(page, perPage).then(
      (response) => {
        const serverTotal = response.headers['x-total-count']
        setTotal(serverTotal)
        setPosts(response.data)
      },
    )
  }, [params, page])

  function handlePaginate(data) {
    setParams([data.page, data.perPage])
  }

  return (
    <DashboardLayout>
      <PaginationInput onPaginate={handlePaginate} />
      <Pagination total={total} perPage={params[1]} />
      {
        posts.length > 0 && posts.map((post) => (<PostCard key={post.id} post={post} />))
      }
      {
        posts.length < 1 && (<p>Tidak Ada Data</p>)
      }
    </DashboardLayout>
  )
}

export default PostsList
