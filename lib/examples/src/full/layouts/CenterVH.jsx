import React from 'react'

function CenterVH(props) {
  const { children, style } = props
  return (
    <div className="container vh-100" style={style}>
      <div className="row vh-100">
        <div className="col align-self-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CenterVH
