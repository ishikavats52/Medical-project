import React from 'react';

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

      {/* Blog Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '500px' }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
            <h1 className="display-4">Our Latest Medical Blog Posts</h1>
          </div>
          <div className="row g-5">
            {[
              { img: 'img/blog-1.jpg', title: 'Dolor clita vero elitr sea stet dolor justo diam', desc: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', author: 'John Doe', views: 12345, comments: 123 },
              { img: 'img/blog-2.jpg', title: 'Dolor clita vero elitr sea stet dolor justo diam', desc: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', author: 'John Doe', views: 12345, comments: 123 },
              { img: 'img/blog-3.jpg', title: 'Dolor clita vero elitr sea stet dolor justo diam', desc: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', author: 'John Doe', views: 12345, comments: 123 },
            ].map((post, index) => (
              <div key={index} className="col-xl-4 col-lg-6">
                <div className="bg-light rounded overflow-hidden">
                  <img className="img-fluid w-100" src={post.img} alt="" />
                  <div className="p-4">
                    <a className="h3 d-block mb-3" href="">
                      {post.title}
                    </a>
                    <p className="m-0">{post.desc}</p>
                  </div>
                  <div className="d-flex justify-content-between border-top p-4">
                    <div className="d-flex alignments-center">
                      <img className="rounded-circle me-2" src="img/user.jpg" width="25" height="25" alt="" />
                      <small>{post.author}</small>
                    </div>
                    <div className="d-flex alignments-center">
                      <small className="ms-3">
                        <i className="far fa-eye text-primary me-1"></i>{post.views}
                      </small>
                      <small className="ms-3">
                        <i className="far fa-comment text-primary me-1"></i>{post.comments}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12 text-center">
              <button className="btn btn-primary py-3 px-5">Load More</button>
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
