import React from 'react';
import "./Logser.css";


const Checkstatus_P = () => {
  return (
      <div className='whole'>
    <div className="wrapper">
      <Card
        patient_ID="1"
        service="consult"
        location="hyd"
      />

        <Card
        patient_ID="2"
        service="icu"
        location="chennai"
      />
      <Card
        patient_ID="3"
        service="medicine"
        location="mumbai"
      />


    </div>
    <div className='matter'>
    <h5 className='text-center'><b>Color</b></h5>
    <p className='text-success'><b>Green</b>-Accepted</p>
    <p className='text-danger'><b>Red</b>-Rejected</p>
    </div>
    </div>
  );
}

function Card(props) {
  return (
      
    <div className='whole2'>
    <div border="secondary" className="card">
      <div className="card__body">
      <p className="card__title"><b>Patient_ID:</b> {props.patient_ID}</p>
        <p className="card__title"><b>Service:</b> {props.service}</p>
        <p className="card__description"><b>Location:</b> {props.location}</p>
      </div>
    </div>
    <br></br>
    </div>
    
    
    

  );
}

export default Checkstatus_P;