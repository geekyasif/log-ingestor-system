const Joi = require("joi");

const LogIngestorValidateSchema = Joi.object({
  level: Joi.string(),
  message: Joi.string(),
  resourceId: Joi.string(),
  timestamp: Joi.string(),
  traceId: Joi.string(),
  spanId: Joi.string(),
  commit: Joi.string(),
  metadata: {
    parentResourceId: Joi.string(),
  },
});

module.exports = LogIngestorValidateSchema;
