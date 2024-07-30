const router = require("express").Router();
const userController = require("../controllers/userController");

// Endpoints
router
.route("/users")
.post((req, res) => userController.create(req, res));

module.exports = router;