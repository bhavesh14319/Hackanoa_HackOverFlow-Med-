
const { validationResult } = require('express-validator');

const allModels = require('../utils/allModels');

const Is_Patient_Exist_Middlewre = async (req, res, next) => {

    const commonEorrs = req.common_errors;

    //Error for required fields
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
        return res.status(422).json({ errors: validationError.array() });
    }

    const mobileNumber =  req.userID || req.body.userId;
    
    const patient = await allModels.Doctor_Model.findOne({ where:{mobileNumber} });
    
    if ( !patient ) {
        req.is_user_exist = false;
        return next();
    }

    req.is_user_exist = true;
    req.userData = patient;
    return next();

};//End of Is_User_Exist_Middlewre() method



module.exports = Is_Patient_Exist_Middlewre;