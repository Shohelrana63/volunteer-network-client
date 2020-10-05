import { FormGroup } from '@material-ui/core';
import React from 'react';
import logo from '../../logos/Group 1329.png';
import './RegisterForm.css';
const RegisterForm = () => {
    return (
        <div>
            <div className="logo">
                <img style={{ height: '80px' }} src={logo} alt="" />
            </div>
            <form action="">
                <FormGroup className="register-form">
                    <h3>Register as a Volunteer</h3>
                    <input type="text" placeholder="Full Name" required />
                    <br />
                    <input type="text" placeholder="Username or Email" required />
                    <br />
                    <input type="text" placeholder="Date" required />
                    <br />
                    <input type="text" placeholder="Description" required />
                    <br />

                    <input type="text" placeholder="Organize books at the library" required />
                    <br />
                    <input type="submit" value="Registration " required />
                </FormGroup>
            </form>
        </div>
    );
};

export default RegisterForm;