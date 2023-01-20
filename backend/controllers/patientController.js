const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const allModels = require("../utils/allModels");

exports.Signup_Controller = async (req, res, next) => {
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
    const {
      firstName,
      lastName,
      aadharId,
      DOB,
      mobileNumber,
      city,
      state,
      pincode,
      address,
      gender
    } = req.body;

    const patient = await allModels.Patient_Model.create({
      firstName,
      lastName,
      aadharId,
      DOB,
      mobileNumber,
      city,
      state,
      pincode,
      address,
      gender,
    });

    if (!patient)
      return res.json({ error: "SOmething went wrong Please try again." });

    return res.json({
      message: "Signed In Succesfully. Please login with your number",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Signin_Controller = async (req, res, next) => {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(422).json({ errors: validationError.array() });
  }

  if (!req.is_user_exist) {
    return res.status(409).send({ error: "User doesn't Exist." });
  }

  try {
    
    const { mobileNumber , aadharId} = req.body;

    const patient = await allModels.Patient_Model.findOne({
      where: {
        mobileNumber,
        aadharId
      },

    });
    if(!patient)
        return res.json({error:"Mobile Number or AAdhar ID is wrong Please check"});

    const token = jwt.sign(
      { userID: patient.id, mobileNumber: patient.mobileNumber },
      process.env.JWT_SECRET
    );

    return res.json({
        message: 'Login successfully',
            userID: patient.id,
            mobileNumber: patient.mobileNumber,
            dob: patient.dateOfBirth,
            gender: patient.gender,
            token
    })

  } catch (error) {
    console.log(error);
  }
};

exports.Profile_Controller = async(req,res,next) =>{
    const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(422).json({ errors: validationError.array() });
  }

  try {
    
    const patient = await allModels.Patient_Model.findOne({where:{
        id:req.userData.id
    }});

    if(!patient)
        res.json({error:"SOmething went wrong"});
    
    res.json({data:patient});
    
  } catch (error) {
    console.log(error);
  }
}
