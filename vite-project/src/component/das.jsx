import { useState } from 'react';

export default function MedicalDashboard() {
  const [patients, setPatients] = useState([
    {
      name: 'John Doe',
      age: 35,
      symptoms: 'Fever, Cough, Headache',
    },
    {
      name: 'Jane Smith',
      age: 42,
      symptoms: 'Chest Pain, Shortness of Breath',
    },
    {
      name: 'Michael Johnson',
      age: 28,
      symptoms: 'Sore Throat, Fatigue',
    },
    {
      name: 'Emily Davis',
      age: 19,
      symptoms: 'Nausea, Dizziness',
    },
    {
      name: 'David Lee',
      age: 55,
      symptoms: 'Back Pain, Muscle Aches',
    },
  ]);

  const handleApprove = (patientName) => {
    console.log(`Approved: ${patientName}`);
  };

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <aside className="d-none d-lg-block col-lg-3 border-end bg-light">
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

                {/* Add more nav links here */}
                {/* Truncated for brevity */}
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

          <main className="flex-grow p-4">
            <div className="row">
              {/* Add Patient Card */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Add New Patient</h5>
                    <p className="card-text">Fill out the form to add a new patient to the system.</p>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter patient name"
                        />
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
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-full"
                      >
                        Add Patient
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Patient List Card */}
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Patient List</h5>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Age</th>
                          <th scope="col">Symptoms</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {patients.map((patient, index) => (
                          <tr key={index}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.symptoms}</td>
                            <td>
                              <button
                                className="btn btn-outline-primary"
                                onClick={() => handleApprove(patient.name)}
                              >
                                Approve
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
