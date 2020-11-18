import React from 'react'

function Layout(props) {
  const { children } = props
  return (
    <div className="container">
      {children}
    </div>
  )
}
export default Layout
