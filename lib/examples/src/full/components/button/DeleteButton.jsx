/* eslint-disable no-unused-vars */

import React from 'react'
import { useHistory } from 'react-router-dom'
import { deletePost } from '../../services/api'

function DeleteButton(props) {
  const { postId } = props
  const history = useHistory()

  function handleDelete() {
    deletePost(postId).then(
      () => history.push('/posts'),
    )
  }
  return (
    <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
  )
}

export default DeleteButton
