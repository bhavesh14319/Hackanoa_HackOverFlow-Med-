const express = require("express");
const router = express();

const { query } = require("express-validator");


const prescription_controller = require('../controllers/prescriptionController')

// Patient can view his vitals
router.get("/p/presc",prescription_controller.get_Prescription);


router.post("/d/presc",prescription_controller.add_Prescirption)

// Doctor can view his patients vitals
router.get("/d/presc",prescription_controller.get_Prescription)


// router.patch('/d/presc',)

// doctor can add his patient prescription


module.exports = router;

