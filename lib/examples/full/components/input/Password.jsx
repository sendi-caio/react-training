import React, { useState } from 'react'

function Text(props) {
  const { id, label, name, error, inputRef } = props
  const [show, setShow] = useState(false)
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
      </label>
      <div className="input-group">
        <input
          spellCheck={false}
          autoComplete="off"
          type={show ? 'text' : 'password'}
          className="form-control"
          name={name}
          id={id}
          ref={inputRef}
        />
        <div className="input-group-append">
          <button onClick={() => setShow(!show)} type="button" className="btn btn-primary">
            <i className={`far fa-${show ? 'eye-slash' : 'eye'}`} />
          </button>
        </div>
      </div>
      <small
        className="form-text text-muted"
      >
        { error || '\u00A0' }
      </small>
    </div>
  )
}

export default Text
