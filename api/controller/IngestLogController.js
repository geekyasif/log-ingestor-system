const LogIngestorValidateSchema = require("../validator/LogIngestorValidateSchema");
const Log = require("../models/LogSchema");

class IngestLogController {
  static async ingestLog(req, res) {
    try {
      // inserting in bulk
      if (Array.isArray(req.body)) {
        await Log.insertMany(req.body);
        console.log("inserted");

        // inserting single log
      } else {
        const { error } = LogIngestorValidateSchema.validate(req.body);
        if (error) {
          console.log(error);
          return res.status(500).send("Something went wrong");
        }
        const newLog = new Log(req.body);
        await newLog.save();
      }

      return res.status(201).json({
        code: 201,
        error: "",
        message: "Log inserted Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        code: 500,
        error: error,
        message: "Internal server error",
      });
    }
  }
}

module.exports = IngestLogController;
