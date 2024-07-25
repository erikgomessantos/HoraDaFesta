const router = require("express").Router();
const servicesRouter = require("./services");

// router.use("/api/users", require("./userRoutes"));

// Services router
router.use("/", servicesRouter);

// Parties router
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;