import { useEffect, useState } from 'react';
import { useAuth } from '../ContextApi/Authcontext';

import { Link, Outlet, useNavigate } from 'react-router-dom';
import {Navigate}  from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../index.css"
export default function MedicalDashboard() {
  const [patients, setPatients] = useState([]);
  const [dataset, setdataset] = useState([])
  const [report, setreport] = useState([])

  const[loading,setloading]=useState(false)
  const[path,setpath]=useState("")

  const [locationdata, setlocation] = useState({
    "latitude":"",
    "longitude":""
  })
  const [timedata,settimedata]=useState()
  const [patientdetail, setpatientdata] = useState({
    "age": "",
    "symptoms": "",
    "time": "",
    "month": "",
    "location": "",
    "reports": report,
    "email":"",
    "city":""

  })
  const { token } = useAuth()
  useEffect(()=>{
    const date= new Date();
    settimedata(`${date.getHours()}hr,${date.getMinutes()}min`)
  },[])

  useEffect(() => {
if (navigator.geolocation) {
  const location=  navigator.geolocation.getCurrentPosition((position)=>{
    const loc={
      latitude:position.coords.latitude
      ,
      longitude:position.coords.longitude
      };
    console.log(loc)
    setlocation(loc)
  })
  
  
  // console.log(location)
  // setlocation(location)
}
const time= patientdetail.time=timedata
  }, [])
  const navigate = useNavigate();

  useEffect(() => {

    const datafetch = async () => {
      try {
        const response = await fetch("http://localhost:4000/Api/patient_data_to_doc", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            "Authorization": `Bearer ${token}`


          }
        })
        const data = await response.json()
        console.log(data.data)
        if (response.ok) {
          console.log(data.data)
          setPatients(data.data.patient)
        }
      } catch (error) {
        console.log(error)
      }
    }
    datafetch()
    patientdetail.time=timedata
  }, [navigate, dataset])
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {

      setloading(true)

      const updatedstate={
        ...patientdetail,
        location:locationdata,
        time:timedata
      }
      console.log("before submission",updatedstate)
      const response = await fetch("http://localhost:4000/Api/list_patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
        body: JSON.stringify(updatedstate)
      })
      const data = await response.json()
      if (response.ok) {

        setloading(false)

        toast.success("User created !");
        setdataset(data)
        setpatientdata({
          "username":"",
          "age":"",
          "symptoms":"",
          "time": "",
          "month": "",
          "location": "",
          "reports": "",
          "email":""
      
        })
        setreport([])
      }

    } catch (error) {
      toast.error("user not exist or internal server error");
      console.log(error)
    }
  }
  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name == "reports") {
      let url=new  FileReader();
      url.readAsDataURL(e.target.files[0])
      url.onload=()=>{
        console.log(report)
        console.log(url.result)
        setreport(url.result)
      }
      url.onerror=()=>{
        console.log("error in image fetching")
      }
    }
    setpatientdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  useEffect(() => {
    setpatientdata((prev) => ({
      ...prev,
      reports: report,
    }));
  }, [report]);

  useEffect(()=>{
const {pathname}=window.location;
console.log(pathname)
setpath(pathname)
  })

  return (
    <>
      <div className="container-fluid">
        <div className="row min-vh-100">
          <aside className="d-none d-lg-block col-lg-3 border-end bg-light asidediv">
            <div className="d-flex flex-column h-100">
              <div className="d-flex align-items-center p-3 border-bottom">
                <a className="d-flex align-items-center gap-2 text-decoration-none text-dark" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path
                      d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"
                    />
                  </svg>
                  <span>Acme Clinic</span>
                </a>
                <button
                  className="btn btn-outline-secondary ms-auto p-2"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="visually-hidden">Toggle notifications</span>
                </button>
              </div>

              <nav className="flex-grow overflow-auto p-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      Dashboard
                    </a>
                  </li>

                  <li></li>


                </ul>
              </nav>

              <div className="mt-auto p-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Upgrade to Pro</h5>
                    <p className="card-text">
                      Unlock all features and get unlimited access to our support team.
                    </p>
                    <button className="btn btn-primary btn-block">Upgrade</button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="col-lg-9 d-flex flex-column">
            <header className="d-flex align-items-center border-bottom p-3">
              <a className="d-lg-none" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 a0 0 2v-5h5V4a2 2 a2" />
                </svg>
                <span className="visually-hidden">Home</span>
              </a>

              <div className="flex-grow-1">
                <form>
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search patients..."
                    />
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-muted"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </span>
                  </div>
                </form>
              </div>

              <button className="btn btn-outline-secondary rounded-circle">
                <img
                  src="/placeholder.svg"
                  width="32"
                  height="32"
                  className="rounded-circle"
                  alt="User avatar"
                />
                <span className="visually-hidden">Toggle user menu</span>
              </button>
            </header>

            <h4>To see appointment click here-<Link to={"/dash/Appointment"} style={{textDecoration:"none"}}>Appointment</Link></h4>
            <h6>{path=="/dash/Appointment"?<Link style={{textDecoration:"none"}} to="/dash">Remove</Link>:null}</h6>
            <Outlet/>

            <main className="flex-grow p-4">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Add New Patient</h5>
                      <p className="card-text">Fill out the form to add a new patient to the system.</p>
                      <form onSubmit={handlesubmit}>
                      <div className="mb-3">
                          <label htmlFor="symptoms" className="form-label">
                            Patient-email
                          </label>
                          <input type="email" name="email" className="form-control" placeholder='Enter Patient-Email' value={patientdetail.email}
                            onChange={handlechange} />

                        </div>

                        <div className="mb-3">
                          <label htmlFor="age" className="form-label">
                            Age
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Enter patient age"
                            name='age'
                            value={patientdetail.age}
                            onChange={handlechange}
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="symptoms" className="form-label">
                            Symptoms
                          </label>
                          <textarea
                            className="form-control"
                            id="symptoms"
                            placeholder="Enter symptoms"
                            name='symptoms'
                            value={patientdetail.symptoms}
                            onChange={handlechange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="symptoms" className="form-label">
                            Time
                          </label>
                          <input type="datetime" name="time" className="form-control" value={timedata}
                            onChange={handlechange} />

                        </div>
                        {/* <div className="mb-3">
                          <label htmlFor="symptoms" className="form-label">
                            City
                          </label>
                          <input type="text" name="city" className="form-control" value={patientdetail.city}
                            onChange={handlechange} />

                        </div> */}
                      
                        <div className="mb-3">
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="Enter city"
                            name='city'
                            value={patientdetail.city}
                            onChange={handlechange}

                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="symptoms" className="form-label">
                            Month
                          </label>
                          <input type="month" className="form-control" name="month" id="" value={patientdetail.month}
                            onChange={handlechange} />

                        </div>
                        <div className="mb-3">
                          <label htmlFor="symptoms" className="form-label">
                            Reports
                          </label>
                          <input type="file" name="reports" id="" onChange={handlechange} />
                        </div>


                       { loading?<h1>Loading....</h1>:<button

                          type="submit"
                          className="btn btn-primary w-full"
                        >
                          Add Patient

                        </button>}

                      </form>
                    </div>
                  </div>
                </div>
               
                {/* Patient List Card */}
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Patient List</h5>
                      <table className="table tablesec">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Symptoms</th>
                            <th scope="col">Date</th>
                            <th scope="col">City</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patients.map((patient, index) => (
                            <tr key={index}>
                              <td>{patient.userexist.username}</td>
                              <td>{patient.age}</td>
                              <td>{patient.symptoms}</td>
                              <td>{patient.time}</td>
                              <td>{patient.city}</td>
                              {/* <td>{patient.}</td> */}
                              <td>

                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <h4>{`Total Patient listed:${patients.length}`}</h4>
                    </div>

                   
                  </div>
                 
                </div>
              </div>
             
            </main>
           
          </div>
        </div>
        
      </div>
      

      <ToastContainer />
    </>
  );
}
