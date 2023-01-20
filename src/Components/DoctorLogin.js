import Input from "./Input";
import "./Card.css";

function DoctorLogin() {
  return (
    <div className="body">
      <div className="mainCard">
        <h1>Doctor Login</h1>
        <label>Enter Username or Email</label>
        <Input pholder="Username or Email" />
        <label>Enter Password</label>
        <Input pholder="Password" />
        <button className="btn">LOGIN</button>
      </div>
    </div>
  );
}

export default DoctorLogin;
