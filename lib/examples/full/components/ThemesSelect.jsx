import React, { useState } from 'react'
import clsx from 'clsx'
import { useSelector, useDispatch } from 'react-redux'

function ThemesSelect() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const activeTheme = useSelector(state => state.ui.activeTheme)
  const themes = useSelector(state => state.ui.themes)
  return (
    <div className="dropdown">
      <button onClick={() => setShow(!show)} className="btn btn-secondary dropdown-toggle" type="button" id="theme-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded={show}>
        { activeTheme }
      </button>
      <div className={clsx('dropdown-menu', 'dropdown-menu-right', 'btn-sm', show && 'show')} aria-labelledby="theme-select">
        {
          themes.map((theme) => (
            <button
              key={theme}
              className={clsx('dropdown-item', 'btn-sm', (activeTheme === theme) && 'active')}
              type="button"
              onClick={() => dispatch({
                type: 'ui.changeTheme',
                theme,
              })}
            >
              { theme }
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default ThemesSelect
