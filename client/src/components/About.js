import React from 'react'
import { Navbar } from './Navbar'
import "./about.css"
import web from "../images/about.PNG"
import { Footer } from './Footer'

export const About = () => {
  return (
	  <>
    <div>
      <Navbar/>

<div className="main">
			<div className='col-lg-15 order-3 order-lg-1 header-img'>
               <img src={web} className='img-fluid animated' alt='home img'/>
               </div>
			   </div>
      <div className="section">
		<div className="container m-0">
			<div className="content-section">
				<div className="title text-center">
					<h1>Why Dakshas NGO?</h1>
					<br></br>
				</div>
				<div classNameName="content">
					<h3 className='vision'>VISION</h3>
					<h4>To deliver more value than we consume, sustainably.</h4>
					<br></br><br></br>
                    <h3 className='mission'>MISSION</h3>
					<h4>To ensure healthcare is delivered, not denied.</h4>
					<br></br>
					<p>


                        Dakshas Foundation helps marginalized patients get non-emergency medical treatment. It builds primary care to cater to 90+% of patients, guided by medical protocols. It taps into its network of healthcare providers for secondary and tertiary healthcare. Dakshas’ healthcare partners provide their unused capacity for these patients at variable cost. Any shortfalls are underwritten by Dakshas’ support system. It strives to ensure that no patient or healthcare provider suffers constraints or conflicts.
Dakshas has achieved tremendous impact at scale in 24 months, proving that Universal Healthcare is sustainable within existing healthcare resources. Dakshas’ hyper-efficient realignment of the existing ecosystem has been accepted by healthcare NGOs and hospitals alike. This reflects great potential to solve India’s healthcare crises, across geography and medical specialties.
Dakshas is now consolidating this unique model onto a tech-based, AI-enabled, medical protocol-driven demand-supply aggregator platform. This will benefit patients, NGOs and healthcare providers alike, heralding an era of ‘collaborative’ healthcare. We hope to ensure that ethical and affordable healthcare delivery is no longer a matter of charity.</p>
				</div>
			</div>
		</div>
	</div>
    </div>
	<Footer/>
	</>
  )
}
