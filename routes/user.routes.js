const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/user.controller");
const { login } = require("../controllers/login.controller");

router.post("/users", createUser);
router.post("/login", login);
module.exports = router;