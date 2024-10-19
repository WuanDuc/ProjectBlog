const express = require("express");
const FirebaseAuthController = require("../controllers/Auth");

const router = express.Router();

router.post("/signup", FirebaseAuthController.registerUser);
router.post("/login", FirebaseAuthController.loginUser);

module.exports = router;
