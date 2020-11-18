import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function RedirectLogin(props) {
  const { children, to, isLoggedIn } = props
  return (
    <Fragment>
      {!isLoggedIn ? children : (<Redirect to={to || '/'} />) }
    </Fragment>
  )
}

const connector = connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))
const ConnectedRedirectLogin = connector(RedirectLogin)
export { RedirectLogin }
export default ConnectedRedirectLogin
