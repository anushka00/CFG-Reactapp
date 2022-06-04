import React from 'react';
import "./Checkstatus_P.css";


const Checkstatus_P = () => {
  return (
      <div>
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


    </div>
    <div className='matter'>
    <h5 className=''>Color</h5>
    <p className='text-success'>Green-Accepted</p>
    <p className='text-danger'>Red-Rejected</p>
    </div>
    </div>
  );
}

function Card(props) {
  return (
      
    <div className='whole'>
    <div border="secondary" className="card">
      <div className="card__body">
      <p className="card__title">{props.patient_ID}</p>
        <p className="card__title">{props.service}</p>
        <p className="card__description">{props.location}</p>
      </div>
    </div>
    <br></br>
    </div>
    
    
    

  );
}

export default Checkstatus_P;