import React from 'react';

const AppointmentManager = () => {
  // List of appointments to display
  const appointments = [
    { name: 'John Doe', reason: 'Routine Check-up', time: '10:00 AM' },
    { name: 'Jane Smith', reason: 'Flu Symptoms', time: '2:00 PM' },
    { name: 'Michael Johnson', reason: 'Allergy Consultation', time: '4:30 PM' },
    { name: 'Sarah Lee', reason: 'Annual Physical', time: '9:00 AM' },
    { name: 'David Kim', reason: 'Injury Follow-up', time: '11:30 AM' },
    { name: 'Emily Chen', reason: 'Pregnancy Checkup', time: '3:15 PM' },
  ];

 

  return (
    <div className="d-flex flex-column vh-100"> 
    <h1 style={{textAlign:"center"}}>Appointments</h1>
      <main className="flex-grow-1 overflow-auto p-5"> 
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"> {/* Grid with different breakpoints */}
          {/* Appointment Cards */}
          {appointments.map((appointment, index) => (
            <div key={index} className="col"> {/* Column for grid */}
              <div className="card shadow-sm"> {/* Bootstrap card with shadow */}
                <div className="card-body"> {/* Card body content */}
                  <h3 className="card-title h5">{appointment.name}</h3> {/* Title styling */}
                  <p className="text-muted">{appointment.reason}</p> {/* Muted text */}
                  <p>Appointment Time: {appointment.time}</p> {/* Displaying time */}
                </div>
                <div className="card-footer d-flex justify-content-end"> {/* Card footer for buttons */}
                  <button className="btn btn-success me-2"> {/* Button with Bootstrap styles */}
                    Approve
                  </button>
                  <button className="btn btn-danger"> {/* Button with Bootstrap styles */}
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AppointmentManager;
