import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../images/img2.jpg"
import { Navbar } from './Navbar'
import  Signpara from "../components/Signpara";
import Signsprov from '../components/Signsprov';
export const Home = () => {
  return (
  <>
     <Navbar/>
     <section id="header" className='d-flex align-items-center'>
       <div className='container-fluid nav_bg'>
         <div className='row'>
           <div className='col-10 mx-auto'>
             <div className='row'>
             <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
               <h1>
                 Engage with{" "}  <strong className='brand-name'> Daksha NGO </strong>
               </h1>
               <h2 className='my-3'>
               We string redundant pre-paid resources in the healthcare ecosystem
               </h2>
               <div className="mt-3">
                 <NavLink to="/signpara" className='btn-get-started'>
                   SIGN UP FOR PARAMEDICS 

                 </NavLink>
               </div>

               <div className="mt-3">
                 <NavLink to="/signsprov" className='btn-get-started'>
                   SIGN UP FOR SERVICE PROVIDERS 
                 </NavLink>
               </div>

               <div className="mt-3">
                 <NavLink to=" " className='btn-get-started'>
                  LOGIN
                 </NavLink>
               </div>


             </div>
             <div className='col-lg-6 order-1 order-lg-2 header-img'>
               <img src={web} className='img-fluid animated' alt='home img'/>
               </div>
               </div>
           </div>
         </div>
       </div>

     </section>
    
     </> 
  )
}
