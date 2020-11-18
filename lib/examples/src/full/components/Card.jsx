import React from 'react'
import clsx from 'clsx'

function Card(props) {
  const { className, title, children, style } = props
  const classes = clsx(
    'card',
    className && `${className}`,
  )
  return (
    <div className={classes} style={style}>
      <div className="card-body">
        {
          title && <h5 className="card-title text-center">{title}</h5>
        }
        {children}
      </div>
    </div>
  )
}

export default Card
