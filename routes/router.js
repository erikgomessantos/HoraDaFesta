const router = require("express").Router();
const servicesRouter = require("./services");

// Register router
router.use("/api/register", require("./register"));

// User router
const userRouter = require("./users");
router.use("/", userRouter);

// Services router
router.use("/", servicesRouter);

// Parties router
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;