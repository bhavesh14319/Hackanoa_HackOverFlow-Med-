const allModels = require("../utils/allModels");


exports.Get_Medical = async(req,res,next) =>{

    const {id} = req.query;
    let whereClause = {}
    if(id)
        whereClause.id = id;
    try {
        
        const medical = await allModels.Medical_Model.findAll({
            where:whereClause
        });

        if(!medical)
            return res.json({error:"Something went wrong"});

        return res.json({data:medical});

    } catch (error) {
        console.log(error)
    }

}
