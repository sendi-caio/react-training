import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import ButtonLogOut from './ButtonLogOut'

const styling = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  minWidth: '100px',
}

const links = [
  ['/', 'Home'],
  ['/login', 'Login'],
  ['/register', 'Register'],
  ['/additional', 'Additional'],
  ['/media-query', 'MediaQuery'],
]

function HelperNavigation() {
  const [show, setShow] = useState(false)
  return (
    <nav style={styling} className="list-group">
      {show && (
        <Fragment>
          {
            links.map(([to, title]) => (
              <Link key={to} to={to} className="list-group-item">{title}</Link>
            ))
          }
          <ButtonLogOut className="list-group-item" />
        </Fragment>
      )}
      <button type="button" className="list-group-item active" onClick={() => setShow(!show)}>Show</button>
    </nav>
  )
}
export default HelperNavigation
