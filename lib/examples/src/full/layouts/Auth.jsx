import React from 'react'

function Auth(props) {
  const { children } = props
  return (
    <div className="vw-100 vh-100 d-flex flex-row justify-content-center align-items-center">
      { children }
    </div>
  )
}

export default Auth
