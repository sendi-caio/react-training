import React from 'react'
import { useHistory } from 'react-router-dom'

function BackButton() {
  const history = useHistory()
  function handleClick() {
    history.goBack()
  }
  return (
    <button type="button" className="btn btn-secondary" onClick={(handleClick)}>Kembali</button>
  )
}

export default BackButton
