const express = require("express");
const router = express();

const { query } = require("express-validator");

const patient_controller = require("../controllers/patientController");

router.post("/p/sign-up", patient_controller.Signup_Controller);

router.post("/p/sign-in", patient_controller.Signin_Controller);

router.get("/p/profile", patient_controller.Profile_Controller);


// Patient list for doctor using appointments to map
router.get('/d/patient')

module.exports = router;
