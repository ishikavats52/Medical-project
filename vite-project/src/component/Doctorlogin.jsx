import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DoctorRegistrationForm = () => {
    return (
        <div className="container">
            <div className="bg-light py-4 px-4 sm:px-6 lg:px-8">
                <div className="container">
                    <h2 className="text-center">Doctor Registration</h2>
                    <form className="mt-4" action="#" method="POST" enctype="multipart/form-data">
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
    );
};

export default DoctorRegistrationForm;
