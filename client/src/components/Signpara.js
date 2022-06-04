import React , {useState} from 'react'
import './signup.css'
import axios from "axios";

function Signpara() {

  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
    setSubmitted(false);
  };



  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
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

  // Showing error message if error is true
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

    function registerUser(event) {

      var user = {
        email:email,
        password:password,
        PhoneNo: contact,
        name: name
      }

      axios.post("http://localhost:5000/paramedics/signup", user).then(response => {
        console.log(response.data);
        alert("User Created!");
      });

      console.log(user);
      event.preventDefault();

  }

  return (
    <div className="form">
      <div>
        <h1>Signup For Paramedic</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
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

        <button onClick={registerUser} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signpara
