const express = require("express");
const router = express();

const { query } = require("express-validator");


const medical_controller = require('../controllers/medicalController');

router.get("/medical",medical_controller.Get_Medical);

module.exports = router;