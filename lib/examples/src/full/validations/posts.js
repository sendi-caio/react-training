import Joi from 'joi'

const schema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  // done: Joi.boolean().required(),
  // gender: Joi.string().valid('l', 'p').required(),
})

export default schema
