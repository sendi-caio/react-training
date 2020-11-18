import 'react-app-polyfill/stable'
import ReactDom from 'react-dom'
import React from 'react'
import Base from './Base'
import '../styles/style.scss'
import '@fortawesome/fontawesome-free/scss/fontawesome.scss'

ReactDom.render(
  <Base />,
  document.getElementById('root'),
)
