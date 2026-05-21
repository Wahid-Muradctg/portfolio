import React from 'react';
import Hero from './Hero';
import Count from './Count';
import HomeSkills from './HomeSkills'
import Portfolio from './Portfolio';
import Reviews from './Reviews';
import ContactInfo from '../ContactInfo';


const Home = () => {
    return (
        <div>
            <Hero />
            <Count/>
            <HomeSkills/>
            <Portfolio/>
            <Reviews/>
            <ContactInfo/>
        </div>
    );
};

export default Home;