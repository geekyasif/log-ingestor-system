const express = require("express");
const router = express.Router();
const IngestLogController = require("../controller/IngestLogController");
const QueryController = require("../controller/QueryController");

router.post("/ingest", IngestLogController.ingestLog);
router.get("/search", QueryController.fullTextSearch);

module.exports = router;
