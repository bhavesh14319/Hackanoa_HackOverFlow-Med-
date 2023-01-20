import React from 'react'
import PatientNavbar from '../PatientDashboard/PatientNavbar'
import useMediaQuery from '@mui/material/useMediaQuery';
import "./BookAppointment.css"
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { useEffect } from 'react';


const BookAppointment = () => {

    const smallScreen = useMediaQuery('(max-width:600px)');
    const [Hospital, setHospital] = useState('');
    const [Doctor, setDoctor] = useState('');
    const [date, change] = useState(new Date());
    const [current,setCurrent]=useState(0);
    const[questArray,setQuestArray] = useState([]);

    const [hospitals,setHospitals]=useState({});

    useEffect(()=>{

    },[])
    
    const [vitals,setVitals] =useState({
       0: {vital: "sweating",status : 0},
       1: {vital: "breathlessness",status : 0},
       2: {vitals:"continuous_feel_of_urine",status  : 0},
       3 :{vitals:"bladder_discomfort",status  : 0},
       4 :{vitals:"burning_micturition" ,status : 0},
       5:{vitals:"foul_smell_of urine",status  :  0},
       6:{vitals:"constipation"   ,status: 0},
       7:{vitals:"vomiting"  ,status : 0},
       8:{vitals:"toxic_look_(typh,os)"   ,status: 0},
       9:{vitals:"belly_pain"   ,status :0},
       10:{vitals:"skin_rash"   ,status: 0},
       11:{vitals:"continuous_sneezing" ,status:0},
       12:{vitals:"pus_filled_pimples"   ,status: 0},
       13:{vitals:"blackheads"  ,status: 0},
       14:{vitals:"scurring"  ,status:  0},
       15:{vitals:"shivering"  ,status:  0},
       16:{vitals:"watering_from_eyes" ,status:  0},
       17:{vitals:"red_spots_over_body" ,status: 0},
       18:{vitals:"swelling_joints" ,status: 0},
       19:{vitals:"painful_walking" ,status :  0},
       20:{vitals:"movement_stiffness", status :  0}
        });

    const [questions,setquestion] =useState( {
        0: "Are you experiencing sweating?",
        1: "Are you experiencing any breathlessness?",
        2: "Are you experiencing a continuous feel of urine?",
        3: "Are you experiencing bladder discomfort?",
        4: "Are you experiencing a burning sensation while urinating?",
        5: "Does your urine have a foul smell?",
        6: "Are you experiencing constipation?",
        7: "Are you experiencing vomiting?",
        8: "Do you suffer from insect bite?",
        9: "Are you experiencing belly pain?",
        10: "Do you have a skin rash?",
        11: "Do you sneeze continuously?",
        12: "Do you have pus filled pimples?",
        13: "Do you have blackheads?",
        14: "Are you experiencing scurring?",
        15: "Are you experiencing shivering?",
        16: "Do your eyes water?",
        17: "Do you have red spots over body?",
        18: "Do you have swelling joints?",
        19: "Do you experience pain while walking",
        20: "Is there stiffness when you move?"
    
    });

    useEffect(()=>{
        setQuestArray(Object.values(questions));
    },[questions])

    const handleChangeHospital = (e) => {
        setHospital(e.target.value);
    }

    const handleChangeDoctor = (e) => {
        setDoctor(e.target.value);
    }

    const handleNextClick = () =>{
        let yes = document.getElementById('yes-radio');
        let no = document.getElementById('no-radio');
        if(yes.checked && current<questArray.length){
            let ob = vitals[current];
            ob.status=1;
            vitals[current]=ob;

            setCurrent((cur)=>cur+1);
        }else{
            if(current<questArray.length){
                setCurrent((cur)=>cur+1);
            }
        }

        if(current==questArray.length-1){

        }
        console.log(no.checked);

        console.log(vitals);
    }

    const handleBookNow = () =>{
        let modal = document.getElementById('modal-container');
        modal.style.display="block";

        //api call for modal

        // api call for appointment booking
    }

    const closeModal = ()=>{
        let modal = document.getElementById('modal-container');
        modal.style.display="none";
    }

    return (
        <>
            {smallScreen &&<>
            
                <div className='Questions_Modal' id="modal-container">
                    <div className="heading_Cont">
                        <h2>Diagnosis Survey</h2>
                    </div>
                    { current <questArray.length &&
                    <>
                    <div className='Question_Container'>
                        <p className='Question'>
                          {questArray[current]}
                        </p>
                    </div>
                    <div className='Input_Container'>
                        <span className='input_cont'>Yes <input className='Radio-Btn' type="radio" name="Yes" id="yes-radio" /></span> 

                       <span className='input_cont'>No <input className='Radio-Btn' type="radio" name="Yes" id="no-radio" /></span> 

                    </div>

                    <button onClick={()=>{handleNextClick()}} className='next-btn'>
                        Next
                    </button>

                    <div className='desclaimer'>
                        <span>Note! Answer each question as per you symptoms <br /> Anwering each question is compuslory</span>
                    </div>
                    </> }
                    {current==questArray.length && 
                    <>
                        <div className='EndContainer'>
                           <h2>Thanks You</h2> 
                            <button className='close-btn' id="close-btn" onClick={()=>{closeModal()}}>Close</button>
                        </div>
                    </>
                    }
                </div>


                <div className='BookAppointment_container'>
                    <PatientNavbar />
                    <div className='main_Container'>
                        <h2 className='form_lable'>Book Appointment</h2>
                        <div className="form_Container">

                        <p className='Input_Lable'>Preferred Date: </p>
                            <DatePicker className="DatePicker" onChange={change} value={date} />

                            
                            <p className='Input_Lable'>Select Hospital: </p>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Hospital}
                                label="Age"
                                className='SelectInput'
                                onChange={handleChangeHospital}
                            >
                                <MenuItem value={"H1"}>H1</MenuItem>
                                <MenuItem value={"H2"}>H2</MenuItem>
                                <MenuItem value={"H3"}>H3</MenuItem>
                            </Select>

                            <p className='Input_Lable'>Select Doctor: </p>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Doctor}
                                label="Age"
                                className='SelectInput'
                                onChange={handleChangeDoctor}
                            >
                                <MenuItem value={"D1"}>D1</MenuItem>
                                <MenuItem value={"D2"}>D2</MenuItem>
                                <MenuItem value={"D3"}>D3</MenuItem>
                            </Select>




                            <button className='Book-Btn' onClick={()=>{handleBookNow()}}>Book Now</button>
                        </div>
                    </div>
                </div>
                </>
            }
        </>
    )
    
}

export default BookAppointment
