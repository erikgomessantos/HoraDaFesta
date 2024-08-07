const router = require("express").Router();
const servicesRouter = require("./services");

// User router
const userRouter = require("./users");
router.use("/", userRouter);

// Services router
router.use("/", servicesRouter);

// Parties router
const partyRouter = require("./parties");

router.use("/", partyRouter);

module.exports = router;