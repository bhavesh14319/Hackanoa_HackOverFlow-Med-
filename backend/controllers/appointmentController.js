
const allModels = require("../utils/allModels");
const {Op} = require('sequelize');
const randomstring = require('randomstring')

// Patient Books the appointment
exports.Book_Appointment = async(req,res,next) =>{

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const patient = req.userData;

    try {
        let { date, doctorId} = req.body;
         date = new Date(date);

        const appointment = await allModels.Appointment_Model.create({
            date,
            doctorId,
            patientId : patient.id
        });

        if(!appointment) 
            return res.json({error:"Something went wrong. Please try again."});

        return res.json({mesage : "Appointment booked successfully"});
        

    } catch (error) {
        console.log(error);
    }

}

// View Patient appointment
exports.View_Appointment = async(req,res,next) =>{

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const patient = req.userData;

    try {
        const {appointmentId} = req.query;

        let whereclause = {}
        whereclause.patientId = patient.id
        if(appointmentId)
            whereclause.id = appointmentId;


        const appointmentList = await allModels.Appointment_Model.findAll({
            where:whereclause,
            include:{
                model:allModels.Doctor_Model,
            },
            order : [['date','desc']]
        });

        if(!appointmentList)
            return res.json({error:"Something went wrong Please try again."})

        return res.json({data:appointmentList});
    } catch (error) {
        console.log(error);
    }

}

exports.Doctor_View_Appointment = async(req,res,next) =>{

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }

      const doctor = req.userData;
      const {appointmentId} = req.query;
      const {status} = req.query;
      let whereclause = {}
      whereclause.doctorId = doctor.id;

      if(status)
            whereclause.status = status;
      if(appointmentId)
            whereclause.id = appointmentId;

           console.log(whereclause)
    try {

        const appointmentList = await allModels.Appointment_Model.findAll({
            where:whereclause,
            include:{
                model:allModels.Patient_Model
            },
            order : [['date','desc']]
        });

        if(!appointmentList)
            return res.json({error:"Something went wrong Please try again."})

        return res.json({data:appointmentList});
    } catch (error) {
        console.log(error);
    }

}

exports.Confirm_Appointment = async( req,res,next) =>{

    if (!req.is_user_exist) {
        return res.status(409).send({ error: "User doesn't Exist." });
      }
    
    const doctor = req.userData;

    let {appointmentId,startTime,endTime,type} = req.body;

    startTime = new Date(startTime);
    endTime = new Date(endTime);
    
    try {
        if(type == 'reject'){
            const confirm = await allModels.Appointment_Model.update({
                status:'rejected',
            },{
                where:{
                    id : appointmentId
                }
            }
            );

        return res.json({message:"Appointment rejected"});
        }
        
        const isExist = await allModels.Appointment_Model.findOne({
            where:{
                id : appointmentId,
                status: 'pending'
            }
        });

        if(!isExist )
            return res.json({error:"Appointment doesn't exist or is expired"});

        const isBooked = await allModels.Appointment_Model.findOne({
            where:{
                [Op.or]: [
                    {
                      [Op.and]: [
                        { startTime: { [Op.lte]: startTime } },
                        { endTime: { [Op.gt]: startTime } },
                        { endTime: { [Op.lt]: endTime } },
                      ],
                    },
                    {
                      [Op.and]: [
                        { startTime: { [Op.lte]: startTime } },
                        { endTime: { [Op.gte]: endTime } },
                      ],
                    },
                    {
                      [Op.and]: [
                        { startTime: { [Op.gte]: startTime } },
                        { startTime: { [Op.lt]: endTime } },
                        { endTime: { [Op.gt]: endTime } },
                      ],
                    },
                  ],
                  },
                  status:'approved'
        });

        if(isBooked)
            return res.json({error:"SLot if already occupied.Please choose another time slot"});
        
        let slug =  randomstring.generate({
                length: 16,
                charset: 'alphabetic'
              });
        const meetlink = `meet.jit.si/${slug}`
        const confirm = await allModels.Appointment_Model.update({
            status:'approved',
            startTime,
            endTime,
            meetlink
        },{
            where:{
                id : appointmentId
            }
        }
        );

        if(!confirm)
            return res.json({error:"something went wrong."});
        
            return res.json({mesage:"Appointment confirmed."});

    } catch (error) {
        console.log(error)
    }

}

