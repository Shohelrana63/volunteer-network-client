import { Container, Grid } from '@material-ui/core';
import React from 'react';
import volunteerImages from '../../fakeData/fakeData';
import EventCard from '../EventCard/EventCard';
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
                <div>
                    <Grid container item xs={12} spacing='5' justify='center' style={{ textAlign: 'center', margin: 'auto' }}>

                        {
                            volunteerImages.map(eventCard => <EventCard eventCard={eventCard}></EventCard>)
                        }

                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Home;