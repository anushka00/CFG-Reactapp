import React from 'react';
import "./Checkstatus_P.css"; 
import {Navbar} from "./Navbar";


const Checkstatus_P = () => {
  return (
      <div className='whole'> 
      <h1 style={{"textAlign":"center"}} >CHECK STATUS</h1>
    <div className="wrapper">
      <Card
        patient_ID="1"
        service="consult"
        location="hyd"
        status="Approved"
      />

        <Card
        patient_ID="2"
        service="icu"
        location="chennai"
        status="Approved"

      />
      <Card
        patient_ID="3"
        service="medicine"
        location="mumbai"
        status="Rejected"

      />


    </div>
    
    </div>
  );
}

function Card(props) {
  return (
     
    
    <div className='whole2'>
        {/* <Navbar /> */}
    <div border="secondary" className="card">
      <div className="card__body">
      <p className="card__title"><b>Patient_ID:</b> {props.patient_ID}</p>
        <p className="card__title"><b>Service:</b> {props.service}</p>
        <p className="card__description"><b>Location:</b> {props.location}</p>
        <p className="card__description"><b>Status:</b> {props.status}</p>
      </div>
    </div>
    <br></br>
    </div>
    
    
    
    

  );
}

export default Checkstatus_P;