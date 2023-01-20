import Input from "./Input";
import "./Card.css";

function DoctorRegistration() {
  return (
    <div className="body">
      <div className="mainCard">
        <h1>Doctor Registration</h1>
        <label>Enter Email</label>
        <Input pholder="Email" />
        <label>Enter Username</label>
        <Input pholder="Username" />
        <label>Enter Hospital</label>
        <Input pholder="Hospital" />
        <label>Enter Experience</label>
        <Input pholder="Experience" />
        <label>Enter Mobile Number</label>
        <Input pholder="Mobile Number" />
        <label>Enter Specialization</label>
        <Input pholder="Specialization" />
        <label>Enter Password</label>
        <Input pholder="Password" />
        <button className="btn">REGISTER</button>
      </div>
    </div>
  );
}

export default DoctorRegistration;
