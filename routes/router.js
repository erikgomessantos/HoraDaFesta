const router = require("express").Router();
const servicesRouter = require("./services");

// Services router
router.use("/", servicesRouter);

// Parties router
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;