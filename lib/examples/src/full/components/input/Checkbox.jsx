import React from 'react'
import clsx from 'clsx'
function Checkbox(props) {
  const { id, label, name, inputRef, error, inline } = props
  return (
    <div className="form-group">
      <div className={clsx('form-check', inline && 'form-check-inline')}>
        <input className="form-check-input" type="checkbox" name={name} id={id} ref={inputRef} />
        <label className="form-check-label" htmlFor={id}>
          { label }
        </label>
      </div>
      <small
        className="form-text text-muted"
      >
        { error || '\u00A0' }
      </small>
    </div>
  )
}

export default Checkbox
