import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import HelperNavigation from './HelperNavigation'
import RedirectLogout from './RedirectLogout'
import RedirectLogin from './RedirectLogin'
import Themes from './Themes'

import Home from '../screens/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import PostsList from '../screens/PostsList'
import PaginatedPostsList from '../screens/PaginatedPostsList'
import PostCreate from '../screens/PostCreate'
import PostDetail from '../screens/PostDetail'
import Additional from '../screens/Additional'
import MediaQuery from '../screens/MediaQuery'
import Upload from '../screens/Upload'

function Base() {
  return (
    <Themes>
      <Router>
        <Switch>
          <Route exact path="/">
            <RedirectLogout>
              <Home />
            </RedirectLogout>
          </Route>
          <Route path="/login">
            <RedirectLogin>
              <Login />
            </RedirectLogin>
          </Route>
          <Route path="/register">
            <RedirectLogin>
              <Register />
            </RedirectLogin>
          </Route>
          <Route exact path="/posts">
            <RedirectLogout>
              <PostsList />
            </RedirectLogout>
          </Route>
          <Route exact path="/paginated-posts/:page">
            <RedirectLogout>
              <PaginatedPostsList />
            </RedirectLogout>
          </Route>
          <Route exact path="/paginated-posts">
            <RedirectLogout>
              <Redirect to="/paginated-posts/1" />
            </RedirectLogout>
          </Route>
          <Route exact path="/posts/create">
            <RedirectLogout>
              <PostCreate />
            </RedirectLogout>
          </Route>
          <Route exact path="/posts/:postId">
            <RedirectLogout>
              <PostDetail />
            </RedirectLogout>
          </Route>
          <Route exact path="/additional">
            <Additional />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/media-query">
            <MediaQuery />
          </Route>
        </Switch>
        <HelperNavigation />
      </Router>
    </Themes>
  )
}

export default Base
