
const { validationResult } = require('express-validator');

const allModels = require('../utils/allModels');

const Is_Doctor_Exist_Middlewre = async (req, res, next) => {

    const commonEorrs = req.common_errors;

    //Error for required fields
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
        return res.status(422).json({ errors: validationError.array() });
    }

    const mobileNumber =  req.mobileNumber || req.body.mobileNumber;
    
    const doctor = await allModels.Doctor_Model.findOne({ where:{mobileNumber} });
    
    if ( !doctor ) {
        req.is_user_exist = false;
        return next();
    }

    req.is_user_exist = true;
    req.userData = doctor;
    return next();

};//End of Is_User_Exist_Middlewre() method



module.exports = Is_Doctor_Exist_Middlewre;