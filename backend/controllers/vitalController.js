
const allModels = require("../utils/allModels");



exports.Add_Vital = async(req,res,next) =>{

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const patient = req.userData;
        const {
            sweating,
            breathlessness,
            continuous_feel_of_urine,
            bladder_discomfort,
            burning_micturition,
            foul_smell_of_urine,
            constipation,
            vomiting,
            toxic_look_typhos,
            belly_pain,
            skin_rash,
            continuous_sneezing,
            pus_filled_pimples,
            blackheads,
            scurring,
            shivering,
            watering_from_eyes,
            red_spots_over_body,
            swelling_joints,
            painful_walking,
            movement_stiffness,
            predicted_disease,
        } = req.body;

    try{

        const addVital = await allModels.Vital_Model.create({
            sweating,
            breathlessness,
            continuous_feel_of_urine,
            bladder_discomfort,
            burning_micturition,
            foul_smell_of_urine,
            constipation,
            vomiting,
            toxic_look_typh_os :toxic_look_typhos,
            belly_pain,
            skin_rash,
            continuous_sneezing,
            pus_filled_pimples,
            blackheads,
            scurring,
            shivering,
            watering_from_eyes,
            red_spots_over_body,
            swelling_joints,
            painful_walking,
            movement_stiffness,
            predicted_disease,
            patientId : patient.id
        });

        if(!addVital)
            return res.json({error:"Something went wrong"});

        return res.json({message:"Vitals recorded successfully"});

    } catch (error) {

        console.log(error);
        
    }

}

exports.Get_Vital = async(req,res,next) =>{


    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const patientId = req.body.patientId || req.userData.id
    try {
        
        const vitals = await allModels.Vital_Model.find({
            where:{
                patientId
            },
            include:{
                model:allModels.Patient_Model
            }
        });
    
        if(!vitals)
            return res.json({error:"Something went wrong"});
        
        return res.json({data:vitals});


    } catch (error) {
        
    }


}

exports.Edit_Vital = async(req,res,next) =>{

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const doctor = req.userData;
      const {id,doctor_diagonsis} = req.body;

      try {
        
        const updateVital = await allModels.Vital_Model.update({
            where:{
                id 
            }
        },{
            doctor_diagonsis
        });

        if(!updateVital)
            return res.json({error:"Something went wrong try again"});
        
        return res.json({message:"Diagnosis updated successfully"});

      } catch (error) {
        console.log(error)
      }
    
}