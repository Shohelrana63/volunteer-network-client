import React from 'react';
import logo from '../../logos/Group 1329.png';
import googleLogo from '../../logos/google.png';
import './Login.css';

const Login = () => {
    const googleSignInHandler = () => {


    }
    return (

        <div>
            <div className="logo">
                <img style={{ height: '60px' }} src={logo} alt="" />
            </div>
            <div className="google-form">
                <h3 style={{ textAlign: 'center' }}>Login With</h3>
                <div
                    onClick={googleSignInHandler} style={{ cursor: "pointer" }} className="google">
                    <img style={{ width: "30px", height: "30px", marginRight: "25px" }} src={googleLogo} alt="" />
                    <p style={{ textAlign: 'center' }}>Continue with Google</p>
                </div>
            </div>
        </div>



    );
};

export default Login;