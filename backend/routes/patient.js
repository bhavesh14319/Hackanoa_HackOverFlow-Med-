const express = require("express");
const router = express();

const { query } = require("express-validator");

// Middleware
const T_V_M = require("../middleware/Token_Verify_Middleware");
const I_P_E = require("../middleware/Is_Patient_Exist");
const I_D_E = require("../middleware/Is_Doctor_Exist")

const patient_controller = require("../controllers/patientController");

router.post("/p/sign-up", patient_controller.Signup_Controller);

router.post("/p/sign-in", I_P_E,patient_controller.Signin_Controller);

router.get("/p/profile", T_V_M, I_P_E, patient_controller.Profile_Controller);

// Patient list for doctor using appointments to map
router.get("/d/patient",T_V_M,I_D_E,patient_controller.Patient_Doctor);

module.exports = router;
