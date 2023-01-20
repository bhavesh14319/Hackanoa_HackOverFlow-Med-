const express = require("express");
const router = express();

const { query } = require("express-validator");


const T_V_M = require("../middleware/Token_Verify_Middleware");
const I_P_E = require("../middleware/Is_Patient_Exist");
const I_D_E = require('../middleware/Is_Doctor_Exist')

const vital_controller = require('../controllers/vitalController')

// Patient can add his vitals
router.post("/p/vital", T_V_M,I_P_E,vital_controller.Add_Vital);

// Patient can view his vitals
router.get("/p/vitals",T_V_M,I_P_E,vital_controller.Get_Vital)

router.get("/d/vitals",T_V_M,I_D_E,vital_controller.Get_Vital)

// doctor can view his patient vitals using patientID
router.patch("/d/vitals",T_V_M,I_D_E,vital_controller.Edit_Vital)


module.exports = router;