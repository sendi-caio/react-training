import Joi from 'joi'

const schema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.max(8).min(4).required(),
})

export default schema
