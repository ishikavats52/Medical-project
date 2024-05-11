import React from 'react';

import ContactSection from './Contact';

// import AppointmentSection from './Appointment';
// import DoctorsSection from './Doctorsection';



function Home() {
  return (
    <>
     <div className="hero-div">
      <img
        src="img/image 11 (1) 1.png"
        alt=""
        srcSet=""
      />
      <div className="hero-content">
        <p className="p1 d-flex">Secure your world now</p>
        <h6>Expertise, Commitment, and Proficiency in Blockchain Technology.</h6>
        <h1 className="hero-content-h1">
           De-Centralised Data storing
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, reiciendis!</p>
        <div className="btns d-flex justify-content-evenly">
          <div className="btn-div">Book A Home Visit</div>
          <div className="btn-div">Tests And Services</div>
        </div>
      </div>
    </div>
      <div className="hero-div-2">
        <h1>Facilities We Offer</h1>
        <div className="facilitydiv">
          <div className="fac-1">
            <h1>Block chain based data storing</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quisquam quas, harum
              provident at corporis debitis, dolore ad necessitatibus quos, et est assumenda a consectetur.
              Dolorum optio nihil modi quibusdam tempore distinctio nam!
            </p>

          </div>
          <div className="fac-1">
            <h1>Normal data storing</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quisquam quas, harum
              provident at corporis debitis, dolore ad necessitatibus quos, et est assumenda a consectetur.
              Dolorum optio nihil modi quibusdam tempore distinctio nam!
            </p>
          </div>
        </div>
      </div>


      
{/* <AppointmentSection/> */}

      {/* Services Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
            <h1 class="display-4">Excellent Medical Services</h1>
          </div>
          <div className="row g-5">
            {[
              { icon: 'fa-user-md', name: 'Emergency Care', desc: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit' },
              { icon: 'fa-procedures', name: 'Operation & Surgery', desc: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit' },
              { icon: 'fa-stethoscope', name: 'Outdoor Checkup', desc: 'Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit' },
            ].map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column alignments-center justify-content-center text-center">
                  <div className="service-icon mb-4">
                    <i className={`fa fa-2x ${service.icon} text-white`}></i>
                  </div>
                  <h4 className="mb-3">{service.name}</h4>
                  <p className="m-0">{service.desc}</p>
                  <a className="btn btn-lg btn-primary rounded-pill" href="">
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<ContactSection/>

    </>
  );
}

export default Home;
