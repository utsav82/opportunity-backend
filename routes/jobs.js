const { router, upload, auth } = require("../functions/required");
const jobscontroller = require("../controller/jobs");

router
  .get("/", jobscontroller.getitems)
  .get("/tags", jobscontroller.getbytag)
  .post("/", upload.single('file'),auth, jobscontroller.saveitem);

module.exports = router;
