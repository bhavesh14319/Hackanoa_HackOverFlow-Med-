const express = require("express");
const router = express();

const { query } = require("express-validator");

const T_V_M = require('../middleware/Token_Verify_Middleware');
const I_D_E = require('../middleware/Is_Doctor_Exist');


const doctor_controller = require("../controllers/doctorController");

router.post("/d/sign-up", doctor_controller.Signup_controller);

router.post("/d/sign-in",I_D_E, doctor_controller.Signin_controller);

router.get("/d/profile",T_V_M,I_D_E, doctor_controller.Profile_Controller);

module.exports = router;