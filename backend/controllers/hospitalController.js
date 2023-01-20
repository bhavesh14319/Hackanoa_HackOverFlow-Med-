
const allModels = require("../utils/allModels");


exports.Get_Hospital = async(req,res,next) =>{

    try {
        
        const hospital = await allModels.Hospital_Model.find();

        if(!hospital)
            return res.json({error:"Something went wrong"});

        return res.json({data:hospital});

    } catch (error) {
        console.log(error)
    }

}

