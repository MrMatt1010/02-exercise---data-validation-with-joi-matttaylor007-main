const Joi = require("joi");

const productSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().min(0).required(),
  image: Joi.string().optional(),
  description: Joi.string().required().max(170),
});

module.exports = productSchema;
