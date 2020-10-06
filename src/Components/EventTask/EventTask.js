
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/fakeData';
import { useEffect } from 'react';
import Task from '../Task/Task';

const EventTask = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [task, setTask] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

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
                        <Link className='link ml-5' style={{ color: 'black' }} to='/'> <b>{loggedInUser.name}</b> </Link>
                    </Nav>
                </Navbar>
                <div>
                    {
                        task.map(eventData => <Task eventData={eventData}></Task>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default EventTask;