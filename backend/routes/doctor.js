const express = require("express");
const router = express();

const { query } = require("express-validator");



const doctor_controller = require("../controllers/doctorController");

router.post("/d/sign-up", doctor_controller.Signup_controller);

router.post("/d/sign-in", doctor_controller.Signin_controller);

router.get("/d/profile", doctor_controller.Profile_Controller);

module.exports = router;