
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <Container>
                <Navbar>
                    <Link to="/">
                        <img style={{ width: '200px' }} src={logo} alt="logo" />
                    </Link>
                    <Nav className="ml-auto">
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Home</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Donation</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Events</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>Blog</Link>
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'>{loggedInUser.name}</Link>


                    </Nav>
                </Navbar>
            </Container>
        </div>
    );
};

export default EventTask;