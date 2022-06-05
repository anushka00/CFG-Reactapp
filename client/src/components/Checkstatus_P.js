import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Checkstatus_P.css";
import {Navbar} from "./Navbar";
import { useNavigate } from "react-router-dom";


const Checkstatus_P = () => {

  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    axios.get(`http://localhost:5000/request/`).then(res => {
      setRequests(res.data.orders);
    }).catch((error) => {
      navigate('/');
    });

    }, []);

  return (
    <>
    <Navbar />
      <div className='whole'>
      <h1 style={{"textAlign":"center"}} >CHECK STATUS</h1>
    <div className="wrapper">
      {requests.map((req, index) => {
            return (

              <Card
                patient_ID={req.paramedic_id}
                service={req.requested_service}
                location={req.location}
                status={req.request_status}
              />
      );
    })}

    </div>

    </div>
    </>
  );
}

function Card(props) {
  return (


    <div className='whole2'>

    <div style={{ backgroundColor: props.status==="Accepted" ? "#519259" : props.status==="Pending" ? "#ffffff" : "#FF1818" }} border="secondary" className="card1">
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
