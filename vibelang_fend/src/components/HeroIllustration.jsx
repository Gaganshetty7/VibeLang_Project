import React from 'react';

const HeroIllustration = ({ children }) => {
    return (
        <div style={styles.heroBg}>
            {children}
        </div>
    )
}


const styles = {
  heroBg: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    background: '#003973',
    backgroundImage: 'linear-gradient(to right, #E5E5BE, #003973)'
  },
};

export default HeroIllustration;
