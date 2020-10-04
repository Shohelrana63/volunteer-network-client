import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <div className="mt-5">
                    <div style={{ textAlign: 'center', padding: '20px 0' }}>
                        <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                        <input className='input' type="text" placeholder="Search..." />
                        <button style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                            className='search-button' type="submit">Search</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;