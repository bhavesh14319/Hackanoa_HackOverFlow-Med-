const express = require("express");
const router = express();

const { query } = require("express-validator");

const patient_controller = require("../controllers/patientController");

router.post("/p/sign-up", patient_controller.Signup_Controller);

router.post("/p/sign-in", patient_controller.Signin_Controller);

router.get("/p/profile", patient_controller.Profile_Controller);

module.exports = router;
