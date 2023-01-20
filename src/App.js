import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/DoctorDashboard/Home"
import PatientHome from "./Components/PatientDashboard/PatientHome"; 
import Appointments from "./Components/DoctorDashboard/Appointments"; 
import DoctorLogin from "../src/Components/DoctorLogin"
import PatientLogin from "../src/Components/PatientLogin"
import PatientProfile from "../src/Components/Patientprofile/PatientProfile"
import PatientRegistration from "../src/Components/PatientRegistration"
import DoctorRegistration from "../src/Components/DoctorRegistration"


function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
          <Route
            path="/Doctor/Login"
            element={<DoctorLogin setUserState={setUserState} />}
          ></Route>
         <Route
            path="/Patient/Login"
            element={<PatientLogin setUserState={setUserState} />}
          ></Route>
          <Route path="Doctor/signup" element={<DoctorRegistration />}></Route>
          <Route path="Patient/signup" element={<PatientRegistration/>}></Route>
          <Route path="Patient/Profile" element={<PatientProfile/>}></Route>
          <Route path="/Doctor/home" element={<Home />}></Route>
          <Route path="/Patient/home" element={<PatientHome />}></Route>
          <Route path="/Doctor/home/appointments" element={<Appointments/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
