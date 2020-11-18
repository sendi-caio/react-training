import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import RegisterForm from '../components/form/Register'
import AuthLayout from '../layouts/Auth'

function Register() {
  return (
    <Fragment>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </Fragment>
  )
}

export default Register
