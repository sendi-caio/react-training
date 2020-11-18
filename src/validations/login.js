import Joi from 'joi'

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.required(),
})

export default schema
