const express = require("express");
const { signup, login, addUser, getAllUsers } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/add-user", addUser);
router.get("/users", getAllUsers);

module.exports = router;
