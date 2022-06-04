import React , {useState} from 'react'
import './signup.css'
function Signpara() {
  
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
 
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  const handleContact = (e) => {
    setContact(e.target.value);
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
    <div className="form">
      <div>
        <h1>Signup For Paramedic</h1>
      </div>
 

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" />

<label className="label">Contact</label>
        <input onChange={handleContact} className="input"
          value={contact} type="number" />
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
   Signup
        </button>
      </form>
    </div>
  );
}

export default Signpara