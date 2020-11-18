/* eslint-disable no-unused-vars */
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

function logOut() {
  Cookies.remove('token')
}

function logIn(token) {
  const decoded = jwtDecode(token)
  const { iat, exp } = decoded
  const validms = exp - iat
  // console.log(validms)
  Cookies.set('token', token, {
    expires: 1 / 24,
  })
}

function getToken() {
  return Cookies.get('token')
}

function isLogin() {
  return !!getToken()
}

export default {
  logOut,
  logIn,
  getToken,
  isLogin,
}
