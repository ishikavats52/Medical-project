import React from 'react';

import ContactSection from './Contact';
import AppointmentSection from './Appointment';
import DoctorsSection from './Doctorsection';


function Home() {
  return (
    <>
     <div className="hero-div">
      <img
        src="img/1000_F_466414200_TUwqAaiQOM9RhMG38DXW03WXbzh4lHkX.jpg"
        alt=""
        srcSet=""
      />
      <div className="hero-content">
        <p className="p1 d-flex">Secure your world now</p>
        <h6>Excellence, Dedicated, and Experienced Laboratory Technologists</h6>
        <h1 className="hero-content-h1">
          Subtle Clinical & <br /> Laboratory Tests!
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
            <h1>Appointment</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quisquam quas, harum
              provident at corporis debitis, dolore ad necessitatibus quos, et est assumenda a consectetur.
              Dolorum optio nihil modi quibusdam tempore distinctio nam!
            </p>

          </div>
          <div className="fac-1">
            <h1>Appointment</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum commodi quisquam quas, harum
              provident at corporis debitis, dolore ad necessitatibus quos, et est assumenda a consectetur.
              Dolorum optio nihil modi quibusdam tempore distinctio nam!
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href="">
                  <i className="bi bi-telephone me-2"></i>+012 345 6789
                </a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href="">
                  <i className="bi bi-envelope me-2"></i>info@example.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i class="fab fa-instagram"></i>
                </a>
                <a className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


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


    </>
  );
}

export default Home;
