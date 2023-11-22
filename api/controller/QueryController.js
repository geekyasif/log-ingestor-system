const Log = require("../models/LogSchema");

class QueryController {
  static async fullTextSearch(req, res) {
    try {
      const {
        query,
        level,
        resourceId,
        timestamp,
        traceId,
        spanId,
        commit,
        parentResourceId,
      } = req.query;

      const data = await Log.aggregate([
        {
          $search: {
            index: "log",
            text: {
              query: query,
              path: {
                wildcard: "*",
              },
            },
          },
        },
        {
          $match: {
            level: level || { $exists: true, $ne: null },
            message: { $exists: true, $ne: null },
            resourceId: resourceId || { $exists: true, $ne: null },
            timestamp: timestamp || { $exists: true, $ne: null },
            traceId: traceId || { $exists: true, $ne: null },
            spanId: spanId || { $exists: true, $ne: null },
            commit: commit || { $exists: true, $ne: null },
            "metadata.parentResourceId": parentResourceId || {
              $exists: true,
              $ne: null,
            },
          },
        },
      ]);

      return res.status(200).json({
        data: data,
        totalCount: data.length,
      });
    } catch (error) {
      return res.status(501).json({
        code: 501,
        error: "Internal server error!",
        message: error.message,
      });
    }
  }
}

module.exports = QueryController;
