const express = require("express");
const router = express();

const { query } = require("express-validator");

// Patient can add his vitals
router.post("/p/vital");

// Patient can view his vitals
router.get("/p/vitals")

// doctor can view his patient vitals using patientID
router.get("/d/vitals")
