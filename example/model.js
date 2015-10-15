var Joi = require('joi');
var custom_fields = {
  name  : Joi.string().required(),
  email : Joi.string().email().required()
};
module.exports = custom_fields;
