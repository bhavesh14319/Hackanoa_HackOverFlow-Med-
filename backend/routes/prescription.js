const express = require("express");
const router = express();

const { query } = require("express-validator");

// Patient can view his vitals
router.get("/p/presc");


// Doctor can view his patients vitals
router.get("/d/presc")


// doctor can add his patient prescription
router.post("/d/presc")


