const express = require("express");
const router = express();

const { query } = require("express-validator");

// const  = require("../controllers/patientController");

// Patient Books the appointment.
router.post("/p/book", patient_controller.Signup_Controller);
// PAtient can view 
router.get("/p/book", patient_controller.Signin_Controller);

// Doctor can approve the appointments
router.post("/d/approve", patient_controller.Profile_Controller);

// DOctor can view his appointments
router.get("/d/approve",)



module.exports = router;
