import React, { Fragment } from 'react'
import Bar from '../components/Bar'
function Dashboard(props) {
  const { children } = props
  return (
    <Fragment>
      <Bar />
      <div className="container">
        {children}
      </div>
    </Fragment>
  )
}

export default Dashboard
