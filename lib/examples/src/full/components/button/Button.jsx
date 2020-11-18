import React from 'react'
import clsx from 'clsx'

function Button(props) {
  const { color, children, submit, block, className, restProps } = props

  const classes = clsx(
    'btn',
    block && 'btn-block',
    className && `${className}`,
    color && `btn-${color}`,
  )

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={classes}
      {...restProps}
    >
      { children }
    </button>
  )
}

export default Button
