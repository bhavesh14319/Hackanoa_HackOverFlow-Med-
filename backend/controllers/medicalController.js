const allModels = require("../utils/allModels");


exports.Get_Medical = async(req,res,next) =>{

    try {
        
        const medical = await allModels.Medical_Model.find();

        if(!medical)
            return res.json({error:"Something went wrong"});

        return res.json({data:medical});

    } catch (error) {
        console.log(error)
    }

}
