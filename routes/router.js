const express = require("express");
const router = express();

router.use("/api/users", require("./userRoutes"));

module.exports = router;