
const allModels = require("../utils/allModels");


exports.Get_Hospital = async(req,res,next) =>{
    
    const {id} = req.query;
    let whereClause = {}
    if(id)
        whereClause.id = id;
    try {
        
        const hospital = await allModels.Hospital_Model.findAll({
            where:whereClause,
            include:{
                model:allModels.Doctor_Model
            }
        });

        if(!hospital)
            return res.json({error:"Something went wrong"});

        return res.json({data:hospital});

    } catch (error) {
        console.log(error)
    }

}

