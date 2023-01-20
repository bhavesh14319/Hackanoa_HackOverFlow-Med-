const allModels = require("../utils/allModels");

exports.add_Prescirption = async (req, res, next) => {
  if (!req.is_user_exist) {
    return res.status(409).send({ error: "User doesn't Exist." });
  }

  const doctor = req.userData;

  const { startDate, endDate, medicine, dailyfreq, doseage, instruction , patientId } =
    req.body;

  try {
    const presc = await allModels.Prescription_Model.create({
      startDate,
      endDate,
      medicine,
      dailyfreq,
      doseage,
      instruction,
      doctorId : doctor.id,
      patientId 
    });

    if(!presc)
        return res.json({error:"Something went wrong"});
    
    return res.json({message:"Prescription added successfully"});

  } catch (error) {
    console.log(error);
  }
};

exports.get_Prescription = async (req, res, next) => {

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const patientId = req.query.patientId || req.userData.id;
      
      console.log(patientId)
    try {
        
        const prescription = await allModels.Prescription_Model.findAll({
            where:{
                patientId
            },
            order:[['endDate','desc']],
            include:{
              model:allModels.Patient_Model
            }
        });

        if(!prescription)
            return res.json({error:"Something went wrong"});
        
        return res.json({data:prescription});


    } catch (error) {
        console.log()
    }


};
