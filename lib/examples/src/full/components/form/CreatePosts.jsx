/* eslint-disable jsx-a11y/label-has-for */

import React from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../services/api'
import TextInput from '../input/Text'
// import CheckboxInput from '../input/Checkbox'
// import RadioInput from '../input/Radio'
import Button from '../button/Button'
import schema from '../../validations/posts.js'
import BackButton from '../button/BackButton'

function CreatePost() {
  const { register, handleSubmit, errors } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      title: '',
      author: '',
      done: null,
      gender: '',
    },
  })
  const history = useHistory()

  function callCreatePost(data) {
    createPost(data).then(
      (response) => history.push(`/posts/${response.data.id}`),
    )
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <form onSubmit={handleSubmit(callCreatePost)}>
          <TextInput label="Title" name="title" inputRef={register} error={errors.title && errors.title.message} />
          <TextInput label="Author" name="author" inputRef={register} error={errors.author && errors.author.message} />
          {/* <CheckboxInput label="Done" name="done" inputRef={register} />
          <RadioInput name="gender" inputRef={register} items={[['l', 'l', 'L'], ['p', 'p', 'P']]} inline error={errors.gender && errors.author.message} /> */}
          <Button submit color="primary">CreatePost</Button>
          <BackButton />
        </form>
      </div>
    </div>
  )
}

export default CreatePost
