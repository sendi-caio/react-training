import React from 'react'
import { useDispatch } from 'react-redux'

function ButtonLogOut(props) {
  const dispatch = useDispatch()

  function handleLogOut() {
    dispatch({ type: 'loggedOut' })
  }

  return (
    <button type="button" onClick={handleLogOut} {...props}>
      Log Out
    </button>
  )
}

export default ButtonLogOut
