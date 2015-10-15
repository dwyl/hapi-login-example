var Joi = require('joi');
var custom_fields = {
  email     : Joi.string().email().required(), // Required
  password  : Joi.string().required().min(6)   // minimum length 6 characters
};
module.exports = custom_fields;
