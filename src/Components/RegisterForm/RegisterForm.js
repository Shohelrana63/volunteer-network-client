import { FormGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './RegisterForm.css';
const RegisterForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="logo">
                <img style={{ height: '80px' }} src={logo} alt="" />
            </div>
            <form action="">
                <FormGroup className="register-form">
                    <h3>Register as a Volunteer</h3>
                    <input type="text" placeholder="Full Name" value={loggedInUser.name} required />
                    <br />
                    <input type="text" placeholder="Username or Email" value={loggedInUser.email} required />
                    <br />
                    <input type="text" placeholder="dd/mm/yyyy" required />
                    <br />
                    <input type="text" placeholder="Description" required />
                    <br />

                    <input type="text" placeholder="Organize books at the library" required />
                    <br />
                    <Link to='/task'>
                        <input type="submit" value="Registration " required />
                    </Link>
                </FormGroup>
            </form>
        </div>
    );
};

export default RegisterForm;