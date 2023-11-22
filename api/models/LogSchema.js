const { Schema, model } = require("mongoose");

const LogSchema = new Schema(
  {
    level: {
      type: String,
    },
    message: {
      type: String,
    },
    resourceId: {
      type: String,
    },
    timestamp: {
      type: String,
    },
    traceId: {
      type: String,
    },
    spanId: {
      type: String,
    },
    commit: {
      type: String,
    },
    metadata: {
      parentResourceId: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = model("Log", LogSchema);
