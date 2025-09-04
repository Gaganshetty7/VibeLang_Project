import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import HeroIllustration from '../components/HeroIllustration';

const HomePage = () => {
    return (
        <div>
          <HeroIllustration>
            <NavBar />
            <HeroSection />
          </HeroIllustration>
        </div>
    );
};

export default HomePage;

