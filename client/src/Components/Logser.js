import React, { useState } from 'react';
import "./Checkstatus_P.css";

const Logser = () => {
  return (
    <div className='whole'>
    {/* <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form></div> */}
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
    
    </div>
  );
}

function Card(props) {
  const [style, setStyle] = useState("cont");
  
  const changeStyle = () => {
    console.log("you just clicked");
  
    setStyle("cont2");
  };
  return (
      
    <div className='whole2'>
    <div border="secondary" className="card">
      <div className="card__body">
      <p className="card__title"><b>Patient_ID:</b> {props.patient_ID}</p>
        <p className="card__title"><b>Service:</b> {props.service}</p>
        <p className="card__description"><b>Location:</b> {props.location}</p>
        <button className="button_acc" onClick={changeStyle}>
          Accept
        </button>
        <a href="#" class="card-link">Reject</a>


{/*         
        <Link className="nav-link "  to="Signup">SignUp</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link "  to="Signin">SignIn</Link> */}

      </div>
    </div>
    <br></br>
    </div>
    
    
    

  )
}

export default Logser;