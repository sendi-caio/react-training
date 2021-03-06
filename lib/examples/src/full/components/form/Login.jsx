import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import schema from '../../validations/login'

import { loginUser } from '../../services/api'
import TextInput from '../input/Text'
import PasswordInput from '../input/Password'
import Card from '../Card'
import Button from '../button/Button'

function Login() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
  })
  const dispatch = useDispatch()

  function callLoginUser(data) {
    loginUser(data).then(
      (isLogin) => {
        if (isLogin) {
          dispatch({ type: 'loggedIn' })
        }
      },
    )
  }

  return (
    <Card title="Login" style={{ width: '500px' }}>
      <form onSubmit={handleSubmit(callLoginUser)}>
        <TextInput label="Email" name="email" inputRef={register} error={errors.email && errors.email.message} />
        <PasswordInput
          label="Password"
          name="password"
          type="password"
          inputRef={register}
          error={errors.password && errors.password.message}
        />
        <Button submit block color="primary">Login</Button>
        <Link to="/register" className="btn btn-secondary btn-block">Register</Link>
      </form>
    </Card>
  )
}

export default Login
