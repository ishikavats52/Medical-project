import React from 'react'

function Dashboard() {
  return (
    <>
    <div className='sec-3'>
        <div className="container">
            <div className="sidebar">
                <ul>
                    <li>
                        <a href="#">
                            
                            <div className="title">MEDICO</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            <div className="title">Dashboard</div>
                         </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            <div className="title">Appointments</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            <div className="title">Payments</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            
                            <div className="title">Settings</div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                           
                            <div className="title">Help</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className="top-bar">
                    <div className="search">
                        <input type="text" name="search" placeholder="Search here" />
                        <label htmlFor="search"></label>
                    </div>
                   
                    <div className="user">
                        <img src="doctor-image.jpeg" alt="" />
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-content">
                            <div className="number">67</div>
                            <div className="card-name">Appointments</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">108</div>
                            <div className="card-name">New Patients</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">89</div>
                            <div className="card-name">Earnings</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="number">77</div>
                            <div className="card-name">Operations</div>
                        </div>
                    </div>
                </div>
                <div className="tables">
                    <div className="last-appointments">
                        <div className="heading">
                            <h2>Last Appointments</h2>
                            <a href="#" className="btn">view All</a>
                        </div>
                        <table className="appointments">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Doctor</th>
                                    <th>Condition</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dr. Ishika vats</td>
                                    <td>Dr. ayush chouhan</td>
                                    <td>Dr. vansh jain</td>
                                    <td>Dr. hritik sharma</td>
                                    <td>Dr. Khushi ruhela</td>
                                </tr>
                                <tr>
                                    <td>Dr. Ishika vats</td>
                                    <td>Dr. ayush chouhan</td>
                                    <td>Dr. vansh jain</td>
                                    <td>Dr. hritik sharma</td>
                                    <td>Dr. Khushi ruhela</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="doctor-visiting">
                        <div className="heading">
                            <h2>Doctor Visiting</h2>
                            <a href="#" className="btn">view All</a>
                        </div>
                        <table className="visitig">
                            <thead>
                                <tr>
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Visit-Time</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>Dr.Ishika:</td>
                                    <td>14:00</td>
                                </tr>
                                <tr>
                                    
                                    <td>Dr.Ayush:</td>
                                    <td>14:00</td>
                                </tr>
                                <tr>
                                    
                                    <td>Dr.vansh:</td>
                                    <td>14:00</td>
                                </tr>
                                <tr>
                                    <td>Dr.Hritik:</td>
                                    <td>14:00</td>
                                </tr>
                                <tr>
                                   
                                    <td>Dr.khushi:</td>
                                    <td>14:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</div>



    </>
  );
}
export default Dashboard;

