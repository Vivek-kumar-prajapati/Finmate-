const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getAllUser} = require("../controllers/userController")

router.post("/register",registerUser);

router.post("/login",loginUser);
router.get("/users",getAllUser);

module.exports=router