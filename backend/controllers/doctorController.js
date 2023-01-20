const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const allModels = require("../utils/allModels");

exports.Signup_controller = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(422).json({ errors: validationError.array() });
  }

  if (req.is_user_exist) {
    return res
      .status(409)
      .send({ error: "User Already Exist with the following Number" });
  }

  try {
    const Password = req.body.password;
    const salt = await bcrypt.genSalt(12);
    const KHashPassword = await bcrypt.hash(Password, salt);
    const date = new Date(req.body.DOB);
    console.log(date);
    const KUser = await allModels.Doctor_Model.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      regNo: req.body.regNo,
      DOB: req.body.DOB,
      password: KHashPassword,
      gender: req.body.gender,
      specialization: req.body.specialization,
      experience: req.body.experience,
    });

    const token = jwt.sign(
      { userID: KUser.id, mobileNumber: KUser.mobileNumber },
      process.env.JWT_SECRET
    );

    res.status(201).json({
      message: "Signup successfully",
      userID: KUser.id,
      mobileNumber: KUser.mobileNumber,
      name: KUser.firstName,
      email: KUser.email,
      DOB: KUser.DOB,
      gender: KUser.gender,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Signin_controller = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(422).json({ errors: validationError.array() });
  }

  if (!req.is_user_exist) {
    return res.status(409).send({ error: "User doesn't Exist." });
  }

  try {
    const { mobileNumber, password } = req.body;
    
    const KUser = await allModels.Doctor_Model.findOne({
      where: { mobileNumber: mobileNumber },
    });
    if (!KUser) return res.status(422).json({ error: "Unauthorized user" }); //Throwing error if not authenticated.

    const doMatch = await bcrypt.compare(password, KUser.password); //Comparing plain password to hased.
    if (!doMatch) return res.status(422).json({ error: "Unauthorized user" }); //Throwing error if not authenticated.

    const token = jwt.sign(
      { userID: KUser.id, mobileNumber: KUser.mobileNumber },
      process.env.JWT_SECRET
    );

    return res.status(201).json({
      message: "Signin successfully",
      userID: KUser.id,
      mobileNumber: KUser.mobileNumber,
      name: KUser.firstName,
      email: KUser.email,
      DOB: KUser.DOB,
      gender: KUser.gender,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Profile_Controller = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(422).json({ errors: validationError.array() });
  }

  try {
    const doctor = await allModels.Doctor_Model.findOne({
      where: {
        id: req.userData.id,
      },
    });

    if (!doctor) res.json({ error: "SOmething went wrong" });

    res.json({ data: doctor });
  } catch (error) {
    console.log(error);
  }
};
