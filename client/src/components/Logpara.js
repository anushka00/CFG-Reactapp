import React from "react";
import { Navbar } from "./Navbar";

export const Logpara = () => {

 return(
     <>
    <Navbar/>
    <form>
         <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                <div class="form-items">
     <h1>LOGGED IN AS A PARAMEDIC </h1>
     <label>PATIENT ID </label>
     <input name="number"  />
     <div className="col-md-6 mb-4">

                    <select className="select">
                      <option value="1" >Location where Service is Required</option>
                      <option value="2">Delhi</option>
                      <option value="3" >Chennai</option>
                      <option value="4" >Bombay</option>
                    </select>

                  </div>

                  <div className="col-md-6 mb-4">

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
                </div>
            </div>
        </div> 
        </div>
        </form>

</>
 );
}

