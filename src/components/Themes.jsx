import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

function Themes(props) {
  const { children, activeTheme } = props
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        {
          false && <link id={`${activeTheme}-theme`} rel="stylesheet" href={`https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/${activeTheme}/bootstrap.min.css`} />
        }
      </Helmet>
      { children }
    </Fragment>
  )
}
const connector = connect((state) => ({ activeTheme: state.ui.activeTheme }))

const connectedThemes = connector(Themes)

export default connectedThemes
