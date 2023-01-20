const express = require("express");
const router = express();

const { query } = require("express-validator");

const appointment_control  = require("../controllers/appointmentController");

// Patient Books the appointment.
router.post("/p/book",appointment_control.Book_Appointment );
// PAtient can view 
router.get("/p/book", appointment_control.View_Appointment);

// Doctor can approve the appointments
router.post("/d/approve",appointment_control.Confirm_Appointment );

// DOctor can view his appointments
router.get("/d/approve",appointment_control.Doctor_View_Appointment);



module.exports = router;
