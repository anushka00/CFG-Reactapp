import React from 'react'

function Signsprov() {
  return (
      <>
       <h2>Signup for Service Provider </h2>
       <form>
  <div className="mb-3">
    <label for="nameInput" class="form-label">Name of the Hospital/Clinic</label>
    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
    </div>

    <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

    <div className="mb-3">
     <label for="contact" class="form-label">Contact</label>
    <input type="number" class="form-control" id="contact" aria-describedby="contactlHelp" />
  </div>

  <div className=" mb-3">
  <p>
        Location :*
        <select name="location" id="state" required="">
          <option value="">Select your State</option>
          <option value="Visa">Andhra Pradesh</option>
          <option value="Visa">Arunachal Pradesh</option>
          <option value="Visa">Assam</option>
          <option value="Visa">Bihar</option>
          <option value="Visa">Chhattisgarh</option>
          <option value="Visa">Goa</option>
          <option value="Visa">Gujarat</option>
          <option value="Visa">Haryana</option>
          <option value="Visa">Himachal Pradesh</option>
          <option value="Visa">Jammu and Kashmir
</option>
          <option value="Visa">Jharkhand</option>
          <option value="Visa">Karnataka</option>
          <option value="Visa">Kerala</option>
          <option value="Visa">Madhya Pradesh</option>
          <option value="Visa">Maharashtra</option>
          <option value="Visa">Manipur</option>
          <option value="Visa">Meghalaya</option>
          <option value="Visa">Mizoram</option>
          <option value="Visa">Nagaland</option>
          <option value="Visa">Odisha</option>
          <option value="Visa">     Punjab</option>
          <option value="Visa">Rajasthan</option>
          <option value="Visa">Sikkim</option>
          <option value="Visa">Tamil Nadu</option>
          <option value="Visa">Telangana</option>
          <option value="Visa">Tripura</option>
          <option value="Visa">Uttarakhand</option>
          <option value="Visa">Uttar Pradesh</option>
          <option value="Visa">West Bengal</option>
          <option value="Visa">Andaman and Nicobar Islands</option>
          <option value="Visa">Chandigarh</option>
          <option value="Visa">Dadra and Nagar Haveli</option>
          <option value="Visa">Daman and Diu</option>
          <option value="Visa">Delhi</option>
          <option value="Visa">Lakshadweep</option>
          <option value="Visa">Puducherry</option>
        
      

        </select>
      </p>
  </div>

  <div className=" mb-3">
   <p>
     Types of Services:
     <select name="types-service" id="state"></select>

   </p>

  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</>
  )
}

export default Signsprov
