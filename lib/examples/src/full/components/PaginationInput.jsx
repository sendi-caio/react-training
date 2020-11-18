import React from 'react'
import { useForm } from 'react-hook-form'
import InputText from './input/Text'

function PaginationInput(props) {
  const { onPaginate } = props

  const { register, handleSubmit } = useForm()

  return (
    <div className="card m-3">
      <div className="card-body">
        <form onSubmit={handleSubmit(onPaginate)}>
          <InputText label="Page" name="page" inputRef={register} />
          <InputText label="Per Page" name="perPage" inputRef={register} />
          <button className="btn btn-primary" type="submit">Go</button>
        </form>
      </div>
    </div>
  )
}

export default PaginationInput
