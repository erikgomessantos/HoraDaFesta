const express = require("express");
const router = express.Router();

// // Controller
const { register } = require("../controllers/UserController");

//   getCurrentUser,
//   login,
//   update,
//   getUserById,

// // Middlewares
// const validate = require("../middlewares/handleValidations");
// const {
//   userCreateValidation,
//   loginValidation,
//   userUpdateValidation,
// } = require("../middlewares/userValidations");
// const authGuard = require("../middlewares/authGuard");
// const { imageUpload } = require("../middlewares/imageUpload");

// // Routes
router.post("/register", register);
// router.get("/profile", authGuard, getCurrentUser);
// router.post("/login", loginValidation(), validate, login);
// router.put(
//   "/",
//   authGuard,
//   userUpdateValidation(),
//   validate,
//   imageUpload.single("profileImage"),
//   update
// );
// router.get("/:id", getUserById);

module.exports = router;