import React from "react";
import Navbar from "../DoctorDashboard/Navbar";
import Hospitalcard from "./Hospitalcard";
import "./hospitals.css";

function Hospitals_list() {
  const list = [
    {
      id: "a",
      name: "Robin",
    },
    {
      id: "b",
      name: "Dennis",
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        {/* <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
        <div className="hospitals_page_headings">
          <span>Hospitals Near You</span>
          <span>Medicals Near You</span>
        </div>
        <div className="generic_data">
          <div className="hospitals_list">
            
            <Hospitalcard/>
          </div>
          <div className="medicals_list">
            
          <Hospitalcard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hospitals_list;
