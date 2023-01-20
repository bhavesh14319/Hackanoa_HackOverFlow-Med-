const express = require("express");
const router = express();

const { query } = require("express-validator");

const vital_controller = require('../controllers/vitalController')

// Patient can add his vitals
router.post("/p/vital",vital_controller.Add_Vital);

// Patient can view his vitals
router.get("/p/vitals",vital_controller.Get_Vital)

router.get("/d/vitals",vital_controller.Get_Vital)

// doctor can view his patient vitals using patientID
router.patch("/d/vitals",vital_controller.Edit_Vital)


module.exports = router;