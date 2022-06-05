import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import web from "../images/dakshas1.jpg"

function LoginPage(){

  const navigate = useNavigate();

  const [user, setUser] = useState({
      email: "",
      password:""
  });

  function loginServiceProvider(event) {
    console.log(user);
      axios.post("http://localhost:5000/serviceprovider/login", user).then(response => {
            console.log("Service provider Login Successful");
            navigate('/logser',{state:{email:response.data.serviceprovider.email}});
      });

      setUser({
        email: "",
        password:""
      });

    event.preventDefault();
  }

  function loginParamedic(event) {

      axios.post("http://localhost:5000/paramedics/login", user).then(response => {
            console.log("Paramedic Login Successful");
            navigate('/loginpara',{state:{email:response.data.user.email}});
      });

      setUser({
        email: "",
        password:""
      });

    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((preValues) => {
      return {
        ...preValues,
        [name]: value
      };
    });
  }

  function loginParamedic(event) {

        axios.post("http://localhost:5000/paramedics/login", user).then(response => {
              console.log("Paramedic Login Successful");
              navigate('/loginpara');
        });

        setUser({
          email: "",
          password:""
        });

      event.preventDefault();
    }

    function handleChange(event) {
      const { name, value } = event.target;
      setUser((preValues) => {
        return {
          ...preValues,
          [name]: value
        };
      });
    }

    return (
  <>


    <div className="container">
      <h1 className="text-dark" style={{fontSize:"75px", textAlign:"center", marginTop: "1rem"}}>LOG IN</h1>
        <div className="row justify-content-center">
            <div className="col-md-9 col-lg-12 col-xl-10">
                <div className="card shadow-lg o-hidden border-0 my-5">
                    <div className="card-body p-0">
                        <div className="row">
                          <div className="col-lg-4 d-none d-lg-flex">
                          <div className='main'>
    <div className='col-lg-4 order-3 order-lg-2 header-img'>
    <img src={web} className='img-fluid animated' alt='home img'/>
    </div>
    </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h4 className="">Welcome!</h4>
                                    </div>
                                    <form className="user">
                                        <div className="mb-3">
                                          <input onChange={handleChange} className="form-control form-control-user" type="email" id="exampleFirstName" placeholder="Email" name="email" value={user.email} />
                                        </div>
                                        <div className="mb-3">
                                          <input onChange={handleChange} className="form-control form-control-user" type="password" id="examplePasswordInput" placeholder="Password" name="password" value={user.password}/>
                                        </div>
                                    </form>
                                    <button onClick={loginServiceProvider} className="btn btn-primary btn-user w-100" type="submit">Login as a Service Provider</button>

                                  <button onClick={loginParamedic} className="btn btn-primary btn-user w-100" type="submit">Login as a Paramedic</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default LoginPage;
