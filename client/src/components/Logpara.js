import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import './lpara.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Logpara = () => {

const navigate = useNavigate();

const [req, setReq] = useState({
    patientId: "",
    requested_service: "",
    password:"",
    request_status: "Pending",
    location: ""
});

function checkStatus(){
  navigate("/checkStatus");
}

function createRequest(){

console.log(req);

  axios.post("http://localhost:5000/request/", req).then(response => {
        console.log("Request Successful!");
  });

  setReq({
    patientId: "",
    requested_service: "",
    password:"",
    request_status: "Pending",
    location: ""
  });

}

function handleChange(event) {

  const { name, value } = event.target;

    setReq((preValues) => {
      return {
        ...preValues,
        [name]: value
      };
    });
}

 return(
     <>
     <Navbar/>
     <div className="container1">
       <h3>Request for Service</h3>
       <div className="form-container">
         <form>
           <div className="input-name">
           <i class="fa-solid fa-user"></i>
           <input onChange={handleChange} className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Patient ID" name="patientId" value={req.patientId} />
           </div>

           <div className="input-name">
             <select name="requested_service" onChange={handleChange} value={req.requested_service} className="form-control">
             <option value="select" >Types of Services </option>
                      <option value="Clinic Consultation">Clinic Consultation</option>
                      <option value="Surgery" >Surgery</option>
                      <option value="Medicinal Items" >Medicinal Items</option>
                      <option value="Vacant Beds/Rooms">Vacant Beds/Rooms</option>
             </select>
           </div>

           <div>
           <input onChange={handleChange} className="form-control form-control-user" type="text" id="exampleFirstName" placeholder="Location" name="location" value={req.location} />
           </div>
           <button type="submit" onClick={createRequest} label="req"  className="btn btn-danger">Create a Request</button>
           <button type="button" onClick={checkStatus} class="btn btn-success">Check the Status</button>
           {/* <Link to="/Checkstatus_P" className="btn btn-success">Check the Status</Link> */}
          </form>

       </div>
     </div>
</>
 );
}
