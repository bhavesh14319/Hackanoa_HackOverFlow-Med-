const express = require("express");
const router = express();

const { query } = require("express-validator");


const T_V_M = require("../middleware/Token_Verify_Middleware");
const I_P_E = require("../middleware/Is_Patient_Exist");
const I_D_E = require('../middleware/Is_Doctor_Exist')


const prescription_controller = require('../controllers/prescriptionController')

// Patient can view his vitals
router.get("/p/presc",T_V_M,I_P_E,prescription_controller.get_Prescription);


router.post("/d/presc",T_V_M,I_D_E,prescription_controller.add_Prescirption)

// Doctor can view his patients vitals
router.get("/d/presc",T_V_M,I_D_E,prescription_controller.get_Prescription)

// router.patch('/d/presc',)

// doctor can add his patient prescription


module.exports = router;

