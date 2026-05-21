import React from 'react';
import Hero from './Hero';
import Count from './Count';
import HomeSkills from './HomeSkills'
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <Hero />
            <Count/>
            <HomeSkills/>
            <Portfolio/>
        </div>
    );
};

export default Home;