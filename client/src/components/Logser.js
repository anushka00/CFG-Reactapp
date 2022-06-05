import React, { useState, useEffect } from "react";
import "./Logser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logser = () => {

  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);

  const [location, setLocation] = useState("");

  useEffect(() => {

    axios.get(`http://localhost:5000/request/status/Pending`).then(res => {
      setRequests(res.data);
    }).catch((error) => {
      navigate('/');
    });

    }, []);

    function accept(id){
      var change = {"request_status": "Accepted"};

      axios.patch(`http://localhost:5000/request/${id}`, change).then(response => {
          console.log(response.data);
          setRequests((preValues) => {
            return requests.filter((requ, index) => {
              return requ._id !== id;
            });
          });
      });
    }

    function reject(id){
      var change = {"request_status": "Rejected"};

      axios.patch(`http://localhost:5000/request/${id}`, change).then(response => {
          console.log(response.data);
          setRequests((preValues) => {
            return requests.filter((requ, index) => {
              return requ._id !== id;
            });
          });
      });
    }

    function handleChange(event) {
      const { name, value } = event.target;
      setLocation(value);
    }

    function getByLoc(){
      console.log(location);
      setRequests((preValues) => {
        return requests.filter((requ, index) => {
          console.log(`A ${requ.location}`);
          return requ.location === location;
        });
      });
    }

  return (
    <div className='whole'>
      <h1 style={{"textAlign":"center"}}>Paramedic Requests</h1>
      <>
      <ion-icon name="search-outline "></ion-icon>
      <input className='search w-25'
      type="search"
      placeholder="Search location"
      name="location"
      value={location}
      onChange={handleChange}
    />
<button type="button" onClick={getByLoc} class="btn_search">Search</button>
    </>

      <br /><br />
    <div className="wrapper">
    {requests.map((req, index) => {
          return (
            <Card
              className="container m-0"
              id={req._id}
              patient_ID={req.patientId}
              service={req.requested_service}
              location={req.location}
              accept={accept}
              reject={reject}
            />
    );
  })}



    </div>

    </div>
  );
}

function Card(props) {



  return (

    <div className='whole2'>
    <div class="container">
  <div class="row card1">
    <div class="col">
    <p className="card__title"><b>Patient_ID:</b> {props.patient_ID}</p>
        <p className="card__title"><b>Service:</b> {props.service}</p>
        <p className="card__description"><b>Location:</b> {props.location}</p>
        <button type="button" onClick={()=>props.accept(props.id)} class="btn btn-1">Accept</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={()=>props.reject(props.id)} class="btn btn-2">Reject</button>
    </div>

  </div>
</div>
    <br></br>


    

    </div>




  )
}

export default Logser;
