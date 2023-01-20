const express = require("express");
const router = express();

const { query } = require("express-validator");

const hospital_controller = require('../controllers/hospitalController');

router.get("/hospital",hospital_controller.Get_Hospital);


module.exports = router;

