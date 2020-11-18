import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function RedirectLogout(props) {
  const { children, to, isLoggedIn } = props
  return (
    <Fragment>
      {isLoggedIn ? children : (<Redirect to={to || '/login'} />)}
    </Fragment>
  )
}

const connector = connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))
const ConnectedRedirectLogout = connector(RedirectLogout)
export { RedirectLogout }
export default ConnectedRedirectLogout
