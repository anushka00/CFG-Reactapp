import React from "react";
import { Navbar } from "./Navbar";
import './lpara.css'
export const Logpara = () => {

 return(
     <>
     <Navbar/>
     <div className="container">
       <h3>Request for Service</h3>
       <div className="form-container">
         <form>
           <div className="input-name">
           <i class="fa-solid fa-user"></i>
           <input type="number" placeholder="Enter Id" className="name"/>
           </div>

           <div className="input-name">
             <select className="country">
             <option value="1" >Types of Services </option>
                      <option value="2">Clinic Consultation</option>
                      <option value="3" >Surgery</option>
                      <option value="3" >Medicinal Items</option>
                      <option value="4">Vacant Beds/Rooms</option>
             </select>
           </div>

           <div className="input-name">
             <select className="country">
             <option value="1" >Location </option>
                      <option value="1">Delhi</option>
                      <option value="2" >Bangalore</option>
                      <option value="3" >Chennai</option>
                      <option value="4">Mumbai</option>
             </select>
           </div>
           <button type="submit" label="req"  className="btn btn-danger">Create a Request</button>
           <button type="button" class="btn btn-success">Check the Status</button>
          </form>
          
       </div>
     </div>
</>
 );
}

