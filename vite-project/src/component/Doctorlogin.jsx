
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const DoctorRegistrationForm = () => {
    const navigate = useNavigate();
    const [location, setlocation] = useState(
       []
    );
    const [certificate, setcertificate] = useState()
    const [user, setuser] = useState({
        "username": "",
        "phone": "",
        "password": "",
        "email": "",
        "country": "",
        "category":"doctor",
        "degreecode": "",
        "certificate": certificate,
        "isdoctor": "1",
        "location": []
    })
    
    
    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name)
        console.log(value)
        try {
            if (name == "certificate") {
                const url = new FileReader();
                url.readAsDataURL(e.target.files[0])
                url.onload = () => {
                    console.log(url.result)
                    setcertificate(url.result)
                }

            }
            
            setuser(
                (prev) => ({
                    ...prev,
                    [name]: value
                }))
        }
        catch (error) {
            console.log(error)
        }
    }







    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await fetch("http://localhost:4000/Api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            if (data.ok) {
                // setuser("")
                toast.success("Success !");
                setTimeout(() => {
                    navigate("/Login")
                }, 1000)
            }
            else{
                toast.error("User already exist ")
            }

        } catch (error) 
        {
            toast.error("User already exist or internal server error ")
            console.log(error)
        }
    }
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newLocation = [
                    position.coords.latitude,
                    position.coords.longitude,
                ];

                setlocation(newLocation);
                setuser((prev) => ({
                    ...prev,
                    location: {
                        type: 'Point',
                        coordinates: newLocation,
                    },
                }));
            });

        }
        else {
            toast.error("failed to fetch location");
        }
    }, [])
        return (<>
            <div className="container">
                <div className="bg-light py-4 px-4 sm:px-6 ldg:px-8">
                    <div className="container">
                        <h2 className="text-center">Doctor Registration</h2>
                        <form className="mt-4" action="#" method="POST" enctype="multipart/form-data" onSubmit={handlesubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Enter your username"
                                    required
                                    value={user.username}
                                    onChange={handlechange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Enter your phone number (10-15 digits)"
                                    pattern="[0-9]{10,15}"
                                    required
                                    value={user.phone}
                                    onChange={handlechange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter your email address"
                                    required
                                    value={user.email}
                                    onChange={handlechange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter a password (min 8 characters)"
                                    minLength="8"
                                    required
                                    value={user.password}
                                    onChange={handlechange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">
                                    Country
                                </label>
                                <input
                                    id="country"
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    placeholder="Enter your country"
                                    required
                                    value={user.country}
                                    onChange={handlechange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">
                                    Category
                                </label>
                                <input
                                    id="category"
                                    type="text"
                                    name="category"
                                    className="form-control"
                                    placeholder="Enter your category"
                                    required
                                    value={"doctor"}
                                    
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="degreecode" className="form-label">
                                    Degree Code
                                </label>
                                <input
                                    id="degreecode"
                                    type="text"
                                    name="degreecode"
                                    className="form-control"
                                    placeholder="Enter your degree code"
                                    required
                                    value={user.degreecode}
                                    onChange={handlechange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="certificate" className="form-label">
                                    Certificate
                                </label>
                                <input
                                    id="certificate"
                                    type="file"
                                    name="certificate"
                                    className="form-control"
                                    required
                                    value={user.certificate}
                                    onChange={handlechange}
                                />
                            </div>
                            
                            <input type="hidden" name="isDoctor" value="1" />
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer /></>
        );
    };

    export default DoctorRegistrationForm;

