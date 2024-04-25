const Joi = require("joi");

const quoteSchema = Joi.object({
  planType: Joi.string().required(),
  petName: Joi.string().required(),
  expiry: Joi.date().greater("now").required(),
});

module.exports = quoteSchema;
