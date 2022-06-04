import React from "react";
import { Navbar } from "./Navbar";
import './lpara.css'

export const Logpara = () => {

 return(
     <>
     <form>
     <div className="container">
         <h2 className="main_heading" ><b>LOGGED IN AS A PARAMEDIC </b></h2>
         <p>PATIENT ID</p> 
         <input type="number" name="id"/>
         <p>Location</p>
         <div>
                    <select className="select">
                      <option value="1">Delhi</option>
                      <option value="2" >Bangalore</option>
                      <option value="3" >Chennai</option>
                    </select>
        </div>
         <p>Services Offered</p>
         <div>
                    <select className="select">
                      <option value="1" >Types of Services </option>
                      <option value="2">Clinic Consultation</option>
                      <option value="3" >Surgery</option>
                      <option value="3" >Medicinal Items</option>
                      <option value="4">Vacant Beds/Rooms</option>
                    </select>
</div>
         <button type="submit" label="req" className="btn btn-success">Create a Request</button>
         <button type="button" label="status" className="btn btn-outline-info">Check the Status</button>
                       

         </div>
     </form>
</>
 );
}

