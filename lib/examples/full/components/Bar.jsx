import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
// import ThemesSelect from './ThemesSelect'

const links = [
  ['/', 'Home'],
  ['/login', 'Login'],
  ['/register', 'Register'],
  ['/posts', 'Posts List'],
  ['/paginated-posts', 'Paginated Posts List'],
  ['/posts/create', 'Create New Posts'],
  ['/upload', 'Upload'],
]

function Bar(props) {
  const location = useLocation()
  const [show, setShow] = useState(false)
  const { title } = props
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className={clsx('navbar-toggler', show && 'collapsed')} type="button" onClick={() => setShow(!show)}>
        <span className="navbar-toggler-icon" />
      </button>
      { title && <a className="navbar-brand">{title}</a>}

      <div className={clsx('collapse', 'navbar-collapse', show && 'show')}>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {
            links.map(([to, linkTitle]) => (
              <li key={to} className={clsx('nav-item', location.pathname === to && 'active')}>
                <Link className="nav-link" to={to}>
                  {linkTitle}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      {/* <ThemesSelect /> */}
    </nav>
  )
}

export default Bar
