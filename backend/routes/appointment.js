const express = require("express");
const router = express();

const { query } = require("express-validator");

const T_V_M = require("../middleware/Token_Verify_Middleware");
const I_P_E = require("../middleware/Is_Patient_Exist");
const I_D_E = require('../middleware/Is_Doctor_Exist');



const appointment_control  = require("../controllers/appointmentController");

// Patient Books the appointment.
router.post("/p/book",T_V_M,I_P_E,appointment_control.Book_Appointment);
// PAtient can view 
router.get("/p/book",T_V_M,I_P_E, appointment_control.View_Appointment);

// Doctor can approve the appointments
router.patch("/d/approve",T_V_M,I_D_E,appointment_control.Confirm_Appointment );

// DOctor can view his appointments
router.get("/d/approve",T_V_M,I_D_E,appointment_control.Doctor_View_Appointment);



module.exports = router;
