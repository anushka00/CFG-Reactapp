import React , {useState} from 'react'
import './signup.css'

function Signsprov() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [services, setServices] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  const handleLocation = (e) => {
    setLocation(e.target.value);
    setSubmitted(false);
  };

  const handleServices = (e) => {
    setServices(e.target.value);
    setSubmitted(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 

  

  return (
      <>
          <div className="formpage">
            <div className="form">
      <div>
        <h1>Signup For Service Provider</h1>
      </div>


     

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
    <form>
       <label className="label">Name of the Hospital/Client</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />

        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
 <label className="label">Location</label>
        <select  className="label input"   onChange={handleLocation} value={location} required="">
          <option value="" classname="label input">Select your State</option>
          <option value="AP">Andhra Pradesh</option>
          <option value="Arunachal">Arunachal Pradesh</option>
          <option value="As">Assam</option>
          <option value="Bhr">Bihar</option>
          <option value="Chts">Chhattisgarh</option>
          <option value="Goa">Goa</option>
          <option value="Guj">Gujarat</option>
          <option value="Har">Haryana</option>
          <option value="Hima">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir
</option>
          <option value="Jhk">Jharkhand</option>
          <option value="krnt">Karnataka</option>
          <option value="krl">Kerala</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="maha">Maharashtra</option>
          <option value="Mani">Manipur</option>
          <option value="Meghal">Meghalaya</option>
          <option value="Mizo">Mizoram</option>
          <option value="naga">Nagaland</option>
          <option value="odi">Odisha</option>
          <option value="Pjb">     Punjab</option>
          <option value="raj">Rajasthan</option>
          <option value="Skm">Sikkim</option>
          <option value="Tn">Tamil Nadu</option>
          <option value="tel">Telangana</option>
          <option value="Tri">Tripura</option>
          <option value="utk">Uttarakhand</option>
          <option value="up">Uttar Pradesh</option>
          <option value="wb">West Bengal</option>
          <option value="andaman">Andaman and Nicobar Islands</option>
          <option value="chnd">Chandigarh</option>
          <option value="dadar">Dadra and Nagar Haveli</option>
          <option value="Daman">Daman and Diu</option>
          <option value="del">Delhi</option>
          <option value="lak">Lakshadweep</option>
          <option value="pudu">Puducherry</option>
        
      

        </select>
  
        <label className="label">Services</label>


 <select  className="label input"   onChange={handleServices} value={services} required="">
  <option value="" classname="label input">Select your service</option>
  <option value="npo">Non-Profit hospital</option>
  <option value="gov">Government hospital</option>
  <option value="prv">Private Hospital</option>
  </select>
  
  
  <button type="submit" class="btn btn-primary">Signup</button>
</form>
</div>
</div>
</>
  )
}

export default Signsprov
